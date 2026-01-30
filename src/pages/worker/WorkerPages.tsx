import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { DashboardLayout } from '@/components/layout'
import { Card, CardBody, Button, Input, Alert, Badge } from '@/components/ui'
import { Icon, IconName } from '@/components/Icon'
import { DEFAULT_IMAGES } from '@/lib/defaultImages'
import './WorkerPages.css'

// Function to get worker links with correct base path
const getWorkerLinks = (basePath: string): { to: string; label: string; icon: IconName }[] => [
    { to: basePath, label: 'Dashboard', icon: 'home' },
    { to: `${basePath}/profile`, label: 'Profile', icon: 'user' },
    { to: `${basePath}/schedule`, label: 'My Schedule', icon: 'calendar' },
    { to: `${basePath}/tracking`, label: 'Time Tracking', icon: 'clock' },
    { to: `${basePath}/earnings`, label: 'Earnings', icon: 'dollar' },
    { to: `${basePath}/training`, label: 'Training Hub', icon: 'book' },
    { to: `${basePath}/onboarding`, label: 'Onboarding', icon: 'clipboard' },
]

// Keep backward compatibility
const workerLinks = getWorkerLinks('/worker')

export { workerLinks, getWorkerLinks }

// ============================================
// WORKER DASHBOARD
// ============================================
export function WorkerDashboard() {
    const location = useLocation()
    const isDemo = location.pathname.startsWith('/worker-demo')
    const links = getWorkerLinks(isDemo ? '/worker-demo' : '/worker')

    return (
        <DashboardLayout title="Worker Dashboard" links={links}>
            <Card className="mb-6 welcome-banner">
                <CardBody>
                    <h2>Welcome back! <Icon name="wave" size="md" /></h2>
                    <p>You have 2 jobs scheduled today.</p>
                </CardBody>
            </Card>

            <div className="stats-grid">
                <Card>
                    <CardBody className="stat-card">
                        <div className="stat-value">$847</div>
                        <div className="stat-label">This Week</div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="stat-card">
                        <div className="stat-value">23</div>
                        <div className="stat-label">Jobs Completed</div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="stat-card">
                        <div className="stat-value">4.9<Icon name="starFilled" size="sm" filled /></div>
                        <div className="stat-label">Your Rating</div>
                    </CardBody>
                </Card>
            </div>

            <div className="dashboard-grid">
                <Card>
                    <CardBody>
                        <h3 className="card-title">Today's Schedule</h3>
                        <div className="schedule-list">
                            <div className="schedule-item">
                                <div className="schedule-time">9:00 AM</div>
                                <div className="schedule-details">
                                    <div className="schedule-type">Regular Cleaning</div>
                                    <div className="schedule-location">R-8894</div>
                                </div>
                                <Badge variant="primary">Upcoming</Badge>
                            </div>
                            <div className="schedule-item">
                                <div className="schedule-time">2:00 PM</div>
                                <div className="schedule-details">
                                    <div className="schedule-type">Deep Cleaning</div>
                                    <div className="schedule-location">D-9921</div>
                                </div>
                                <Badge variant="warning">Pending</Badge>
                            </div>
                        </div>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <h3 className="card-title">Pending Actions</h3>
                        <div className="action-list">
                            <div className="action-item">
                                <span>Complete verification</span>
                                <Button variant="secondary" size="sm">Start</Button>
                            </div>
                            <div className="action-item">
                                <span>2 new job requests</span>
                                <Button variant="secondary" size="sm">View</Button>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </DashboardLayout>
    )
}

