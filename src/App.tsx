import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AuthProvider, useAuth } from '@/hooks'
import { PublicLayout } from '@/components/layout'
import { DEFAULT_IMAGES, getRandomCleaningImage } from '@/lib/defaultImages'

// Public Pages
import { HomePage } from '@/pages/public/HomePage'
import { BookingPage } from '@/pages/public/BookingPage'
import { BookingConfirmationPage } from '@/pages/public/BookingPage/BookingConfirmationPage'
import { FAQPage } from '@/pages/public/FAQPage'
import { ServicesPage } from '@/pages/public/ServicesPage'
import { ContactPage } from '@/pages/public/ContactPage'
import { AboutPage } from '@/pages/public/AboutPage'
import { CareersPage } from '@/pages/public/CareersPage/CareersPage'
import { PoliciesPage } from '@/pages/public/PoliciesPage'

// Auth Pages
import { LoginPage, SignupPage } from '@/pages/auth'

// Client Dashboard
import { ClientDashboard, ClientProfile, ClientBilling, ClientHistory, ClientPreferences } from '@/pages/client'

// Worker Portal
import {
    WorkerDashboard,
    WorkerOnboarding,
    WorkerJobs,
    WorkerSchedule,
    WorkerTracking,
    WorkerEarnings,
    WorkerTraining,
    WorkerProfile,
} from '@/pages/worker'

// Owner Portal
import {
    OwnerDashboard,
    OwnerBookings,
    OwnerCleaners,
    OwnerTraining,
    OwnerPricing,
    OwnerRevenue,
    OwnerReviews,
    OwnerSupport,
} from '@/pages/owner'

import '@/styles/index.css'

function ProtectedRoute({ children, allowedRoles }: { children: React.ReactNode; allowedRoles?: string[] }) {
    const { user, role, isLoading } = useAuth()

    if (isLoading) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <div className="btn-spinner" style={{ width: 32, height: 32, border: '3px solid var(--color-primary)', borderRightColor: 'transparent' }} />
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/login" replace />
    }

    if (allowedRoles && role && !allowedRoles.includes(role)) {
        if (role === 'worker') return <Navigate to="/worker" replace />
        if (role === 'owner') return <Navigate to="/q-admin" replace />
        return <Navigate to="/dashboard" replace />
    }

    return <>{children}</>
}

