import { useMemo } from 'react'
import './LandingBackgroundBubbles.css'

export interface LandingBackgroundBubblesProps {
    /** Number of bubbles to render (default: 20, max: 30) */
    density?: number
    /** Minimum animation duration in seconds (default: 12) */
    minSpeed?: number
    /** Maximum animation duration in seconds (default: 22) */
    maxSpeed?: number
    /** Minimum bubble opacity (default: 0.15) */
    minOpacity?: number
    /** Maximum bubble opacity (default: 0.4) */
    maxOpacity?: number
}

interface BubbleStyle {
    width: number
    height: number
    left: string
    opacity: number
    duration: number
    delay: number
    sway: number
}

function randomInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min
}

export function LandingBackgroundBubbles({
    density = 20,
    minSpeed = 12,
    maxSpeed = 22,
    minOpacity = 0.15,
    maxOpacity = 0.4,
}: LandingBackgroundBubblesProps) {
    // Clamp density to reasonable limits
    const bubbleCount = Math.min(Math.max(density, 1), 30)

    // Generate bubble configurations (memoized to prevent re-randomization on re-render)
    const bubbles = useMemo<BubbleStyle[]>(() => {
        return Array.from({ length: bubbleCount }, () => {
            const size = randomInRange(40, 100) // Larger bubbles for visibility
            const duration = randomInRange(minSpeed, maxSpeed)
            return {
                width: size,
                height: size,
                left: `${randomInRange(0, 100)}%`,
                opacity: randomInRange(minOpacity, maxOpacity),
                duration,
                // Negative delay so some bubbles are already mid-animation on load
                delay: randomInRange(-duration, 0),
                sway: randomInRange(15, 40), // Horizontal drift amount
            }
        })
    }, [bubbleCount, minSpeed, maxSpeed, minOpacity, maxOpacity])

    return (
        <div className="bubble-background" aria-hidden="true">
            {bubbles.map((bubble, index) => (
                <div
                    key={index}
                    className="bubble"
                    style={{
                        width: bubble.width,
                        height: bubble.height,
                        left: bubble.left,
                        '--bubble-opacity': bubble.opacity,
                        '--bubble-duration': `${bubble.duration}s`,
                        '--bubble-delay': `${bubble.delay}s`,
                        '--bubble-sway': `${bubble.sway}px`,
                    } as React.CSSProperties}
                >
                    <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ width: '100%', height: '100%' }}
                    >
                        {/* Main Bubble Body */}
                        <circle cx="50" cy="50" r="48" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2" />
                        {/* Cute Highlight/Reflection */}
                        <path d="M30 30 Q 45 25 60 30" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                        <circle cx="35" cy="35" r="4" fill="white" opacity="0.8" />
                    </svg>
                </div>
            ))}
        </div>
    )
}
