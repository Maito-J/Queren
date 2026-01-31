import { useState } from 'react'
import { DashboardLayout } from '@/components/layout'
import { Card, CardBody, Button } from '@/components/ui'
import { Icon, IconName } from '@/components/Icon'
import { useLocation } from 'react-router-dom'

interface SavedAddress {
    id: string
    label: string
    street: string
    city: string
    state: string
    zip: string
    isDefault: boolean
}

const initialAddresses: SavedAddress[] = [
    {
        id: '1',
        label: 'My House',
        street: '456 Columbia Street',
        city: 'New Westminster',
        state: 'BC',
        zip: 'V3L 1A9',
        isDefault: true
    },
    {
        id: '2',
        label: "Parent's House",
        street: '789 Royal Avenue',
        city: 'New Westminster',
        state: 'BC',
        zip: 'V3M 1J5',
        isDefault: false
    }
]

function getClientLinks(isDemo: boolean): { to: string; label: string; icon: IconName }[] {
    const base = isDemo ? '/dashboard-demo' : '/dashboard'
    return [
        { to: base, label: 'Overview', icon: 'home' },
        { to: `${base}/profile`, label: 'Profile', icon: 'user' },
        { to: `${base}/billing`, label: 'Billing', icon: 'creditCard' },
        { to: `${base}/history`, label: 'History', icon: 'clipboard' },
        { to: `${base}/preferences`, label: 'Preferences', icon: 'settings' },
    ]
}

