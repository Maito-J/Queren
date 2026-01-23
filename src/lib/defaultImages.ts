// Default images for the Queren cleaning service website
// Centralized image mapping to replace placeholder content

// Hero images
import heroImage from '@/assets/images/HOMEPAGE-wife-picks-up-sofa-while-her-husband-is-cleaning-dust-it-with-vacuum-cleaner.jpg'

// General cleaning images
import womanCleaningHome from '@/assets/images/medium-shot-woman-cleaning-home.jpg'
import womanCleaningHome2 from '@/assets/images/medium-shot-woman-cleaning-home (1).jpg'
import womanCleaningCabinet from '@/assets/images/medium-shot-woman-cleaning-cabinet.jpg'
import womanCleaningWindow from '@/assets/images/medium-shot-woman-cleaning-window.jpg'
import womanCleaningIndoors from '@/assets/images/medium-shot-woman-cleaning-indoors.jpg'
import frontViewWomanCleaning from '@/assets/images/front-view-woman-cleaning-home.jpg'
import sideViewWomanCleaning from '@/assets/images/side-view-woman-cleaning-home.jpg'
import womanCleaningHouse from '@/assets/images/woman-cleaning-house.jpg'

// Team / About images
import roommatesCleaningTogether from '@/assets/images/roommates-cleaning-home-together.jpg'

// Service images
import manProfessionalCleaning from '@/assets/images/man-doing-professional-home-cleaning-service.jpg'
import vacuumCleanerLivingRoom from '@/assets/images/closeup-vacuum-cleaner-living-room.jpg'
import messyHomeCouch from '@/assets/images/high-angle-messy-home-concept-with-couch.jpg'

// Kitchen cleaning
import kitchenStoveCleaning from '@/assets/images/blonde-woman-protective-gloves-with-rag-cleaning-electric-stove-home-kitchen-girl-washing-black-shiny-surface-kitchen-top-concept-housework.jpg'
import gasStoveWashing from '@/assets/images/washing-process-gas-cookercloseup-dirty-gas-cooker-covered-with-chemical-washing-liquid-housework-household-chores-concept.jpg'
import stoveCleaningSponge from '@/assets/images/domestic-female-hand-wearing-gloves-cleaning-dirty-stove-after-cooking-using-sponge-washing-woman-housewife-enjoying-daily-household-closeup-top-view.jpg'

// Bathroom cleaning
import bathroomTileCleaning from '@/assets/images/mature-woman-cleans-tile-bathroom.jpg'
import sinkCleaningHands from '@/assets/images/man-s-hands-cleaning-sink-bathroom.jpg'

// Safety / Supplies
import handsTakingGloves from '@/assets/images/close-up-picture-female-hands-taking-gloves.jpg'

// Categorized image exports
export const DEFAULT_IMAGES = {
    hero: heroImage,
    team: roommatesCleaningTogether,

    general: [
        womanCleaningHome,
        womanCleaningHome2,
        womanCleaningCabinet,
        womanCleaningWindow,
        womanCleaningIndoors,
        frontViewWomanCleaning,
        sideViewWomanCleaning,
        womanCleaningHouse,
    ],

    services: {
        regular: vacuumCleanerLivingRoom,
        deep: messyHomeCouch,
        professional: manProfessionalCleaning,
    },

    kitchen: [
        kitchenStoveCleaning,
        gasStoveWashing,
        stoveCleaningSponge,
    ],

    bathroom: [
        bathroomTileCleaning,
        sinkCleaningHands,
    ],

    training: {
        video: manProfessionalCleaning,
        document: handsTakingGloves,
    },

    safety: handsTakingGloves,
}

export type ImageKind =
    | 'hero'
    | 'team'
    | 'general'
    | 'service'
    | 'kitchen'
    | 'bathroom'
    | 'training-video'
    | 'training-doc'
    | 'safety'

/**
 * Get a default image based on the intended context
 */
export function getDefaultImage(kind: ImageKind): string {
    switch (kind) {
        case 'hero':
            return DEFAULT_IMAGES.hero
        case 'team':
            return DEFAULT_IMAGES.team
        case 'general':
            return DEFAULT_IMAGES.general[0]
        case 'service':
            return DEFAULT_IMAGES.services.professional
        case 'kitchen':
            return DEFAULT_IMAGES.kitchen[0]
        case 'bathroom':
            return DEFAULT_IMAGES.bathroom[0]
        case 'training-video':
            return DEFAULT_IMAGES.training.video
        case 'training-doc':
            return DEFAULT_IMAGES.training.document
        case 'safety':
            return DEFAULT_IMAGES.safety
        default:
            return DEFAULT_IMAGES.general[0]
    }
}

/**
 * Get a random image from the general cleaning set
 */
export function getRandomCleaningImage(): string {
    const images = DEFAULT_IMAGES.general
    return images[Math.floor(Math.random() * images.length)]
}