// ============================================
// WORKER ONBOARDING
// ============================================
export function WorkerOnboarding() {
    const location = useLocation()
    const isDemo = location.pathname.startsWith('/worker-demo')
    const links = getWorkerLinks(isDemo ? '/worker-demo' : '/worker')

    const steps = [
        { num: 1, title: 'Personal Info', status: 'complete' },
        { num: 2, title: 'Documents', status: 'current' },
        { num: 3, title: 'Background Check', status: 'pending' },
        { num: 4, title: 'Training', status: 'pending' },
    ]

    return (
        <DashboardLayout title="Onboarding & Verification" links={links}>
            <Card className="mb-6">
                <CardBody>
                    <div className="progress-tracker">
                        {steps.map((step, i) => (
                            <div key={step.num} className={`progress-step ${step.status}`}>
                                <div className="step-circle">{step.status === 'complete' ? <Icon name="check" size="sm" /> : step.num}</div>
                                <span className="step-title">{step.title}</span>
                                {i < steps.length - 1 && <div className="step-line" />}
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <h3 className="card-title">Step 2: Upload Documents</h3>
                    <p className="card-subtitle">Please upload the following documents to verify your identity.</p>

                    <div className="upload-grid">
                        <div className="upload-box">
                            <div className="upload-icon"><Icon name="document" size="lg" /></div>
                            <h4>Government ID (Front)</h4>
                            <p>Driver's license or passport</p>
                            <Button variant="secondary">Upload</Button>
                        </div>
                        <div className="upload-box">
                            <div className="upload-icon"><Icon name="document" size="lg" /></div>
                            <h4>Government ID (Back)</h4>
                            <p>Back of your ID</p>
                            <Button variant="secondary">Upload</Button>
                        </div>
                        <div className="upload-box completed">
                            <div className="upload-icon"><Icon name="check" size="lg" /></div>
                            <h4>Proof of Address</h4>
                            <p>Utility bill or bank statement</p>
                            <Badge variant="primary">Uploaded</Badge>
                        </div>
                    </div>

                    <Alert variant="info" title="Why do we need this?">
                        These documents help us verify your identity and ensure safety for our clients.
                        All documents are encrypted and stored securely.
                    </Alert>

                    <div className="form-actions">
                        <Button variant="ghost">Back</Button>
                        <Button>Continue to Background Check</Button>
                    </div>
                </CardBody>
            </Card>
        </DashboardLayout>
    )
}

// ============================================
// AVAILABLE JOBS
// ============================================
export function WorkerJobs() {
    const location = useLocation()
    const isDemo = location.pathname.startsWith('/worker-demo')
    const links = getWorkerLinks(isDemo ? '/worker-demo' : '/worker')

    const jobs = [
        { id: 1, type: 'Regular Cleaning', location: 'New Westminster', date: 'Tomorrow, 9 AM', distance: '3.2 km', status: 'new' },
        { id: 2, type: 'Deep Cleaning', location: 'New Westminster', date: 'Jan 15, 2 PM', distance: '5.8 km', status: 'new' },
        { id: 3, type: 'Regular Cleaning', location: 'New Westminster', date: 'Jan 16, 10 AM', distance: '8.1 km', status: 'viewed' },
    ]

    return (
        <DashboardLayout title="Open Shifts" links={links}>
            <div className="filter-bar">
                <Input placeholder="Search by location..." />
                <select className="form-select" style={{ maxWidth: 200 }}>
                    <option>All Types</option>
                    <option>Regular Cleaning</option>
                    <option>Deep Cleaning</option>
                </select>
                <select className="form-select" style={{ maxWidth: 200 }}>
                    <option>Any Distance</option>
                    <option>Within 5 km</option>
                    <option>Within 10 km</option>
                    <option>Within 25 km</option>
                </select>
            </div>

            <div className="jobs-list">
                {jobs.map(job => (
                    <Card key={job.id} className="job-card">
                        <CardBody>
                            <div className="job-header">
                                <div>
                                    <h3 className="job-type">{job.type}</h3>
                                    <p className="job-location"><Icon name="mapPin" size="sm" /> {job.location} • {job.distance} away</p>
                                </div>
                                {job.status === 'new' && <Badge variant="primary">New</Badge>}
                            </div>
                            <div className="job-details">
                                <div className="job-detail">
                                    <span className="detail-label">Date & Time</span>
                                    <span className="detail-value">{job.date}</span>
                                </div>
                            </div>
                            <div className="job-actions">
                                <Button variant="ghost">View Details</Button>
                                <Button variant="secondary">Decline</Button>
                                <Button>Accept Job</Button>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </DashboardLayout>
    )
}

// ============================================
// MY SCHEDULE
// ============================================
export function WorkerSchedule() {
    const location = useLocation()
    const isDemo = location.pathname.startsWith('/worker-demo')
    const links = getWorkerLinks(isDemo ? '/worker-demo' : '/worker')

    const [showJobModal, setShowJobModal] = useState(false)
    const [selectedJob, setSelectedJob] = useState<any>(null)

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const dates = [13, 14, 15, 16, 17, 18, 19]

    const events = [
        { day: 0, time: '9:00', duration: 2, title: 'Regular Cleaning', reservationNumber: 'R-8894', specialRequests: 'Please use eco-friendly products', status: 'confirmed' },
        { day: 0, time: '14:00', duration: 2, title: 'Deep Cleaning', reservationNumber: 'D-9921', specialRequests: 'Focus on kitchen grease', status: 'confirmed' },
        { day: 2, time: '10:00', duration: 2, title: 'Regular Cleaning', reservationNumber: 'R-8855', specialRequests: 'None', status: 'confirmed' },
        { day: 4, time: '11:00', duration: 2, title: 'Regular Cleaning', reservationNumber: 'R-9102', specialRequests: 'Key under the mat', status: 'confirmed' },
    ]

    const availableJobs = [
        { id: 1, type: 'Regular Cleaning', reservationNumber: 'R-1024', date: 'Tomorrow, 9 AM', distance: '3.2 km', status: 'new', day: 1, time: '9:00', duration: 2, specialRequests: 'Dog is friendly' },
        { id: 2, type: 'Deep Cleaning', reservationNumber: 'D-1089', date: 'Jan 15, 2 PM', distance: '5.8 km', status: 'new', day: 2, time: '14:00', duration: 2, specialRequests: 'Allergic to bleach' },
        { id: 3, type: 'Regular Cleaning', reservationNumber: 'R-1056', date: 'Jan 16, 10 AM', distance: '8.1 km', status: 'viewed', day: 3, time: '10:00', duration: 2, specialRequests: 'None' },
    ]

    const handleJobClick = (job: any) => {
        setSelectedJob(job)
        setShowJobModal(true)
    }

    return (
        <DashboardLayout title="My Schedule" links={links}>
            <Card>
                <CardBody>
                    <div className="schedule-header">
                        <Button variant="ghost"><Icon name="arrowLeft" size="sm" /> Previous</Button>
                        <h3>January 13 - 19, 2026</h3>
                        <Button variant="ghost">Next <Icon name="arrowRight" size="sm" /></Button>
                    </div>

                    <div className="calendar-week">
                        <div className="calendar-header">
                            {days.map((day, i) => (
                                <div key={day} className={`calendar-day-header ${i === 0 ? 'today' : ''}`}>
                                    <span className="day-name">{day}</span>
                                    <span className="day-date">{dates[i]}</span>
                                </div>
                            ))}
                        </div>
                        <div className="calendar-body">
                            {days.map((_, dayIndex) => (
                                <div key={dayIndex} className="calendar-column">
                                    {events
                                        .filter(e => e.day === dayIndex)
                                        .map((event, i) => (
                                            <div
                                                key={`evt-${i}`}
                                                className="calendar-event"
                                                style={{
                                                    top: `${(parseInt(event.time) - 8) * 40}px`,
                                                    height: `${event.duration * 40}px`,
                                                    cursor: 'pointer'
                                                }}
                                                onClick={() => handleJobClick(event)}
                                            >
                                                <span className="event-time">{event.time}</span>
                                                <span className="event-title">{event.title}</span>
                                                <span className="event-location">{event.reservationNumber}</span>
                                            </div>
                                        ))}
                                    {availableJobs
                                        .filter(j => j.day === dayIndex)
                                        .map((job, i) => (
                                            <div
                                                key={`job-${i}`}
                                                className="calendar-event available-job"
                                                style={{
                                                    top: `${(parseInt(job.time) - 8) * 40}px`,
                                                    height: `${job.duration * 40}px`,
                                                    border: '2px dashed var(--color-primary)',
                                                    background: 'transparent',
                                                    cursor: 'pointer'
                                                }}
                                                onClick={() => handleJobClick(job)}
                                            >
                                                <span className="event-time" style={{ color: 'var(--color-primary)' }}>{job.time}</span>
                                                <span className="event-title" style={{ color: 'var(--color-primary)' }}>{job.type}</span>
                                                <span className="event-location" style={{ color: 'var(--color-primary)' }}>{job.reservationNumber}</span>
                                            </div>
                                        ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </CardBody>
            </Card>

            <Card className="mt-6">
                <CardBody>
                    <h3 className="card-title">Upcoming This Week</h3>
                    <div className="agenda-list">
                        {events.map((event, i) => (
                            <div key={i} className="agenda-item">
                                <div className="agenda-date">{days[event.day]} {dates[event.day]}</div>
                                <div className="agenda-details">
                                    <strong>{event.title}</strong>
                                    <span>{event.time} • {event.reservationNumber}</span>
                                </div>
                                <Button variant="secondary" size="sm">Details</Button>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>

            <Card className="mt-6">
                <CardBody>
                    <h3 className="card-title">Open Shifts</h3>
                    <div className="filter-bar mb-4">
                        <Input placeholder="Search by location..." />
                        <select className="form-select" style={{ maxWidth: 200 }}>
                            <option>All Types</option>
                            <option>Regular Cleaning</option>
                            <option>Deep Cleaning</option>
                        </select>
                        <select className="form-select" style={{ maxWidth: 200 }}>
                            <option>Any Distance</option>
                            <option>Within 5 km</option>
                            <option>Within 10 km</option>
                            <option>Within 25 km</option>
                        </select>
                    </div>

                    <div className="jobs-list">
                        {availableJobs.map(job => (
                            <Card key={job.id} className="job-card">
                                <CardBody>
                                    <div className="job-header">
                                        <div>
                                            <h3 className="job-type">{job.type}</h3>
                                            <p className="job-location"><Icon name="clock" size="sm" /> Reservation: {job.reservationNumber} • {job.distance} away</p>
                                        </div>
                                        {job.status === 'new' && <Badge variant="primary">New</Badge>}
                                    </div>
                                    <div className="job-details">
                                        <div className="job-detail">
                                            <span className="detail-label">Date & Time</span>
                                            <span className="detail-value">{job.date}</span>
                                        </div>
                                    </div>
                                    <div className="job-actions">
                                        <Button variant="ghost" onClick={() => handleJobClick(job)}>View Details</Button>
                                        <Button variant="secondary">Decline</Button>
                                        <Button>Accept Job</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </CardBody>
            </Card>

            {showJobModal && selectedJob && (
                <div className="modal-overlay" onClick={() => setShowJobModal(false)}>
                    <div className="modal-card" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                        <Card>
                            <CardBody>
                                <div className="modal-header">
                                    <Button variant="ghost" size="sm" onClick={() => setShowJobModal(false)}>Close</Button>
                                    <h3>Job Details</h3>
                                    <div style={{ width: 20 }}></div>
                                </div>

                                <div className="job-details-modal">
                                    <div className="detail-row" style={{ marginBottom: '1rem' }}>
                                        <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Reservation Number</div>
                                        <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>{selectedJob.reservationNumber || selectedJob.id}</div>
                                    </div>

                                    <div className="detail-row" style={{ marginBottom: '1rem' }}>
                                        <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Cleaning Type</div>
                                        <div style={{ fontSize: '1rem' }}>{selectedJob.title || selectedJob.type}</div>
                                    </div>

                                    <div className="detail-row" style={{ marginBottom: '1rem' }}>
                                        <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Time</div>
                                        <div style={{ fontSize: '1rem' }}>{selectedJob.time} ({selectedJob.duration} hours)</div>
                                    </div>

                                    <div className="detail-row" style={{ marginBottom: '1rem' }}>
                                        <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Special Requests</div>
                                        <div style={{ fontSize: '1rem', padding: '0.5rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-sm)' }}>
                                            {selectedJob.specialRequests || 'No special requests'}
                                        </div>
                                    </div>

                                    <div className="modal-actions" style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                                        {selectedJob.status === 'confirmed' ? (
                                            <>
                                                <Button variant="secondary" onClick={() => setShowJobModal(false)}>Close</Button>
                                                <Button variant="secondary" style={{ color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }} onClick={() => setShowJobModal(false)}>Drop Off</Button>
                                            </>
                                        ) : (
                                            <>
                                                <Button variant="secondary" onClick={() => setShowJobModal(false)}>Decline</Button>
                                                <Button onClick={() => setShowJobModal(false)}>Confirm</Button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            )}
        </DashboardLayout>
    )
}

// ============================================
// TIME TRACKING
// ============================================
export function WorkerTracking() {
    const location = useLocation()
    const isDemo = location.pathname.startsWith('/worker-demo')
    const links = getWorkerLinks(isDemo ? '/worker-demo' : '/worker')
    const [checkedIn, setCheckedIn] = useState(false)

    return (
        <DashboardLayout title="Time Tracking" links={links}>
            {checkedIn ? (
                <Card className="active-job-card">
                    <CardBody>
                        <div className="active-job-header">
                            <Badge variant="primary">Currently Working</Badge>
                            <span className="timer">01:23:45</span>
                        </div>
                        <h2>Regular Cleaning</h2>
                        <p className="job-address">123 Main St, New Westminster</p>
                        <p className="job-client">Client: Sarah M.</p>

                        <div className="tracking-actions">
                            <Button variant="secondary" onClick={() => setCheckedIn(false)}>
                                Check Out
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            ) : (
                <Card>
                    <CardBody>
                        <div className="empty-state">
                            <div className="empty-icon"><Icon name="clock" size="xl" /></div>
                            <h3>No Active Job</h3>
                            <p>When it's time for your next job, check in here to start tracking.</p>
                        </div>
                    </CardBody>
                </Card>
            )}

            <h3 className="section-title mt-8">Today's Jobs</h3>
            <div className="tracking-jobs">
                <Card>
                    <CardBody>
                        <div className="tracking-job">
                            <div className="tracking-job-info">
                                <h4>Regular Cleaning</h4>
                                <p>New Westminster • 9:00 AM</p>
                            </div>
                            {!checkedIn && (
                                <Button onClick={() => setCheckedIn(true)}>Check In</Button>
                            )}
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <div className="tracking-job">
                            <div className="tracking-job-info">
                                <h4>Deep Cleaning</h4>
                                <p>New Westminster • 2:00 PM</p>
                            </div>
                            <Badge>Later</Badge>
                        </div>
                    </CardBody>
                </Card>
            </div>

            <h3 className="section-title mt-8">Completed Today</h3>
            <Card>
                <CardBody>
                    <div className="empty-state small">
                        <p>No completed jobs yet today</p>
                    </div>
                </CardBody>
            </Card>
        </DashboardLayout>
    )
}

// ============================================
// EARNINGS
// ============================================
export function WorkerEarnings() {
    const location = useLocation()
    const isDemo = location.pathname.startsWith('/worker-demo')
    const links = getWorkerLinks(isDemo ? '/worker-demo' : '/worker')

    const earnings = [
        { date: 'Jan 12', job: 'Regular Cleaning', customerNumber: 'R-1024', hours: 2, amount: 89, status: 'paid' },
        { date: 'Jan 11', job: 'Deep Cleaning', customerNumber: 'D-1089', hours: 3.5, amount: 149, status: 'paid' },
        { date: 'Jan 10', job: 'Regular Cleaning', customerNumber: 'R-1056', hours: 2, amount: 95, status: 'paid' },
        { date: 'Jan 9', job: 'Regular Cleaning', customerNumber: 'R-1012', hours: 2.5, amount: 99, status: 'paid' },
    ]

    return (
        <DashboardLayout title="Earnings & Payments" links={links}>
            <div className="stats-grid">
                <Card>
                    <CardBody className="stat-card">
                        <div className="stat-value">42</div>
                        <div className="stat-label">Work Hours</div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="stat-card">
                        <div className="stat-value">$3,240</div>
                        <div className="stat-label">This Month</div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="stat-card">
                        <div className="stat-value">$12,450</div>
                        <div className="stat-label">Total Earnings</div>
                    </CardBody>
                </Card>
            </div>

            <Card className="mt-6">
                <CardBody>
                    <div className="earnings-header">
                        <h3 className="card-title">Next Payout</h3>
                        <Badge variant="primary">Friday, Jan 17</Badge>
                    </div>
                    <div className="payout-preview">
                        <div className="payout-amount">$432.00</div>
                        <p>5 jobs completed since last payout</p>
                    </div>
                </CardBody>
            </Card>

            <Card className="mt-6">
                <CardBody>
                    <h3 className="card-title">Working Hours Breakdown</h3>
                    <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                <span>Regular Cleaning</span>
                                <span style={{ fontWeight: 600 }}>28 hrs</span>
                            </div>
                            <div style={{ height: '8px', background: 'var(--color-bg)', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ width: '65%', height: '100%', background: 'var(--color-primary)', borderRadius: '4px' }}></div>
                            </div>
                        </div>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                <span>Deep Cleaning</span>
                                <span style={{ fontWeight: 600 }}>14 hrs</span>
                            </div>
                            <div style={{ height: '8px', background: 'var(--color-bg)', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ width: '35%', height: '100%', background: '#9681BB', borderRadius: '4px' }}></div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>

            <Card className="mt-6">
                <CardBody>
                    <h3 className="card-title">Earnings History</h3>
                    <div className="earnings-table">
                        <div className="table-header" style={{ gridTemplateColumns: '1fr 2fr 1.5fr 1fr 1fr 1fr' }}>
                            <span>Date</span>
                            <span>Job</span>
                            <span>Customer #</span>
                            <span>Hours</span>
                            <span>Amount</span>
                            <span>Status</span>
                        </div>
                        {earnings.map((e, i) => (
                            <div key={i} className="table-row" style={{ gridTemplateColumns: '1fr 2fr 1.5fr 1fr 1fr 1fr' }}>
                                <span>{e.date}</span>
                                <span>{e.job}</span>
                                <span>{e.customerNumber}</span>
                                <span>{e.hours}h</span>
                                <span className="amount">${e.amount}</span>
                                <Badge variant="primary">Paid</Badge>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </DashboardLayout>
    )
}

// ============================================
// TRAINING HUB - ENHANCED
// ============================================
interface QuizQuestion {
    id: string
    question: string
    options: string[]
    correctIndex: number
}

interface TrainingModuleData {
    id: string
    title: string
    description: string
    type: 'video' | 'pdf' | 'document'
    contentUrl: string
    duration: string
    isRequired: boolean
    quiz: QuizQuestion[]
    passingScore: number
}

// Mock training modules from owner - matches owner's data structure
const workerTrainingModules: (TrainingModuleData & { completed: boolean; quizScore?: number })[] = [
    {
        id: '1',
        title: 'Welcome to Queren',
        description: 'Introduction to our cleaning standards and company values',
        type: 'video',
        contentUrl: 'https://example.com/welcome.mp4',
        duration: '10 min',
        isRequired: true,
        quiz: [
            { id: 'q1', question: 'What is Queren\'s core value?', options: ['Speed', 'Quality & Trust', 'Low prices', 'Quantity'], correctIndex: 1 },
            { id: 'q2', question: 'How should you greet a client?', options: ['Ignore them', 'Professional greeting', 'Wave silently', 'Start cleaning immediately'], correctIndex: 1 },
        ],
        passingScore: 80,
        completed: true,
        quizScore: 100,
    },
    {
        id: '2',
        title: 'Cleaning Standards & Quality',
        description: 'Detailed guide on our cleaning checklist and quality expectations',
        type: 'pdf',
        contentUrl: 'https://example.com/standards.pdf',
        duration: '20 min',
        isRequired: true,
        quiz: [
            { id: 'q1', question: 'What should you clean first in a bathroom?', options: ['Toilet', 'Mirror', 'Counters', 'Floor'], correctIndex: 0 },
            { id: 'q2', question: 'How often should mop heads be replaced?', options: ['Never', 'Monthly', 'Weekly', 'Daily'], correctIndex: 2 },
        ],
        passingScore: 80,
        completed: true,
        quizScore: 100,
    },
    {
        id: '3',
        title: 'Client Communication',
        description: 'Best practices for interacting with clients professionally',
        type: 'video',
        contentUrl: 'https://example.com/communication.mp4',
        duration: '15 min',
        isRequired: true,
        quiz: [],
        passingScore: 80,
        completed: false,
    },
    {
        id: '4',
        title: 'Safety & Supplies',
        description: 'How to safely use cleaning supplies and equipment',
        type: 'pdf',
        contentUrl: 'https://example.com/safety.pdf',
        duration: '12 min',
        isRequired: true,
        quiz: [
            { id: 'q1', question: 'Should you mix bleach with ammonia?', options: ['Yes', 'No', 'Sometimes', 'Only outdoors'], correctIndex: 1 },
        ],
        passingScore: 100,
        completed: false,
    },
    {
        id: '5',
        title: 'Monthly Team Notice',
        description: 'Important updates about holiday schedules and new efficient cleaning techniques.',
        type: 'document',
        contentUrl: '#',
        duration: '3 min',
        isRequired: false,
        quiz: [],
        passingScore: 0,
        completed: false,
    },
]

export function WorkerTraining() {
    const location = useLocation()
    const isDemo = location.pathname.startsWith('/worker-demo')
    const links = getWorkerLinks(isDemo ? '/worker-demo' : '/worker')

    const [modules, setModules] = useState(workerTrainingModules)
    const [selectedModule, setSelectedModule] = useState<(TrainingModuleData & { completed: boolean }) | null>(null)
    const [view, setView] = useState<'list' | 'content' | 'quiz' | 'result'>('list')
    const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({})
    const [quizResult, setQuizResult] = useState<{ score: number; passed: boolean } | null>(null)

    const completedCount = modules.filter(m => m.completed).length

    const openModule = (module: typeof modules[0]) => {
        setSelectedModule(module)
        setQuizAnswers({})
        setQuizResult(null)
        setView('content')
    }

    const startQuiz = () => {
        setQuizAnswers({})
        setView('quiz')
    }

    const selectAnswer = (questionId: string, optionIndex: number) => {
        setQuizAnswers({ ...quizAnswers, [questionId]: optionIndex })
    }

    const submitQuiz = () => {
        if (!selectedModule || selectedModule.quiz.length === 0) return

        let correct = 0
        selectedModule.quiz.forEach(q => {
            if (quizAnswers[q.id] === q.correctIndex) {
                correct++
            }
        })

        const score = Math.round((correct / selectedModule.quiz.length) * 100)
        const passed = score >= selectedModule.passingScore

        setQuizResult({ score, passed })
        setView('result')

        if (passed) {
            setModules(modules.map(m =>
                m.id === selectedModule.id
                    ? { ...m, completed: true, quizScore: score }
                    : m
            ))
        }
    }

    const backToList = () => {
        setView('list')
        setSelectedModule(null)
    }

    const retakeQuiz = () => {
        setQuizAnswers({})
        setQuizResult(null)
        setView('quiz')
    }

    return (
        <DashboardLayout title="Training Hub" links={links}>
            {view === 'list' && (
                <>
                    <Card className="mb-6">
                        <CardBody>
                            <div className="training-progress">
                                <div className="progress-info">
                                    <h3>Your Progress</h3>
                                    <p>{completedCount} of {modules.length} modules completed</p>
                                </div>
                                <div className="progress-bar-container">
                                    <div className="progress-bar" style={{ width: `${(completedCount / modules.length) * 100}%` }} />
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                    <h3 className="section-title">Required Training</h3>
                    <div className="training-list">
                        {modules.map(module => (
                            <Card key={module.id} className="training-card">
                                <CardBody>
                                    <div className="training-item">
                                        <div className="training-icon">
                                            {module.completed ? <Icon name="check" size="md" /> : module.type === 'video' ? <Icon name="video" size="md" /> : <Icon name="document" size="md" />}
                                        </div>
                                        <div className="training-info">
                                            <h4>{module.title}</h4>
                                            <span>{module.duration} {module.quiz.length > 0 && `• ${module.quiz.length} quiz questions`}</span>
                                        </div>
                                        {module.completed ? (
                                            <div className="training-status">
                                                <Badge variant="success">Complete</Badge>
                                                {module.quizScore !== undefined && (
                                                    <small className="text-muted">Score: {module.quizScore}%</small>
                                                )}
                                            </div>
                                        ) : (
                                            <Button variant="secondary" size="sm" onClick={() => openModule(module)}>
                                                Start
                                            </Button>
                                        )}
                                    </div>
                                </CardBody>
                            </Card>
                        ))}
                    </div>

                    <h3 className="section-title mt-8">Resources</h3>
                    <div className="resource-grid">
                        <Card hover>
                            <CardBody className="resource-card">
                                <span className="resource-icon"><Icon name="clipboard" size="lg" /></span>
                                <h4>Cleaning Checklist</h4>
                                <p>Standard checklist for all jobs</p>
                            </CardBody>
                        </Card>
                        <Card hover>
                            <CardBody className="resource-card">
                                <span className="resource-icon"><Icon name="phone" size="lg" /></span>
                                <h4>Support Contact</h4>
                                <p>Get help when you need it</p>
                            </CardBody>
                        </Card>
                        <Card hover>
                            <CardBody className="resource-card">
                                <span className="resource-icon"><Icon name="lightbulb" size="lg" /></span>
                                <h4>Tips & Tricks</h4>
                                <p>Pro cleaning techniques</p>
                            </CardBody>
                        </Card>
                    </div>
                </>
            )}

            {view === 'content' && selectedModule && (
                <div className="module-viewer">
                    <Button variant="ghost" onClick={backToList} className="mb-4"><Icon name="arrowLeft" size="sm" /> Back to Training</Button>

                    <Card className="mb-6">
                        <CardBody>
                            <div className="module-header">
                                <div className="module-type-icon">
                                    {selectedModule.type === 'video' ? <Icon name="video" size="lg" /> : <Icon name="document" size="lg" />}
                                </div>
                                <div>
                                    <h2>{selectedModule.title}</h2>
                                    <p className="text-muted">{selectedModule.description}</p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                    <Card className="content-placeholder mb-6">
                        <CardBody>
                            <div className="content-preview">
                                {selectedModule.type === 'video' ? (
                                    <div className="video-placeholder">
                                        <img
                                            src={DEFAULT_IMAGES.training.video}
                                            alt="Training video preview"
                                            className="placeholder-image"
                                        />
                                        <div className="placeholder-overlay">
                                            <span className="placeholder-icon"><Icon name="play" size="xl" /></span>
                                            <p>Video Player</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="pdf-placeholder">
                                        <img
                                            src={DEFAULT_IMAGES.training.document}
                                            alt="Document preview"
                                            className="placeholder-image"
                                        />
                                        <div className="placeholder-overlay">
                                            <span className="placeholder-icon"><Icon name="document" size="xl" /></span>
                                            <p>PDF Viewer</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </CardBody>
                    </Card>

                    <div className="module-actions">
                        {selectedModule.quiz.length > 0 ? (
                            <Button onClick={startQuiz}>
                                Take Quiz ({selectedModule.quiz.length} questions)
                            </Button>
                        ) : (
                            <Button onClick={() => {
                                setModules(modules.map(m =>
                                    m.id === selectedModule.id ? { ...m, completed: true } : m
                                ))
                                backToList()
                            }}>
                                Mark as Complete
                            </Button>
                        )}
                    </div>
                </div>
            )}

            {view === 'quiz' && selectedModule && (
                <div className="quiz-taking">
                    <Button variant="ghost" onClick={() => setView('content')} className="mb-4"><Icon name="arrowLeft" size="sm" /> Back to Content</Button>

                    <Card className="mb-6">
                        <CardBody>
                            <h2>Quiz: {selectedModule.title}</h2>
                            <p className="text-muted">
                                Answer all questions. You need {selectedModule.passingScore}% to pass.
                            </p>
                        </CardBody>
                    </Card>

                    {selectedModule.quiz.map((question, qIndex) => (
                        <Card key={question.id} className="quiz-question-card mb-4">
                            <CardBody>
                                <div className="question-text">
                                    <span className="question-num">Q{qIndex + 1}</span>
                                    <p>{question.question}</p>
                                </div>
                                <div className="answer-options">
                                    {question.options.map((option, oIndex) => (
                                        <label
                                            key={oIndex}
                                            className={`answer-option ${quizAnswers[question.id] === oIndex ? 'selected' : ''}`}
                                        >
                                            <input
                                                type="radio"
                                                name={`question-${question.id}`}
                                                checked={quizAnswers[question.id] === oIndex}
                                                onChange={() => selectAnswer(question.id, oIndex)}
                                            />
                                            <span>{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </CardBody>
                        </Card>
                    ))}

                    <Button
                        onClick={submitQuiz}
                        disabled={Object.keys(quizAnswers).length !== selectedModule.quiz.length}
                    >
                        Submit Quiz
                    </Button>
                </div>
            )}

            {view === 'result' && selectedModule && quizResult && (
                <div className="quiz-result">
                    <Card>
                        <CardBody>
                            <div className={`result-display ${quizResult.passed ? 'passed' : 'failed'}`}>
                                <div className="result-icon">
                                    {quizResult.passed ? <Icon name="party" size="xl" /> : <Icon name="frown" size="xl" />}
                                </div>
                                <h2>{quizResult.passed ? 'Congratulations!' : 'Not Quite...'}</h2>
                                <div className="result-score">
                                    <span className="score">{quizResult.score}%</span>
                                    <span className="passing">Passing: {selectedModule.passingScore}%</span>
                                </div>
                                <p>
                                    {quizResult.passed
                                        ? 'You passed the quiz! This module is now complete.'
                                        : 'You did not reach the passing score. Review the material and try again.'
                                    }
                                </p>
                                <div className="result-actions">
                                    {quizResult.passed ? (
                                        <Button onClick={backToList}>Back to Training</Button>
                                    ) : (
                                        <>
                                            <Button variant="secondary" onClick={() => setView('content')}>
                                                Review Content
                                            </Button>
                                            <Button onClick={retakeQuiz}>Retake Quiz</Button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            )}
        </DashboardLayout>
    )
}


// ============================================
// WORKER PROFILE
// ============================================
export function WorkerProfile() {
    const location = useLocation()
    const isDemo = location.pathname.startsWith('/worker-demo')
    const links = getWorkerLinks(isDemo ? '/worker-demo' : '/worker')

    const [selectedDate, setSelectedDate] = useState(29)
    const [showAddModal, setShowAddModal] = useState(false)
    const [preferenceType, setPreferenceType] = useState<'unavailable' | 'prefer'>('unavailable')
    const [allDay, setAllDay] = useState(false)
    const [startTime, setStartTime] = useState('09:00')
    const [endTime, setEndTime] = useState('17:00')
    const [repeats, setRepeats] = useState(false)
    const [repeatFrequency, setRepeatFrequency] = useState<'day' | 'week' | '2weeks'>('week')
    const [repeatDays, setRepeatDays] = useState<string[]>(['Mon', 'Wed', 'Fri'])
    const [repeatEndDate, setRepeatEndDate] = useState('')
    const [preferenceDate, setPreferenceDate] = useState('2026-02-24')
    const [note, setNote] = useState('')

    // Calendar state - start with current month (January 2026 for demo)
    const [currentMonth, setCurrentMonth] = useState(0) // 0 = January 2026

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December']

    // Calculate days in month and first day of week
    const getMonthData = (monthOffset: number) => {
        const baseYear = 2026
        const baseMonth = 0 // January

        let year = baseYear
        let month = baseMonth + monthOffset

        while (month > 11) {
            month -= 12
            year++
        }
        while (month < 0) {
            month += 12
            year--
        }

        const daysInMonth = new Date(year, month + 1, 0).getDate()
        const firstDayOfWeek = new Date(year, month, 1).getDay()
        const daysInPrevMonth = new Date(year, month, 0).getDate()

        return { year, month, daysInMonth, firstDayOfWeek, daysInPrevMonth, monthName: monthNames[month] }
    }

    const monthData = getMonthData(currentMonth)

    // Generate calendar grid
    const generateCalendarDays = () => {
        const weeks = []
        let dayCount = 1
        let nextMonthDay = 1

        for (let week = 0; week < 6; week++) {
            const days = []
            for (let d = 0; d < 7; d++) {
                if (week === 0 && d < monthData.firstDayOfWeek) {
                    // Previous month
                    days.push({
                        day: monthData.daysInPrevMonth - monthData.firstDayOfWeek + d + 1,
                        isCurrentMonth: false
                    })
                } else if (dayCount > monthData.daysInMonth) {
                    // Next month
                    days.push({ day: nextMonthDay++, isCurrentMonth: false })
                } else {
                    days.push({ day: dayCount++, isCurrentMonth: true })
                }
            }
            weeks.push({ week: week + 1, days })
            if (dayCount > monthData.daysInMonth && week >= 3) break
        }
        return weeks
    }

    const calendarDays = generateCalendarDays()

    const handlePrevMonth = () => {
        if (currentMonth > -3) setCurrentMonth(currentMonth - 1)
    }

    const handleNextMonth = () => {
        if (currentMonth < 3) setCurrentMonth(currentMonth + 1)
    }

    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

    const availabilityData = [
        { date: 'Mon, Jan 26, 2026', entries: [{ type: 'unavailable', time: '4:15p-11:45p' }] },
        { date: 'Tue, Jan 27, 2026', entries: [{ type: 'unavailable', time: '4:15p-11:45p' }] },
        { date: 'Wed, Jan 28, 2026', entries: [{ type: 'unavailable', time: '4:15p-11:45p' }] },
        { date: 'Thu, Jan 29, 2026', entries: [{ type: 'unavailable', time: '4:15p-11:45p' }] },
        { date: 'Fri, Jan 30, 2026', entries: [{ type: 'unavailable', time: '4:15p-11:45p' }] },
    ]

    return (
        <DashboardLayout title="Profile & Settings" links={links}>
            <div className="profile-layout">
                <Card className="profile-card">
                    <CardBody>
                        <div className="profile-header">
                            <div className="profile-avatar" style={{
                                backgroundImage: `url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                color: 'transparent'
                            }}>MG</div>
                            <div className="profile-info">
                                <h2>Maria Garcia</h2>
                                <p>Member since January 2026</p>
                                <Badge variant="success">Verified</Badge>
                            </div>
                        </div>

                        <div className="profile-stats">
                            <div className="profile-stat">
                                <span className="stat-value">23</span>
                                <span className="stat-label">Jobs</span>
                            </div>
                            <div className="profile-stat">
                                <span className="stat-value">4.9</span>
                                <span className="stat-label">Rating</span>
                            </div>
                            <div className="profile-stat">
                                <span className="stat-value">100%</span>
                                <span className="stat-label">On Time</span>
                            </div>
                        </div>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <h3 className="card-title">Personal Information</h3>
                        <div className="form-grid">
                            <Input label="Full Name" defaultValue="Maria Garcia" />
                            <Input label="Email" type="email" defaultValue="maria@example.com" disabled />
                            <Input label="Phone" type="tel" defaultValue="(604) 555-1234" />
                        </div>
                        <Button className="mt-4">Save Changes</Button>
                    </CardBody>
                </Card>

                <Card className="mt-6">
                    <CardBody>
                        <div className="availability-header">
                            <h3 className="card-title">Availability</h3>
                            <Button variant="secondary" size="sm" onClick={() => setShowAddModal(true)}>
                                <Icon name="plus" size="sm" /> Add Preference
                            </Button>
                        </div>

                        {/* Desktop Two-Column Layout */}
                        <div className="availability-content">
                            {/* Calendar View */}
                            <div className="availability-calendar">
                                <div className="calendar-nav">
                                    <Button variant="ghost" size="sm" onClick={handlePrevMonth} disabled={currentMonth <= -3}>
                                        <Icon name="arrowLeft" size="sm" />
                                    </Button>
                                    <span className="calendar-month">{monthData.monthName} {monthData.year}</span>
                                    <Button variant="ghost" size="sm" onClick={handleNextMonth} disabled={currentMonth >= 3}>
                                        <Icon name="arrowRight" size="sm" />
                                    </Button>
                                </div>

                                <div className="calendar-grid">
                                    <div className="calendar-weekdays">
                                        {days.map((day, i) => (
                                            <div key={i} className="weekday">{day}</div>
                                        ))}
                                    </div>
                                    {calendarDays.map((week) => (
                                        <div key={week.week} className="calendar-row">
                                            {week.days.map((dayData, i) => {
                                                const hasAvailability = [26, 27, 28, 29, 30].includes(dayData.day) && dayData.isCurrentMonth && currentMonth === 0
                                                return (
                                                    <div
                                                        key={i}
                                                        className={`calendar-day ${!dayData.isCurrentMonth ? 'other-month' : ''} ${dayData.day === selectedDate && dayData.isCurrentMonth ? 'selected' : ''} ${hasAvailability ? 'has-entry' : ''}`}
                                                        onClick={() => dayData.isCurrentMonth && setSelectedDate(dayData.day)}
                                                    >
                                                        <span>{dayData.day}</span>
                                                        {hasAvailability && <span className="day-dot"></span>}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Availability List */}
                            <div className="availability-list-container">
                                <div className="availability-list-header">
                                    <h4>Scheduled Availability</h4>
                                </div>
                                <div className="availability-list">
                                    {availabilityData.map((item, index) => (
                                        <div key={index} className="availability-day">
                                            <div className="availability-day-header">
                                                <span className="day-label">{item.date.toUpperCase()}</span>
                                                <Button variant="ghost" size="sm" onClick={() => setShowAddModal(true)}>
                                                    <Icon name="plus" size="sm" />
                                                </Button>
                                            </div>
                                            {item.entries.map((entry, i) => (
                                                <div key={i} className="availability-entry">
                                                    <Icon name="minus" size="sm" />
                                                    <span
                                                        className="availability-entry-text"
                                                        onClick={() => setShowAddModal(true)}
                                                    >
                                                        Unavailable {entry.time}
                                                    </span>
                                                    <div className="availability-entry-actions">
                                                        <button
                                                            className="entry-action-btn edit"
                                                            onClick={() => setShowAddModal(true)}
                                                            title="Edit"
                                                        >
                                                            <Icon name="edit" size="sm" />
                                                        </button>
                                                        <button
                                                            className="entry-action-btn delete"
                                                            onClick={() => {/* Delete handler */ }}
                                                            title="Delete"
                                                        >
                                                            <Icon name="trash" size="sm" />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="availability-note mt-4">
                            <Icon name="info" size="sm" />
                            <span>Unavailable because of vacation, illness, etc? <a href="#" style={{ color: 'var(--color-primary)' }}>Request time off</a> instead.</span>
                        </div>
                    </CardBody>
                </Card>

                {showAddModal && (
                    <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
                        <div className="modal-card" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                            <Card>
                                <CardBody>
                                    <div className="modal-header">
                                        <Button variant="ghost" size="sm" onClick={() => setShowAddModal(false)}>Cancel</Button>
                                        <h3>Add Preference</h3>
                                        <Button variant="ghost" size="sm" onClick={() => setShowAddModal(false)}>Save</Button>
                                    </div>

                                    <div className="preference-form">
                                        <div className="preference-row">
                                            <span>Date</span>
                                            <input
                                                type="date"
                                                className="date-input"
                                                value={preferenceDate}
                                                onChange={(e) => setPreferenceDate(e.target.value)}
                                            />
                                        </div>

                                        <div className="preference-options">
                                            <label className={`preference-option ${preferenceType === 'unavailable' ? 'selected' : ''}`}>
                                                <input
                                                    type="radio"
                                                    name="pref-type"
                                                    checked={preferenceType === 'unavailable'}
                                                    onChange={() => setPreferenceType('unavailable')}
                                                />
                                                <span className="radio-circle"></span>
                                                <span>I'm unavailable to work</span>
                                            </label>
                                            <label className={`preference-option ${preferenceType === 'prefer' ? 'selected' : ''}`}>
                                                <input
                                                    type="radio"
                                                    name="pref-type"
                                                    checked={preferenceType === 'prefer'}
                                                    onChange={() => setPreferenceType('prefer')}
                                                />
                                                <span className="radio-circle"></span>
                                                <span>I prefer to work</span>
                                            </label>
                                        </div>

                                        <div className="preference-row">
                                            <span>All Day</span>
                                            <label className="toggle-switch">
                                                <input type="checkbox" checked={allDay} onChange={() => setAllDay(!allDay)} />
                                                <span className="toggle-slider"></span>
                                            </label>
                                        </div>

                                        {!allDay && (
                                            <div className="preference-row time-picker-row">
                                                <span>Time</span>
                                                <div className="time-inputs">
                                                    <input
                                                        type="time"
                                                        className="time-input"
                                                        value={startTime}
                                                        onChange={(e) => setStartTime(e.target.value)}
                                                    />
                                                    <span className="time-separator">–</span>
                                                    <input
                                                        type="time"
                                                        className="time-input"
                                                        value={endTime}
                                                        onChange={(e) => setEndTime(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        <div className="preference-row">
                                            <span>Repeats</span>
                                            <label className="toggle-switch">
                                                <input type="checkbox" checked={repeats} onChange={() => setRepeats(!repeats)} />
                                                <span className="toggle-slider"></span>
                                            </label>
                                        </div>

                                        {repeats && (
                                            <>
                                                <div className="preference-row">
                                                    <span>Frequency</span>
                                                    <select
                                                        className="form-select preference-select"
                                                        value={repeatFrequency}
                                                        onChange={(e) => setRepeatFrequency(e.target.value as 'day' | 'week' | '2weeks')}
                                                    >
                                                        <option value="day">Every Day</option>
                                                        <option value="week">Every Week</option>
                                                        <option value="2weeks">Every 2 Weeks</option>
                                                    </select>
                                                </div>

                                                {repeatFrequency !== 'day' && (
                                                    <div className="preference-row repeats-on-row">
                                                        <span>Repeats On</span>
                                                        <div className="day-picker">
                                                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                                                <button
                                                                    key={day}
                                                                    type="button"
                                                                    className={`day-btn ${repeatDays.includes(day) ? 'selected' : ''}`}
                                                                    onClick={() => {
                                                                        if (repeatDays.includes(day)) {
                                                                            setRepeatDays(repeatDays.filter(d => d !== day))
                                                                        } else {
                                                                            setRepeatDays([...repeatDays, day])
                                                                        }
                                                                    }}
                                                                >
                                                                    {day.charAt(0)}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="preference-row">
                                                    <span>Ends</span>
                                                    <input
                                                        type="date"
                                                        className="date-input"
                                                        value={repeatEndDate}
                                                        onChange={(e) => setRepeatEndDate(e.target.value)}
                                                    />
                                                </div>
                                            </>
                                        )}

                                        <div className="preference-row note-row">
                                            <Icon name="document" size="sm" />
                                            <input
                                                type="text"
                                                className="note-input"
                                                placeholder="Add note (e.g., vacation, appointment)"
                                                value={note}
                                                onChange={(e) => setNote(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                )}
            </div>
        </DashboardLayout>
    )
}
