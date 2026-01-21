export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type UserRole = 'client' | 'worker' | 'owner'
export type ServiceType = 'regular' | 'deep'
export type BookingStatus = 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled'
export type VerificationStatus = 'pending' | 'approved' | 'rejected'
export type PayoutStatus = 'pending' | 'processing' | 'completed'

export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string
                    role: UserRole
                    email: string
                    full_name: string | null
                    phone: string | null
                    avatar_url: string | null
                    created_at: string
                }
                Insert: {
                    id: string
                    role: UserRole
                    email: string
                    full_name?: string | null
                    phone?: string | null
                    avatar_url?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    role?: UserRole
                    email?: string
                    full_name?: string | null
                    phone?: string | null
                    avatar_url?: string | null
                    created_at?: string
                }
            }
            addresses: {
                Row: {
                    id: string
                    profile_id: string
                    street: string
                    city: string
                    province: string
                    postal_code: string
                    is_primary: boolean
                    created_at: string
                }
                Insert: {
                    id?: string
                    profile_id: string
                    street: string
                    city: string
                    province: string
                    postal_code: string
                    is_primary?: boolean
                    created_at?: string
                }
                Update: {
                    id?: string
                    profile_id?: string
                    street?: string
                    city?: string
                    province?: string
                    postal_code?: string
                    is_primary?: boolean
                    created_at?: string
                }
            }
            bookings: {
                Row: {
                    id: string
                    client_id: string
                    assigned_worker_id: string | null
                    service_type: ServiceType
                    sqft: number
                    bedrooms: number
                    bathrooms: number
                    addons: Json
                    scheduled_at: string
                    status: BookingStatus
                    price_breakdown: Json
                    total: number
                    notes: string | null
                    address_id: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    client_id: string
                    assigned_worker_id?: string | null
                    service_type: ServiceType
                    sqft: number
                    bedrooms: number
                    bathrooms: number
                    addons?: Json
                    scheduled_at: string
                    status?: BookingStatus
                    price_breakdown?: Json
                    total: number
                    notes?: string | null
                    address_id?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    client_id?: string
                    assigned_worker_id?: string | null
                    service_type?: ServiceType
                    sqft?: number
                    bedrooms?: number
                    bathrooms?: number
                    addons?: Json
                    scheduled_at?: string
                    status?: BookingStatus
                    price_breakdown?: Json
                    total?: number
                    notes?: string | null
                    address_id?: string | null
                    created_at?: string
                }
            }
            reviews: {
                Row: {
                    id: string
                    booking_id: string
                    client_id: string
                    rating: number
                    comment: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    booking_id: string
                    client_id: string
                    rating: number
                    comment?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    booking_id?: string
                    client_id?: string
                    rating?: number
                    comment?: string | null
                    created_at?: string
                }
            }
            worker_verification: {
                Row: {
                    id: string
                    worker_id: string
                    status: VerificationStatus
                    doc_urls: string[] | null
                    notes: string | null
                    submitted_at: string
                    reviewed_at: string | null
                }
                Insert: {
                    id?: string
                    worker_id: string
                    status?: VerificationStatus
                    doc_urls?: string[] | null
                    notes?: string | null
                    submitted_at?: string
                    reviewed_at?: string | null
                }
                Update: {
                    id?: string
                    worker_id?: string
                    status?: VerificationStatus
                    doc_urls?: string[] | null
                    notes?: string | null
                    submitted_at?: string
                    reviewed_at?: string | null
                }
            }
            job_events: {
                Row: {
                    id: string
                    booking_id: string
                    worker_id: string
                    check_in: string | null
                    check_out: string | null
                    photo_urls: string[] | null
                    completion_notes: string | null
                }
                Insert: {
                    id?: string
                    booking_id: string
                    worker_id: string
                    check_in?: string | null
                    check_out?: string | null
                    photo_urls?: string[] | null
                    completion_notes?: string | null
                }
                Update: {
                    id?: string
                    booking_id?: string
                    worker_id?: string
                    check_in?: string | null
                    check_out?: string | null
                    photo_urls?: string[] | null
                    completion_notes?: string | null
                }
            }
            payouts: {
                Row: {
                    id: string
                    worker_id: string
                    amount: number
                    status: PayoutStatus
                    created_at: string
                }
                Insert: {
                    id?: string
                    worker_id: string
                    amount: number
                    status?: PayoutStatus
                    created_at?: string
                }
                Update: {
                    id?: string
                    worker_id?: string
                    amount?: number
                    status?: PayoutStatus
                    created_at?: string
                }
            }
            pricing_config: {
                Row: {
                    id: string
                    key: string
                    value: Json
                    updated_at: string
                }
                Insert: {
                    id?: string
                    key: string
                    value: Json
                    updated_at?: string
                }
                Update: {
                    id?: string
                    key?: string
                    value?: Json
                    updated_at?: string
                }
            }
            training_modules: {
                Row: {
                    id: string
                    title: string
                    content: string
                    visible_to_roles: string[]
                    sort_order: number
                }
                Insert: {
                    id?: string
                    title: string
                    content: string
                    visible_to_roles?: string[]
                    sort_order?: number
                }
                Update: {
                    id?: string
                    title?: string
                    content?: string
                    visible_to_roles?: string[]
                    sort_order?: number
                }
            }
        }
    }
}

// Helper types
export type Profile = Database['public']['Tables']['profiles']['Row']
export type Address = Database['public']['Tables']['addresses']['Row']
export type Booking = Database['public']['Tables']['bookings']['Row']
export type Review = Database['public']['Tables']['reviews']['Row']
export type WorkerVerification = Database['public']['Tables']['worker_verification']['Row']
export type JobEvent = Database['public']['Tables']['job_events']['Row']
export type Payout = Database['public']['Tables']['payouts']['Row']
export type PricingConfig = Database['public']['Tables']['pricing_config']['Row']
export type TrainingModule = Database['public']['Tables']['training_modules']['Row']
