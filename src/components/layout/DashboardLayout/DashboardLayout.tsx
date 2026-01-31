import React from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks'
import { Icon, IconName } from '../../Icon'
import logo3 from '@/assets/Logo/logo3.png'
import querenOwner from '@/assets/images/Team/queren_owner.png'
import './DashboardLayout.css'

interface SidebarLink {
    to: string
    label: string
    icon: IconName
}

interface DashboardLayoutProps {
    children: React.ReactNode
    title: string
    links: SidebarLink[]
}

export function DashboardLayout({ children, title, links }: DashboardLayoutProps) {
    const { profile, signOut } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [sidebarOpen, setSidebarOpen] = React.useState(false)
    const isClientDemo = location.pathname.startsWith('/dashboard-demo')
    const isWorkerDemo = location.pathname.startsWith('/worker-demo')
    const isOwner = location.pathname.startsWith('/q-admin')
    const isDemo = isClientDemo || isWorkerDemo

    const handleSignOut = async () => {
        await signOut()
        navigate('/')
    }

    // Demo profile data - different for client vs worker
    const getDemoData = () => {
        if (isWorkerDemo) {
            return {
                name: 'Maria Garcia',
                role: 'Staff',
                avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face'
            }
        }
        if (isClientDemo) {
            return {
                name: 'Sarah Johnson',
                role: 'Client',
                avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
            }
        }
        return null
    }

    const demoData = getDemoData()
    const displayName = profile?.full_name || (demoData?.name ?? 'User')
    const displayRole = profile?.role || (demoData?.role ?? 'Guest')
    const avatarUrl = isOwner ? querenOwner : demoData?.avatarUrl

    const [sidebarWidth, setSidebarWidth] = React.useState(260)
    const [isResizing, setIsResizing] = React.useState(false)
    const sidebarRef = React.useRef<HTMLDivElement>(null)

    const startResizing = React.useCallback(() => {
        setIsResizing(true)
    }, [])

    const stopResizing = React.useCallback(() => {
        setIsResizing(false)
    }, [])

    const resize = React.useCallback(
        (mouseMoveEvent: MouseEvent) => {
            if (isResizing) {
                const newWidth = mouseMoveEvent.clientX
                if (newWidth >= 200 && newWidth <= 480) {
                    setSidebarWidth(newWidth)
                }
            }
        },
        [isResizing]
    )

    React.useEffect(() => {
        window.addEventListener('mousemove', resize)
        window.addEventListener('mouseup', stopResizing)
        return () => {
            window.removeEventListener('mousemove', resize)
            window.removeEventListener('mouseup', stopResizing)
        }
    }, [resize, stopResizing])

    return (
        <div
            className={`dashboard-layout ${isResizing ? 'resizing' : ''}`}
            style={{ '--sidebar-width': `${sidebarWidth}px` } as React.CSSProperties}
        >
            <aside
                ref={sidebarRef}
                className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}
            >
                <div className="sidebar-header">
                    <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 0' }}>
                        <img src={logo3} alt="Queren" style={{ height: '40px', width: 'auto' }} />
                    </Link>
                </div>

                <nav className="sidebar-nav">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className="sidebar-link"
                            end={link.to === '/dashboard' || link.to === '/dashboard-demo' || link.to === '/worker' || link.to === '/worker-demo' || link.to === '/owner' || link.to === '/q-admin'}
                        >
                            <span className="sidebar-icon"><Icon name={link.icon} size="sm" /></span>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <div className="sidebar-user">
                        <div className="user-avatar" style={(isDemo || isOwner) && avatarUrl ? {
                            backgroundImage: `url(${avatarUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        } : {}}>
                            {!(isDemo || isOwner) && (profile?.full_name?.charAt(0) || '?')}
                        </div>
                        <div className="user-info">
                            <span className="user-name">{displayName}</span>
                            <span className="user-role">{displayRole}</span>
                        </div>
                    </div>
                    <button className="btn btn-ghost btn-sm" onClick={handleSignOut}>
                        Sign Out
                    </button>
                </div>

                {/* Resizer Handle - Visible on Desktop only */}
                <div
                    className={`sidebar-resizer hide-mobile ${isResizing ? 'resizing' : ''}`}
                    onMouseDown={startResizing}
                />
            </aside>

            <div className="dashboard-main">
                <header className="dashboard-header">
                    <button
                        className="sidebar-toggle hide-desktop"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-label="Toggle sidebar"
                    >
                        <Icon name="menu" size="md" />
                    </button>
                    <h1 className="dashboard-title">{title}</h1>
                </header>

                <div className="dashboard-content">
                    {children}
                </div>
            </div>

            {sidebarOpen && (
                <div
                    className="sidebar-overlay hide-desktop"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    )
}
