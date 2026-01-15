import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, Agent } from '../lib/supabase';
import { User } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  agent: Agent | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  createUser: (email: string, password: string, fullName: string, role: string, phone?: string) => Promise<{ error: Error | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [agent, setAgent] = useState<Agent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchAgentProfile(session.user.id);
      } else {
        setLoading(false);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      (() => {
        if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
          setUser(session?.user ?? null);
          if (session?.user) {
            fetchAgentProfile(session.user.id);
          }
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
          setAgent(null);
          setLoading(false);
        }
      })();
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchAgentProfile = async (userId: string, retries = 0) => {
    try {
      const { data, error } = await supabase
        .from('agents')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (error) throw error;

      if (!data && retries < 5) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return fetchAgentProfile(userId, retries + 1);
      }

      setAgent(data);
    } catch (error) {
      console.error('Error fetching agent profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return { error };
      }

      if (data.user) {
        setUser(data.user);
        await fetchAgentProfile(data.user.id);
      }

      return { error: null };
    } catch (error) {
      return { error: error as Error };
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const createUser = async (email: string, password: string, fullName: string, role: string, phone?: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: undefined,
          data: {
            full_name: fullName,
            role: role,
            phone: phone,
            hospital_affiliation: '',
          },
        },
      });

      if (error) throw error;

      return { error: null };
    } catch (error) {
      return { error: error as Error };
    }
  };

  return (
    <AuthContext.Provider value={{ user, agent, loading, signIn, signOut, createUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
