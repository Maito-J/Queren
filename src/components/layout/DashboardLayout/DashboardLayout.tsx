import React from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks'
import { Icon, IconName } from '../../Icon'
import logoIcon from '@/assets/Logo/logo-icon.png'
import logoText from '@/assets/Logo/logo-text.png'
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
    const isDemo = location.pathname.startsWith('/dashboard-demo') || location.pathname.startsWith('/worker-demo')

    const handleSignOut = async () => {
        await signOut()
        navigate('/')
    }

    // Demo profile data
    const displayName = profile?.full_name || (isDemo ? 'Sarah Johnson' : 'User')
    const displayRole = profile?.role || (isDemo ? 'Client' : 'Guest')

    return (
        <div className="dashboard-layout">
            <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <img src={logoIcon} alt="Queren" style={{ height: '40px', width: 'auto' }} />
                        <img src={logoText} alt="Queren Cleaning" style={{ height: '30px', width: 'auto' }} />
                    </Link>
                </div>

                <nav className="sidebar-nav">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className="sidebar-link"
                            end={link.to === '/dashboard' || link.to === '/dashboard-demo' || link.to === '/worker' || link.to === '/worker-demo' || link.to === '/owner'}
                        >
                            <span className="sidebar-icon"><Icon name={link.icon} size="sm" /></span>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <div className="sidebar-user">
                        <div className="user-avatar" style={isDemo ? {
                            backgroundImage: 'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        } : {}}>
                            {!isDemo && (profile?.full_name?.charAt(0) || '?')}
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
