import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks'
import './DashboardLayout.css'

interface SidebarLink {
    to: string
    label: string
    icon: string
}

interface DashboardLayoutProps {
    children: React.ReactNode
    title: string
    links: SidebarLink[]
}

export function DashboardLayout({ children, title, links }: DashboardLayoutProps) {
    const { profile, signOut } = useAuth()
    const navigate = useNavigate()
    const [sidebarOpen, setSidebarOpen] = React.useState(false)

    const handleSignOut = async () => {
        await signOut()
        navigate('/')
    }

    return (
        <div className="dashboard-layout">
            <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <Link to="/" className="logo">
                        <span className="logo-icon">✨</span>
                        <span className="logo-text">Queren</span>
                    </Link>
                </div>

                <nav className="sidebar-nav">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className="sidebar-link"
                            end={link.to === '/dashboard' || link.to === '/worker' || link.to === '/owner'}
                        >
                            <span className="sidebar-icon">{link.icon}</span>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <div className="sidebar-user">
                        <div className="user-avatar">
                            {profile?.full_name?.charAt(0) || '?'}
                        </div>
                        <div className="user-info">
                            <span className="user-name">{profile?.full_name || 'User'}</span>
                            <span className="user-role">{profile?.role || 'Guest'}</span>
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
                        ☰
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
