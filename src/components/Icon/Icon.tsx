import React from 'react';
import {
    Home,
    User,
    Users,
    Settings,
    Menu,
    Clipboard,
    Calendar,
    Clock,
    FileText,
    BookOpen,
    Video,
    Check,
    X,
    Plus,
    Minus,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    DollarSign,
    CreditCard,
    Banknote,
    Star,
    Sparkles,
    AlertTriangle,
    Info,
    MessageCircle,
    Phone,
    Headphones,
    MapPin,
    BarChart3,
    TrendingUp,
    RefreshCw,
    Lightbulb,
    Brush,
    FlaskConical,
    Handshake,
    PartyPopper,
    Frown,
    Hand,
    Play,
    Circle,
    type LucideIcon,
} from 'lucide-react';

// Map our semantic icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
    // Navigation
    home: Home,
    user: User,
    users: Users,
    settings: Settings,
    menu: Menu,

    // Content
    clipboard: Clipboard,
    calendar: Calendar,
    clock: Clock,
    document: FileText,
    book: BookOpen,
    video: Video,

    // Actions
    check: Check,
    x: X,
    plus: Plus,
    minus: Minus,
    arrowLeft: ArrowLeft,
    arrowRight: ArrowRight,
    arrowUp: ArrowUp,

    // Finance
    dollar: DollarSign,
    creditCard: CreditCard,
    banknote: Banknote,

    // Status
    star: Star,
    starFilled: Star,
    sparkle: Sparkles,
    warning: AlertTriangle,
    info: Info,

    // Communication
    message: MessageCircle,
    phone: Phone,
    headphones: Headphones,

    // Misc
    mapPin: MapPin,
    chart: BarChart3,
    trendUp: TrendingUp,
    refresh: RefreshCw,
    lightbulb: Lightbulb,
    broom: Brush,
    bottle: FlaskConical,
    handshake: Handshake,
    party: PartyPopper,
    frown: Frown,
    wave: Hand,
    play: Play,
    dot: Circle,
};

export type IconName = keyof typeof iconMap;

const sizes = {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
} as const;

export interface IconProps {
    name: IconName;
    size?: keyof typeof sizes;
    className?: string;
    'aria-label'?: string;
    title?: string;
    filled?: boolean;
}

export const Icon: React.FC<IconProps> = ({
    name,
    size = 'md',
    className = '',
    'aria-label': ariaLabel,
    title,
    filled = false,
}) => {
    const IconComponent = iconMap[name];

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }

    const sizeValue = sizes[size];
    const isDecorative = !ariaLabel && !title;

    return (
        <IconComponent
            size={sizeValue}
            className={`icon icon-${name} ${className}`.trim()}
            aria-hidden={isDecorative}
            aria-label={ariaLabel}
            role={isDecorative ? undefined : 'img'}
            fill={filled && name === 'starFilled' ? 'currentColor' : 'none'}
            strokeWidth={1.5}
        >
            {title && <title>{title}</title>}
        </IconComponent>
    );
};

export default Icon;
