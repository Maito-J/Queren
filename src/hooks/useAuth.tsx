import React, { createContext, useContext, useEffect, useState } from 'react'
import { Session, User } from '@supabase/supabase-js'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import type { Profile, UserRole } from '@/types'

// Demo mode configuration - activated when Supabase is not configured
// Use the centralized isSupabaseConfigured flag for reliable detection
const DEMO_MODE = !isSupabaseConfigured

// Demo users for testing without Supabase
const DEMO_USERS: Record<string, { password: string; profile: Profile }> = {
    'jcgmode@gmail.com': {
        password: 'testpass',
        profile: {
            id: 'demo-worker-001',
            email: 'jcgmode@gmail.com',
            full_name: 'Test Cleaner',
            phone: '(604) 555-1234',
            role: 'worker' as UserRole,
            avatar_url: null,
            created_at: new Date().toISOString(),
        }
    },
    'queren@admin.local': {
        password: 'admin',
        profile: {
            id: 'demo-owner-001',
            email: 'queren@admin.local',
            full_name: 'Queren',
            phone: '(604) 555-0000',
            role: 'owner' as UserRole,
            avatar_url: null,
            created_at: new Date().toISOString(),
        }
    },
    'client@demo.local': {
        password: 'demo',
        profile: {
            id: 'demo-client-001',
            email: 'client@demo.local',
            full_name: 'Demo Client',
            phone: '(604) 555-9999',
            role: 'client' as UserRole,
            avatar_url: null,
            created_at: new Date().toISOString(),
        }
    }
}

interface AuthContextType {
    session: Session | null
    user: User | null
    profile: Profile | null
    role: UserRole | null
    isLoading: boolean
    isDemoMode: boolean
    signIn: (email: string, password: string) => Promise<{ error: Error | null }>
    signUp: (email: string, password: string, fullName: string, phone: string) => Promise<{ error: Error | null }>
    signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [session, setSession] = useState<Session | null>(null)
    const [user, setUser] = useState<User | null>(null)
    const [profile, setProfile] = useState<Profile | null>(null)
    // Start with isLoading false in demo mode so buttons render immediately
    const [isLoading, setIsLoading] = useState(!DEMO_MODE)

    useEffect(() => {
        // Check for demo user in localStorage
        if (DEMO_MODE) {
            const storedDemoUser = localStorage.getItem('demo_user')
            if (storedDemoUser) {
                const demoUser = DEMO_USERS[storedDemoUser]
                if (demoUser) {
                    setUser({ id: demoUser.profile.id, email: storedDemoUser } as User)
                    setProfile(demoUser.profile)
                }
            }
            setIsLoading(false)
            return
        }

        // Get initial session from Supabase
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            setUser(session?.user ?? null)
            if (session?.user) {
                fetchProfile(session.user.id)
            } else {
                setIsLoading(false)
            }
        })

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (_event, session) => {
                setSession(session)
                setUser(session?.user ?? null)
                if (session?.user) {
                    await fetchProfile(session.user.id)
                } else {
                    setProfile(null)
                }
                setIsLoading(false)
            }
        )

        return () => subscription.unsubscribe()
    }, [])

    async function fetchProfile(userId: string) {
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userId)
            .single()

        if (!error && data) {
            setProfile(data)
        }
        setIsLoading(false)
    }

    async function signIn(email: string, password: string) {
        // Demo mode authentication
        if (DEMO_MODE) {
            const demoUser = DEMO_USERS[email.toLowerCase()]
            if (demoUser && demoUser.password === password) {
                setUser({ id: demoUser.profile.id, email } as User)
                setProfile(demoUser.profile)
                localStorage.setItem('demo_user', email.toLowerCase())
                return { error: null }
            }
            return { error: new Error('Invalid email or password. Demo users: jcgmode@gmail.com/testpass (worker), queren@admin.local/admin (owner)') }
        }

        const { error } = await supabase.auth.signInWithPassword({ email, password })
        return { error: error as Error | null }
    }

    async function signUp(email: string, password: string, fullName: string, phone: string) {
        // Demo mode - just log in for simplicity
        if (DEMO_MODE) {
            return { error: new Error('Sign up is not available in demo mode. Use existing demo accounts.') }
        }

        const { data, error } = await supabase.auth.signUp({ email, password })

        if (error) return { error: error as Error }

        // Create profile
        if (data.user) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const { error: profileError } = await supabase.from('profiles').insert({
                id: data.user.id,
                email,
                full_name: fullName,
                phone,
                role: 'client',
            } as any)
            if (profileError) return { error: profileError as unknown as Error }
        }

        return { error: null }
    }

    async function signOut() {
        if (DEMO_MODE) {
            setUser(null)
            setProfile(null)
            localStorage.removeItem('demo_user')
            return
        }

        await supabase.auth.signOut()
        setProfile(null)
    }

    const value = {
        session,
        user,
        profile,
        role: profile?.role ?? null,
        isLoading,
        isDemoMode: DEMO_MODE,
        signIn,
        signUp,
        signOut,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