export function ClientPreferences() {
    const location = useLocation()
    const isDemo = location.pathname.startsWith('/dashboard-demo')
    const clientLinks = getClientLinks(isDemo)

    // Saved Addresses state
    const [addresses, setAddresses] = useState<SavedAddress[]>(initialAddresses)
    const [selectedAddressId, setSelectedAddressId] = useState<string>(
        initialAddresses.find(a => a.isDefault)?.id || '1'
    )
    const [showAddForm, setShowAddForm] = useState(false)
    const [newAddress, setNewAddress] = useState({
        label: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        isDefault: false
    })

    const handleAddAddress = () => {
        if (!newAddress.label || !newAddress.street || !newAddress.city) return

        const id = Date.now().toString()
        const addressToAdd: SavedAddress = { ...newAddress, id }

        if (addressToAdd.isDefault) {
            setAddresses(prev => prev.map(a => ({ ...a, isDefault: false })).concat(addressToAdd))
        } else {
            setAddresses(prev => [...prev, addressToAdd])
        }

        setNewAddress({ label: '', street: '', city: '', state: '', zip: '', isDefault: false })
        setShowAddForm(false)
    }

    const handleDeleteAddress = (id: string) => {
        setAddresses(prev => prev.filter(a => a.id !== id))
        if (selectedAddressId === id) {
            setSelectedAddressId(addresses[0]?.id || '')
        }
    }

    const handleSetDefault = (id: string) => {
        setAddresses(prev => prev.map(a => ({ ...a, isDefault: a.id === id })))
    }

    return (
        <DashboardLayout title="Preferences" links={clientLinks}>
            <Card className="mb-6">
                <CardBody>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', margin: 0 }}>
                            <Icon name="mapPin" size="md" /> Location
                        </h2>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShowAddForm(!showAddForm)}
                        >
                            <Icon name="plus" size="sm" /> Add Address
                        </Button>
                    </div>

                    {/* Add New Address Form */}
                    {showAddForm && (
                        <div style={{
                            padding: '1.25rem',
                            marginBottom: '1.5rem',
                            border: '2px dashed var(--color-border)',
                            borderRadius: 'var(--radius-lg)',
                            background: 'var(--color-surface-subtle)'
                        }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>Add New Address</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                                        Address Label
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g., Home, Office, Mom's House"
                                        value={newAddress.label}
                                        onChange={(e) => setNewAddress(prev => ({ ...prev, label: e.target.value }))}
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem',
                                            borderRadius: 'var(--radius-md)',
                                            border: '1px solid var(--color-border)'
                                        }}
                                    />
                                </div>
                                <div style={{ gridColumn: 'span 2' }}>
                                    <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                                        Street Address
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="123 Main Street, Apt 4B"
                                        value={newAddress.street}
                                        onChange={(e) => setNewAddress(prev => ({ ...prev, street: e.target.value }))}
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem',
                                            borderRadius: 'var(--radius-md)',
                                            border: '1px solid var(--color-border)'
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Sacramento"
                                        value={newAddress.city}
                                        onChange={(e) => setNewAddress(prev => ({ ...prev, city: e.target.value }))}
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem',
                                            borderRadius: 'var(--radius-md)',
                                            border: '1px solid var(--color-border)'
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                                        State
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="CA"
                                        value={newAddress.state}
                                        onChange={(e) => setNewAddress(prev => ({ ...prev, state: e.target.value }))}
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem',
                                            borderRadius: 'var(--radius-md)',
                                            border: '1px solid var(--color-border)'
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                                        ZIP Code
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="95814"
                                        value={newAddress.zip}
                                        onChange={(e) => setNewAddress(prev => ({ ...prev, zip: e.target.value }))}
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem',
                                            borderRadius: 'var(--radius-md)',
                                            border: '1px solid var(--color-border)'
                                        }}
                                    />
                                </div>
                            </div>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', cursor: 'pointer' }}>
                                <input
                                    type="checkbox"
                                    checked={newAddress.isDefault}
                                    onChange={(e) => setNewAddress(prev => ({ ...prev, isDefault: e.target.checked }))}
                                    style={{ width: '18px', height: '18px', accentColor: 'var(--color-primary)' }}
                                />
                                <span style={{ fontSize: '0.875rem' }}>Set as default address</span>
                            </label>
                            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
                                <Button variant="primary" size="sm" onClick={handleAddAddress}>
                                    Save Address
                                </Button>
                                <Button variant="ghost" size="sm" onClick={() => {
                                    setShowAddForm(false)
                                    setNewAddress({ label: '', street: '', city: '', state: '', zip: '', isDefault: false })
                                }}>
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Address List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {addresses.map((address) => (
                            <div
                                key={address.id}
                                onClick={() => setSelectedAddressId(address.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    padding: '1rem 1.25rem',
                                    borderRadius: 'var(--radius-lg)',
                                    border: selectedAddressId === address.id
                                        ? '2px solid var(--color-primary)'
                                        : '1px solid var(--color-border)',
                                    background: selectedAddressId === address.id
                                        ? 'var(--color-primary-50)'
                                        : 'var(--color-surface)',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <input
                                    type="radio"
                                    name="selectedAddress"
                                    checked={selectedAddressId === address.id}
                                    onChange={() => setSelectedAddressId(address.id)}
                                    style={{ width: '18px', height: '18px', marginRight: '1rem', marginTop: '0.25rem', accentColor: 'var(--color-primary)' }}
                                />
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                        <span style={{ fontWeight: 600 }}>{address.label}</span>
                                        {address.isDefault && (
                                            <span style={{
                                                background: 'var(--color-primary)',
                                                color: 'white',
                                                padding: '0.125rem 0.5rem',
                                                borderRadius: '9999px',
                                                fontSize: '0.7rem',
                                                fontWeight: 600
                                            }}>Default</span>
                                        )}
                                        {selectedAddressId === address.id && !address.isDefault && (
                                            <span style={{
                                                background: 'var(--color-primary)',
                                                color: 'white',
                                                padding: '0.125rem 0.5rem',
                                                borderRadius: '9999px',
                                                fontSize: '0.7rem',
                                                fontWeight: 600
                                            }}>Selected</span>
                                        )}
                                    </div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                                        {address.street}
                                    </div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                                        {address.city}, {address.state} {address.zip}
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '0.5rem' }} onClick={(e) => e.stopPropagation()}>
                                    {!address.isDefault && (
                                        <button
                                            onClick={() => handleSetDefault(address.id)}
                                            style={{
                                                padding: '0.375rem 0.75rem',
                                                fontSize: '0.75rem',
                                                border: '1px solid var(--color-border)',
                                                borderRadius: 'var(--radius-sm)',
                                                background: 'white',
                                                cursor: 'pointer',
                                                transition: 'all 0.15s ease'
                                            }}
                                            title="Set as default"
                                        >
                                            Set Default
                                        </button>
                                    )}
                                    <button
                                        onClick={() => handleDeleteAddress(address.id)}
                                        style={{
                                            padding: '0.375rem 0.5rem',
                                            fontSize: '0.75rem',
                                            border: '1px solid var(--color-primary-light)',
                                            borderRadius: 'var(--radius-sm)',
                                            background: 'var(--color-primary-50)',
                                            color: 'var(--color-primary)',
                                            cursor: 'pointer',
                                            transition: 'all 0.15s ease'
                                        }}
                                        title="Delete address"
                                    >
                                        <Icon name="x" size="sm" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {addresses.length === 0 && (
                        <div style={{
                            textAlign: 'center',
                            padding: '2rem',
                            color: 'var(--color-text-muted)'
                        }}>
                            <Icon name="mapPin" size="lg" />
                            <p style={{ marginTop: '0.75rem' }}>No saved addresses yet. Add your first address above!</p>
                        </div>
                    )}
                </CardBody>
            </Card>

            <Card className="mb-6">
                <CardBody>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                        <Icon name="calendar" size="md" /> Cleaning Schedule
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Booking Frequency</label>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                                    <input type="radio" name="frequency" value="weekly" defaultChecked style={{ width: '18px', height: '18px', accentColor: 'var(--color-primary)' }} />
                                    <div>
                                        <div style={{ fontWeight: 500 }}>Once a Week</div>
                                        <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Best for busy households - 10% discount</div>
                                    </div>
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                                    <input type="radio" name="frequency" value="biweekly" style={{ width: '18px', height: '18px', accentColor: 'var(--color-primary)' }} />
                                    <div>
                                        <div style={{ fontWeight: 500 }}>Every Two Weeks</div>
                                        <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Most popular choice - 5% discount</div>
                                    </div>
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                                    <input type="radio" name="frequency" value="monthly" style={{ width: '18px', height: '18px', accentColor: 'var(--color-primary)' }} />
                                    <div>
                                        <div style={{ fontWeight: 500 }}>Once a Month</div>
                                        <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Great for light maintenance</div>
                                    </div>
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                                    <input type="radio" name="frequency" value="onetime" style={{ width: '18px', height: '18px', accentColor: 'var(--color-primary)' }} />
                                    <div>
                                        <div style={{ fontWeight: 500 }}>One-Time Cleaning</div>
                                        <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>No recurring schedule</div>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Preferred Day</label>
                                <select style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                                    <option>Monday</option>
                                    <option>Tuesday</option>
                                    <option selected>Wednesday</option>
                                    <option>Thursday</option>
                                    <option>Friday</option>
                                    <option>Saturday</option>
                                </select>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Preferred Time</label>
                                <select style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                                    <option>8:00 AM - 10:00 AM</option>
                                    <option selected>10:00 AM - 12:00 PM</option>
                                    <option>12:00 PM - 2:00 PM</option>
                                    <option>2:00 PM - 4:00 PM</option>
                                    <option>4:00 PM - 6:00 PM</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <Button variant="secondary" style={{ marginTop: '1.5rem' }}>
                        Update Schedule
                    </Button>
                </CardBody>
            </Card>

            <Card className="mb-6">
                <CardBody>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                        <Icon name="sparkle" size="md" /> Cleaning Preferences
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Preferred Cleaning Products</label>
                            <select style={{ width: '100%', maxWidth: '300px', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                                <option>Standard Products</option>
                                <option>Eco-Friendly Products</option>
                                <option>Hypoallergenic Products</option>
                            </select>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Special Instructions</label>
                            <textarea
                                placeholder="Any special requests or things we should know about your home..."
                                style={{
                                    width: '100%',
                                    minHeight: '100px',
                                    padding: '0.75rem',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid var(--color-border)',
                                    resize: 'vertical'
                                }}
                            />
                        </div>
                    </div>

                    <Button variant="secondary" style={{ marginTop: '1.5rem' }}>
                        Save Preferences
                    </Button>
                </CardBody>
            </Card>

            <Card className="mb-6">
                <CardBody>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                        <Icon name="bell" size="md" /> Notification Settings
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                            <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', accentColor: 'var(--color-primary)' }} />
                            <div>
                                <div style={{ fontWeight: 500 }}>Email Notifications</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Receive booking confirmations and updates via email</div>
                            </div>
                        </label>

                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                            <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', accentColor: 'var(--color-primary)' }} />
                            <div>
                                <div style={{ fontWeight: 500 }}>SMS Notifications</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Receive text messages for cleaning reminders</div>
                            </div>
                        </label>

                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                            <input type="checkbox" style={{ width: '18px', height: '18px', accentColor: 'var(--color-primary)' }} />
                            <div>
                                <div style={{ fontWeight: 500 }}>Marketing Emails</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Receive special offers and promotions</div>
                            </div>
                        </label>
                    </div>
                </CardBody>
            </Card>
        </DashboardLayout>
    )
}
