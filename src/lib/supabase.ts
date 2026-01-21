import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

// Use placeholder values if not configured - app will still render but Supabase calls won't work
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// Export a flag to check if Supabase is configured
export const isSupabaseConfigured = Boolean(
    import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY
)