function AppRoutes() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
            <Route path="/booking" element={<PublicLayout><BookingPage /></PublicLayout>} />
            <Route path="/booking/confirmation" element={<PublicLayout><BookingConfirmationPage /></PublicLayout>} />

            {/* Placeholder public pages */}
            <Route path="/services" element={<PublicLayout><ServicesPage /></PublicLayout>} />
            <Route path="/services/regular" element={<PublicLayout><PlaceholderPage title="Regular Cleaning" imageType="service" /></PublicLayout>} />
            <Route path="/services/deep" element={<PublicLayout><PlaceholderPage title="Deep Cleaning" imageType="service" /></PublicLayout>} />
            <Route path="/services/pricing" element={<PublicLayout><PlaceholderPage title="Pricing" imageType="service" /></PublicLayout>} />
            <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
            <Route path="/about/story" element={<PublicLayout><PlaceholderPage title="Our Story" imageType="team" /></PublicLayout>} />
            <Route path="/about/areas" element={<PublicLayout><PlaceholderPage title="Service Areas" imageType="general" /></PublicLayout>} />
            <Route path="/about/values" element={<PublicLayout><PlaceholderPage title="Our Values" imageType="team" /></PublicLayout>} />
            <Route path="/careers" element={<PublicLayout><CareersPage /></PublicLayout>} />
            <Route path="/faq" element={<PublicLayout><FAQPage /></PublicLayout>} />
            <Route path="/policies" element={<PublicLayout><PoliciesPage /></PublicLayout>} />
            <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />

            {/* Auth Routes */}
            <Route path="/login" element={<PublicLayout><LoginPage /></PublicLayout>} />
            <Route path="/signup" element={<PublicLayout><SignupPage /></PublicLayout>} />

            {/* Client Dashboard */}
            <Route path="/dashboard-demo" element={<ClientDashboard />} />
            <Route path="/dashboard-demo/profile" element={<ClientProfile />} />
            <Route path="/dashboard-demo/billing" element={<ClientBilling />} />
            <Route path="/dashboard-demo/history" element={<ClientHistory />} />
            <Route path="/dashboard-demo/preferences" element={<ClientPreferences />} />
            <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['client']}><ClientDashboard /></ProtectedRoute>} />
            <Route path="/dashboard/profile" element={<ProtectedRoute allowedRoles={['client']}><ClientProfile /></ProtectedRoute>} />
            <Route path="/dashboard/billing" element={<ProtectedRoute allowedRoles={['client']}><ClientBilling /></ProtectedRoute>} />
            <Route path="/dashboard/history" element={<ProtectedRoute allowedRoles={['client']}><ClientHistory /></ProtectedRoute>} />
            <Route path="/dashboard/preferences" element={<ProtectedRoute allowedRoles={['client']}><ClientPreferences /></ProtectedRoute>} />

            {/* Worker Portal - accessible via /cleaner-login */}
            <Route path="/cleaner-login" element={<Navigate to="/login?role=worker" replace />} />
            {/* Worker Demo Routes (no login required) */}
            <Route path="/worker-demo" element={<WorkerDashboard />} />
            <Route path="/worker-demo/onboarding" element={<WorkerOnboarding />} />
            <Route path="/worker-demo/jobs" element={<WorkerJobs />} />
            <Route path="/worker-demo/schedule" element={<WorkerSchedule />} />
            <Route path="/worker-demo/tracking" element={<WorkerTracking />} />
            <Route path="/worker-demo/earnings" element={<WorkerEarnings />} />
            <Route path="/worker-demo/training" element={<WorkerTraining />} />
            <Route path="/worker-demo/profile" element={<WorkerProfile />} />
            {/* Worker Protected Routes (login required) */}
            <Route path="/worker" element={<ProtectedRoute allowedRoles={['worker']}><WorkerDashboard /></ProtectedRoute>} />
            <Route path="/worker/onboarding" element={<ProtectedRoute allowedRoles={['worker']}><WorkerOnboarding /></ProtectedRoute>} />
            <Route path="/worker/jobs" element={<ProtectedRoute allowedRoles={['worker']}><WorkerJobs /></ProtectedRoute>} />
            <Route path="/worker/schedule" element={<ProtectedRoute allowedRoles={['worker']}><WorkerSchedule /></ProtectedRoute>} />
            <Route path="/worker/tracking" element={<ProtectedRoute allowedRoles={['worker']}><WorkerTracking /></ProtectedRoute>} />
            <Route path="/worker/earnings" element={<ProtectedRoute allowedRoles={['worker']}><WorkerEarnings /></ProtectedRoute>} />
            <Route path="/worker/training" element={<ProtectedRoute allowedRoles={['worker']}><WorkerTraining /></ProtectedRoute>} />
            <Route path="/worker/profile" element={<ProtectedRoute allowedRoles={['worker']}><WorkerProfile /></ProtectedRoute>} />

            {/* Owner Portal - Hidden admin path (not in sitemap) */}
            <Route path="/q-admin" element={<ProtectedRoute allowedRoles={['owner']}><OwnerDashboard /></ProtectedRoute>} />
            <Route path="/q-admin/bookings" element={<ProtectedRoute allowedRoles={['owner']}><OwnerBookings /></ProtectedRoute>} />
            <Route path="/q-admin/cleaners" element={<ProtectedRoute allowedRoles={['owner']}><OwnerCleaners /></ProtectedRoute>} />
            <Route path="/q-admin/training" element={<ProtectedRoute allowedRoles={['owner']}><OwnerTraining /></ProtectedRoute>} />
            <Route path="/q-admin/pricing" element={<ProtectedRoute allowedRoles={['owner']}><OwnerPricing /></ProtectedRoute>} />
            <Route path="/q-admin/revenue" element={<ProtectedRoute allowedRoles={['owner']}><OwnerRevenue /></ProtectedRoute>} />
            <Route path="/q-admin/reviews" element={<ProtectedRoute allowedRoles={['owner']}><OwnerReviews /></ProtectedRoute>} />
            <Route path="/q-admin/support" element={<ProtectedRoute allowedRoles={['owner']}><OwnerSupport /></ProtectedRoute>} />

            {/* Catch all */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

function ScrollToTop() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (hash) {
            // Small timeout to ensure DOM is ready
            setTimeout(() => {
                const id = hash.replace('#', '')
                const element = document.getElementById(id)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            }, 100)
        } else {
            window.scrollTo(0, 0)
        }
    }, [pathname, hash])

    return null
}

function PlaceholderPage({ title, imageType = 'general' }: { title: string; imageType?: 'service' | 'team' | 'general' }) {
    const getImage = () => {
        switch (imageType) {
            case 'service':
                return DEFAULT_IMAGES.services.professional
            case 'team':
                return DEFAULT_IMAGES.team
            case 'general':
            default:
                return getRandomCleaningImage()
        }
    }

    return (
        <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
            <div style={{
                maxWidth: '400px',
                margin: '0 auto 2rem',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
                <img
                    src={getImage()}
                    alt={title}
                    style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }}
                    loading="lazy"
                />
            </div>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{title}</h1>
            <p style={{ color: 'var(--color-text-muted)' }}>This page is coming soon.</p>
        </div>
    )
}

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <AuthProvider>
                <AppRoutes />
            </AuthProvider>
        </BrowserRouter>
    )
}
