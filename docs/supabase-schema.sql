# Queren Database Schema

## Tables

### profiles
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('client', 'worker', 'owner')),
  email TEXT NOT NULL,
  full_name TEXT,
  phone TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);
```

### addresses
```sql
CREATE TABLE addresses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  street TEXT NOT NULL,
  city TEXT NOT NULL,
  province TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  is_primary BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE addresses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own addresses" ON addresses
  FOR ALL USING (auth.uid() = profile_id);
```

### bookings
```sql
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES profiles(id),
  assigned_worker_id UUID REFERENCES profiles(id),
  service_type TEXT NOT NULL CHECK (service_type IN ('regular', 'deep')),
  sqft INTEGER NOT NULL,
  bedrooms INTEGER NOT NULL,
  bathrooms INTEGER NOT NULL,
  addons JSONB DEFAULT '[]',
  scheduled_at TIMESTAMPTZ NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled')),
  price_breakdown JSONB,
  total DECIMAL(10,2) NOT NULL,
  notes TEXT,
  address_id UUID REFERENCES addresses(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Clients see own bookings" ON bookings
  FOR SELECT USING (auth.uid() = client_id);

CREATE POLICY "Workers see assigned bookings" ON bookings
  FOR SELECT USING (auth.uid() = assigned_worker_id);

CREATE POLICY "Owners see all bookings" ON bookings
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'owner')
  );

CREATE POLICY "Clients can insert bookings" ON bookings
  FOR INSERT WITH CHECK (auth.uid() = client_id);
```

### reviews
```sql
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID REFERENCES bookings(id),
  client_id UUID REFERENCES profiles(id),
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read reviews" ON reviews FOR SELECT USING (TRUE);
CREATE POLICY "Clients can write reviews" ON reviews
  FOR INSERT WITH CHECK (auth.uid() = client_id);
```

### worker_verification
```sql
CREATE TABLE worker_verification (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  worker_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  doc_urls TEXT[],
  notes TEXT,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  reviewed_at TIMESTAMPTZ
);

ALTER TABLE worker_verification ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Workers see own verification" ON worker_verification
  FOR SELECT USING (auth.uid() = worker_id);

CREATE POLICY "Workers can submit docs" ON worker_verification
  FOR INSERT WITH CHECK (auth.uid() = worker_id);

CREATE POLICY "Owners manage verification" ON worker_verification
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'owner')
  );
```

### job_events
```sql
CREATE TABLE job_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID REFERENCES bookings(id),
  worker_id UUID REFERENCES profiles(id),
  check_in TIMESTAMPTZ,
  check_out TIMESTAMPTZ,
  photo_urls TEXT[],
  completion_notes TEXT
);

ALTER TABLE job_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Workers manage own events" ON job_events
  FOR ALL USING (auth.uid() = worker_id);

CREATE POLICY "Owners view all events" ON job_events
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'owner')
  );
```

### payouts
```sql
CREATE TABLE payouts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  worker_id UUID REFERENCES profiles(id),
  amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE payouts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Workers see own payouts" ON payouts
  FOR SELECT USING (auth.uid() = worker_id);
```

### pricing_config
```sql
CREATE TABLE pricing_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Public read, owner write
ALTER TABLE pricing_config ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read pricing" ON pricing_config FOR SELECT USING (TRUE);
CREATE POLICY "Owners update pricing" ON pricing_config
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'owner')
  );
```

### training_modules
```sql
CREATE TABLE training_modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  visible_to_roles TEXT[] DEFAULT ARRAY['worker'],
  sort_order INTEGER DEFAULT 0
);

ALTER TABLE training_modules ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Role-based training access" ON training_modules
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = ANY(visible_to_roles)
    )
  );
```

## Storage Buckets
```sql
-- Create buckets via Supabase Dashboard or API
-- verification_docs: Worker ID documents
-- job_proof: Before/after photos, checklists
```

## Seed Data
```sql
-- Insert default pricing config
INSERT INTO pricing_config (key, value) VALUES
  ('base_regular', '89'),
  ('base_deep', '149'),
  ('sqft_rate', '0.03'),
  ('bedroom_rate', '15'),
  ('bathroom_rate', '20'),
  ('tax_rate', '0.13'),
  ('addons', '{
    "fridge": {"label": "Inside Fridge", "price": 25},
    "oven": {"label": "Inside Oven", "price": 30},
    "dishes": {"label": "Dishes", "price": 15},
    "cabinets": {"label": "Inside Cabinets", "price": 40},
    "laundry": {"label": "Laundry", "price": 20}
  }');

-- Insert sample training modules
INSERT INTO training_modules (title, content, visible_to_roles, sort_order) VALUES
  ('Welcome to Queren', 'Introduction and company values...', ARRAY['worker'], 1),
  ('Cleaning Standards', 'Our quality expectations...', ARRAY['worker'], 2),
  ('Client Interaction', 'How to communicate professionally...', ARRAY['worker'], 3);
```
