import type { ServiceType, PriceBreakdown, PricingRates } from '@/types'
import { DEFAULT_PRICING } from '@/types'

/**
 * Pure function to compute a cleaning quote based on form data and pricing config.
 * Independent of DOM for easy testing.
 */
export function computeQuote(
    data: {
        serviceType: ServiceType
        sqft: number
        bedrooms: number
        bathrooms: number
        addons: string[]
    },
    pricing: PricingRates = DEFAULT_PRICING
): PriceBreakdown {
    // Base price based on service type
    const base = data.serviceType === 'regular'
        ? pricing.baseRegular
        : pricing.baseDeep

    // Square footage charge (for sqft over 1000)
    const extraSqft = Math.max(0, data.sqft - 1000)
    const sqftCharge = Math.round(extraSqft * pricing.sqftRate)

    // Room charges
    const bedroomCharge = (data.bedrooms - 1) * pricing.bedroomRate // First bedroom included
    const bathroomCharge = (data.bathrooms - 1) * pricing.bathroomRate // First bathroom included

    // Addons
    const addonItems = data.addons
        .map(id => {
            const addon = pricing.addons[id]
            return addon ? { name: addon.label, price: addon.price } : null
        })
        .filter((item): item is { name: string; price: number } => item !== null)

    const addonsTotal = addonItems.reduce((sum, item) => sum + item.price, 0)

    // Calculate subtotal
    const subtotal = base + sqftCharge + bedroomCharge + bathroomCharge + addonsTotal

    // Tax
    const tax = Math.round(subtotal * pricing.taxRate * 100) / 100

    // Total
    const total = Math.round((subtotal + tax) * 100) / 100

    // Estimate hours (rough calculation)
    const baseHours = data.serviceType === 'regular' ? 2 : 3
    const roomHours = (data.bedrooms * 0.25) + (data.bathrooms * 0.5)
    const sqftHours = data.sqft > 1500 ? (data.sqft - 1500) / 1000 : 0
    const estimatedHours = Math.round((baseHours + roomHours + sqftHours) * 2) / 2 // Round to nearest 0.5

    return {
        base,
        sqftCharge,
        bedroomCharge,
        bathroomCharge,
        addons: addonItems,
        subtotal,
        tax,
        total,
        estimatedHours,
    }
}

/**
 * Format money for display
 */
export function formatMoney(amount: number, currency = 'CAD'): string {
    return new Intl.NumberFormat('en-CA', {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
    }).format(amount)
}
