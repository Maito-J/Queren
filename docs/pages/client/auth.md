# Auth Pages

---

# /login - Login

## Purpose
Authenticate existing users.

## Form Fields
| Field | Type | Validation |
|-------|------|------------|
| email | Email | Required, valid email |
| password | Password | Required, min 8 chars |

## UI Elements
- Logo
- Form card (centered)
- "Forgot password?" link
- "Don't have an account? Sign up" link
- Social login buttons (future: Google, Apple)

## States
- Loading: Button shows spinner
- Error: Red message below form
- Success: Redirect to dashboard (by role)

## Supabase
```typescript
const { error } = await supabase.auth.signInWithPassword({
  email, password
});
```

---

# /signup - Sign Up

## Purpose
Create new client account.

## Form Fields
| Field | Type | Validation |
|-------|------|------------|
| full_name | Text | Required, min 2 chars |
| email | Email | Required, valid email |
| phone | Tel | Required, 10 digits |
| password | Password | Required, min 8 chars |
| confirm_password | Password | Must match password |

## UI Elements
- Progress indicator (optional)
- Form card
- Terms & privacy checkbox
- "Already have an account? Log in" link

## Post-Submit
1. Create auth user
2. Create profile record with role='client'
3. Send verification email (Supabase handles)
4. Redirect to /dashboard

---

# /forgot-password - Password Reset

## Purpose
Initiate password reset flow.

## Form Fields
| Field | Type | Validation |
|-------|------|------------|
| email | Email | Required, valid email |

## Flow
1. User enters email
2. Submit → Supabase sends reset link
3. Show confirmation message
4. User clicks email link → /reset-password page

## Supabase
```typescript
const { error } = await supabase.auth.resetPasswordForEmail(email);
```

---

## Acceptance Criteria (All Auth Pages)
- [ ] Form validation works
- [ ] Error messages display clearly
- [ ] Password fields have toggle visibility
- [ ] Successful auth redirects correctly
- [ ] Mobile responsive forms
- [ ] Focus states visible
