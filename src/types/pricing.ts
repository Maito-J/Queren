import { ServiceType } from './database'

export interface Addon {
    id: string
    label: string
    price: number
}

export interface PriceBreakdown {
    base: number
    sqftCharge: number
    bedroomCharge: number
    bathroomCharge: number
    addons: { name: string; price: number }[]
    subtotal: number
    tax: number
    total: number
    estimatedHours: number
}

export interface BookingFormData {
    serviceType: ServiceType
    sqft: number
    bedrooms: number
    bathrooms: number
    addons: string[]
    date: string
    time: 'morning' | 'afternoon' | 'evening'
    fullName: string
    email: string
    phone: string
    street: string
    city: string
    postalCode: string
    notes: string
}

export interface PricingRates {
    baseRegular: number
    baseDeep: number
    sqftRate: number
    bedroomRate: number
    bathroomRate: number
    taxRate: number
    addons: Record<string, Addon>
}

// Default pricing (used when Supabase not configured)
export const DEFAULT_PRICING: PricingRates = {
    baseRegular: 89,
    baseDeep: 149,
    sqftRate: 0.03,
    bedroomRate: 15,
    bathroomRate: 20,
    taxRate: 0.13,
    addons: {
        fridge: { id: 'fridge', label: 'Inside Fridge', price: 25 },
        oven: { id: 'oven', label: 'Inside Oven', price: 30 },
        dishes: { id: 'dishes', label: 'Dishes', price: 15 },
        cabinets: { id: 'cabinets', label: 'Inside Cabinets', price: 40 },
        laundry: { id: 'laundry', label: 'Laundry', price: 20 },
    },
}
