# 🎓 NAVEED-E-SAHAR SCHOOL WEBSITE ENHANCEMENT BLUEPRINT
## Complete Lovable Implementation Guide

**Status:** Ready for Implementation  
**Target Timeline:** 3 weeks  
**Tech Stack:** TanStack Start + TypeScript + Tailwind 4 + Radix UI  
**Language Composition:** 94.1% TypeScript, 5.4% CSS, 0.5% JavaScript

---

## PART A: FOUNDATIONAL DESIGN TOKENS & GLOBAL UPDATES

### Color System (Already Optimized)
```
Primary (Forest Green): oklch(0.32 0.055 165) — Trust, Heritage
Accent (Gold): oklch(0.78 0.13 78) — Prestige, Achievement  
Secondary (Terracotta): oklch(0.62 0.14 45) — Warmth, Community
Background (Parchment): oklch(0.985 0.008 85) — Premium, Approachable
Foreground (Dark Slate): oklch(0.22 0.03 160) — Readability
```

### Typography System (Already Configured)
```
Display Font: Fraunces (serif) — Headlines, prestige
Body Font: Inter (sans-serif) — Body copy, clarity

Hierarchy:
- h1: Fraunces 3.5rem, -0.02em letter-spacing
- h2: Fraunces 2.5rem, 1.2 line-height
- h3: Fraunces 1.75rem, 1.3 line-height
- Body: Inter 1rem, 1.6 line-height
- Lead: Inter 1.125rem, 1.7 line-height
- Caption: Inter 0.875rem, 1.5 line-height
```

---

## PART B: CRITICAL PROMPTS FOR LOVABLE IMPLEMENTATION

### PROMPT 1: Hero Section Enhancement
```
Update the homepage hero section with:

HEADLINE & COPY:
- Main: "Where Excellence Meets Character" (Fraunces 3.5rem, forest green)
- Sub: "Naveed-e-Sahar School has shaped young minds in Lalamusa for 25+ years. 
  We combine rigorous academics, character education, and modern thinking to 
  prepare students for university and life beyond." (Inter 1.125rem, dark slate)
- Stats: "✓ 98% university placement | ✓ 25+ years proven | ✓ 4,000+ alumni | 
  ✓ K–12 comprehensive"

VISUAL:
- Background: Aurora mesh effect (radial gradients: gold 35% + green 30% + terracotta 22%)
- Animation: aurora class with 18s infinite shift
- Hero image: 40% opacity campus photo

INTERACTIVE:
- Primary CTA: "Schedule Your Campus Tour" (gold bg, green text, hover darker)
- Secondary CTA: "Download Full Prospectus" (white bg, green border)
- Two buttons side-by-side (desktop), stacked (mobile)

STAT BADGES (below CTA):
- 3 cards: "25+ Years", "98% University", "4000+ Alumni"
- Style: White bg, shadow-elegant, terracotta left border 4px
- Hover: tilt-hover effect

ANIMATION:
- Apply hero-stagger: fade-up with delays 0.05s, 0.2s, 0.35s, 0.5s, 0.65s
- Elements animate in sequence: Headline → Sub → Stats → CTAs → Badges

RESPONSIVE:
- Desktop: Center-aligned, buttons side-by-side, badges 3-column
- Tablet: Center-aligned, badges 2+1 layout
- Mobile: Full-width stacked, buttons full-width

COLORS:
- Gold: oklch(0.78 0.13 78)
- Green: oklch(0.32 0.055 165)
- Background: oklch(0.985 0.008 85)
- Text: oklch(0.22 0.03 160)

FONTS:
- Headlines: Fraunces 700, -0.02em letter-spacing
- Body: Inter 400-600, 1.6 line-height
```

---

### PROMPT 2: Admissions Hub Page (Complete Structure)
```
Create comprehensive Admissions Hub at /admissions with:

PAGE HEADER:
- Title: "Begin Your Journey to Excellence" (Fraunces 2rem, white text)
- Subtitle: "Clear, transparent admissions process designed for student success"
- Background: Forest green gradient, height 240px desktop / 180px mobile

SECTION 1: REQUIREMENTS & CRITERIA
- Intro paragraph on welcoming learners
- Grade-level table (columns: Grade | Age Range | Entry Test | Focus Areas)
  K–2 | 4–8 years | Play-based assessment | Reading readiness, number sense, social skills
  3–5 | 8–11 years | Math & English | Grade-level proficiency, reasoning, creativity
  6–8 | 11–14 years | Math, English, Science | Critical thinking, problem-solving, subject mastery
  9–12 | 14–18 years | Subject-specific exams | Advanced reasoning, academic depth, leadership
- Table: Alternating rows (light parchment/white), forest green headers
- Core competencies list (✓ Academic Readiness, ✓ Character, ✓ Curiosity, ✓ Communication)
- Inclusion statement with X marks: "NOT testing against socioeconomic, learning diversity, innate talent"

SECTION 2: FEES & TUITION
- Intro paragraph on accessibility
- Main tuition table (columns: Grade Level | Annual | Monthly ×12 | Quarterly ×4)
  K–2 | 150,000 PKR | 12,500 | 37,500
  3–5 | 180,000 PKR | 15,000 | 45,000
  6–8 | 220,000 PKR | 18,333 | 55,000
  9–12 | 280,000 PKR | 23,333 | 70,000
- One-time fees: Admission 25,000 PKR | Activity 15,000 PKR
- Scholarships list (gold card backgrounds):
  ✓ Merit: up to 25% off (top 5%)
  ✓ Need-based: apply confidentially
  ✓ Sibling: 10% off 2nd+ child
  ✓ Referral: 5,000 PKR credit per family
- INTERACTIVE TUITION CALCULATOR:
  Input 1: Grade dropdown (K-2, 3-5, 6-8, 9-12)
  Input 2: Payment plan radio (Annual/Monthly/Quarterly)
  Output: Dark green panel with gold text showing annual, monthly, quarterly, total with fees
  Buttons: "Download Fee Schedule PDF" | "Schedule Consultation"

SECTION 3: APPLICATION TIMELINE
- Intro paragraph on January–June cycle
- Vertical timeline, 6 cards (January through June):
  Each card: Month (large gold), Phase Name, 3-4 action bullets, key dates
  Colors: Light green Jan → Medium green Feb-May → Dark green Jun
- Desktop: Left-aligned with connecting line
- Mobile: Full-width stacked cards

SECTION 4: REQUIRED DOCUMENTS
- Intro: "Prepare the following before starting your application"
- REQUIRED (all grades) with checkboxes:
  ☐ Birth Certificate (copy)
  ☐ Current Progress Report (last 2 years)
  ☐ Immunization Record
  ☐ Guardian ID (CNIC/Passport)
  ☐ Passport-sized photo (digital)
  ☐ Guardian contact info
- GRADE 3+ ADDITIONALLY:
  ☐ Previous transcripts
  ☐ Teacher reference (academic)
  ☐ Teacher reference (character)
- GRADE 6+ ADDITIONALLY:
  ☐ Standardized test scores
  ☐ English & Math assessments
- OPTIONAL (lighter styling):
  ☐ Award certificates
  ☐ Student work portfolio
  ☐ Sibling reference
- Buttons: "Download PDF" | "Share via Email"
- Pro tip box: "Submit digitally; no originals needed unless requested"

ACCORDION STYLING:
- Each section: Forest green header, white text, 2px gold left border on expand
- Content: Light parchment background, 24px padding
- Hover: Slightly darker green

BOTTOM CTA:
- Full-width forest green background, centered
- Heading: "Ready to Apply?"
- Description: "Our admissions team is here to help. Reach out with questions."
- Buttons: "Apply Now" (gold) | "Schedule Consultation" (white border)

MOBILE RESPONSIVE:
- Tables: Horizontal scroll on small screens
- Accordion headers: 48px min height, touch-friendly
- Buttons: Full-width, 16px padding
- Typography: Reduced (h1→2.5rem, p→0.95rem)

COLORS:
- Primary: oklch(0.32 0.055 165) — forest green
- Accent: oklch(0.78 0.13 78) — gold
- Background: oklch(0.985 0.008 85) — parchment
- Text: oklch(0.22 0.03 160) — dark slate
- Terracotta: oklch(0.62 0.14 45)

ACCESSIBILITY:
- All form inputs: associated labels, clear focus states (gold ring)
- Accordion: keyboard navigable (Enter/Space to expand)
- All images: alt text
- Color combinations: WCAG AAA contrast
```

---

### PROMPT 3: Campus Gallery Carousel
```
Build interactive Campus Life carousel using Embla Carousel:

CAROUSEL SPECS:
- Display: 1 slide desktop/tablet/mobile (full-width)
- Height: 500px desktop | 350px tablet | 300px mobile
- 6 slides with high-quality campus photos (16:9 aspect)

SLIDE DATA:
1. Classrooms - "Modern Learning Spaces"
2. Science Lab - "Hands-On Discovery"
3. Sports Facilities - "Athletic Excellence"
4. Arts & Performance - "Creative Expression"
5. Student Commons - "Community Hub"
6. Cafeteria - "Nourishing Body & Mind"

SLIDE LAYOUT:
- Background: Full-screen image (16:9)
- Overlay: Dark gradient 20% opacity (left-to-right) for text readability
- Title: Large bold white text (Fraunces 2.5rem)
- Description: 1-2 white sentences (Inter 1rem)
- Category badge: Top-left, gold background, green text, uppercase small

NAVIGATION:
- Arrow buttons: White bg, green chevrons, centered vertically on left/right
  - Hover: Background changes to gold
  - Mobile: Hidden (dots only)
- Dot indicators: Below carousel, 8px circles
  - Active: Gold filled
  - Inactive: Light gray outline
  - Spacing: 8px between
  - Mobile: Larger 10px dots for easy tapping

MOBILE:
- Swipe-enabled (left/right to navigate)
- Full-width image + padding 1rem
- Arrows hidden

INTERACTIONS:
- Hover on slide: Text + badge scale 1.02x, shadow increases
- Dot click: Smooth scroll 0.6s ease-in-out
- Arrow click: Fade-out/fade-in 0.4s
- Keyboard: Left/Right arrow keys navigate, Enter on dot

ANIMATIONS:
- Slide entrance: Fade-in + scale 0.85→1.0 (0.5s)
- Badge entrance: Slide-in from top-left (0.3s delay)
- Text entrance: Fade-in (0.5s delay)

CTA BELOW CAROUSEL:
- Two buttons side-by-side (stacked mobile):
  Button 1: "Schedule Virtual Tour" (gold bg, green text)
  Button 2: "360° Interactive Tour" (white bg, green border)
- Spacing: 16px between buttons

DESIGN TOKENS:
- Gold badge: oklch(0.78 0.13 78) bg | oklch(0.22 0.03 160) text
- Title: White, text-shadow 0 2px 8px rgba(0,0,0,0.3)
- Category font: Inter 700, 0.75rem, uppercase
- Transition: All ease-in-out 0.4s

ACCESSIBILITY:
- Role="region", aria-label="Campus Gallery"
- Dot buttons with aria-labels
- Images with alt text
- Keyboard accessible (Tab, arrows, Enter)
- Reduced motion: Disable animations, instant changes
```

---

### PROMPT 4: Prospectus Lead-Gen Form
```
Create high-converting prospectus download form:

LAYOUT:
- Desktop (1200px+): Two-column (form left, benefits right)
- Tablet (768–1199px): Two-column, narrower
- Mobile (< 768px): Single column, full-width

LEFT COLUMN (Form):
- Container: Light parchment bg, 1px gray border, 8px radius, 32px padding (desktop) / 24px (mobile)

HEADLINE & INTRO:
- Headline: "Download Your Free Prospectus" (Fraunces 2rem, forest green)
- Subheading: "Learn about our curriculum, admissions, and life at NSS" 
  (Inter 1rem, dark slate, 1.6 line-height)

FORM FIELDS (all required unless marked optional):

Field 1: Full Name
- Type: text input
- Label: "Your Full Name" (Inter 0.875rem, forest green, required asterisk)
- Placeholder: "e.g., Ali Khan"
- Validation: Required, min 2 characters

Field 2: Email Address
- Type: email input
- Label: "Email Address" (required)
- Placeholder: "your.email@example.com"
- Help text: "We'll send the prospectus here" (small gray)
- Validation: Required, valid email format

Field 3: Phone Number
- Type: tel input
- Label: "Phone Number (WhatsApp preferred)" (required)
- Placeholder: "+92 300 1234567"
- Help text: "International format preferred" (small gray)
- Validation: Required, valid phone format

Field 4: Grade Interest
- Type: select dropdown
- Label: "Which grade interests you?" (required)
- Options: [placeholder] "Select grade level", "K–2", "3–5", "6–8", "9–12", "Not sure yet"
- Validation: Required

Field 5: Student's Name (OPTIONAL)
- Type: text input
- Label: "Student's Name" (gray text, no asterisk, "(optional)" label)
- Placeholder: "e.g., Aisha Khan"

Field 6: Message (OPTIONAL)
- Type: textarea
- Label: "Any questions?" (gray text, "(optional)")
- Placeholder: "Tell us about your child, learning style, or any questions..."
- Rows: 3 desktop, 2 mobile
- Max length: 500 characters
- Character counter: "50/500" (small gray text, bottom-right)

Field 7: Consent Checkbox (REQUIRED)
- Label: "May we contact you with more information?" (clickable)
- Error if unchecked: "Please confirm so we can share the prospectus"

Field 8: Newsletter Checkbox (OPTIONAL)
- Label: "Add me to the monthly newsletter" (clickable)
- Default: Unchecked
- Help text: "(Purely informational, unsubscribe anytime)" (small gray)

INPUT STYLING:
- All inputs: 1px light gray border, 4px radius, 12px 16px padding
- Font: Inter 1rem, dark slate
- Background: White
- Focus: 2px solid gold border, box-shadow 0 0 0 3px rgba(gold, 0.1)
- Error: 2px solid #dc2626 (red), help text red
- Disabled: Light gray background, opacity 0.5, cursor not-allowed

SUBMIT BUTTON:
- Text: "Get Prospectus" (Inter 700)
- Background: Gold (oklch(0.78 0.13 78))
- Text color: Forest green (oklch(0.32 0.055 165))
- Padding: 14px 32px
- Radius: 6px
- Font size: 1rem
- Width: Full width
- Hover: Darker gold background
- Active: Scale 0.98
- Disabled: opacity 0.6, cursor not-allowed
- Loading: Spinner icon, text "Processing...", button disabled

FOOTER TEXT (below button):
- "We respect your privacy. No spam. Ever." (small gray, center, Inter 0.75rem)

RIGHT COLUMN (Desktop only - Benefits Panel):
- Background: Light gold tint (oklch(0.95 0.05 78))
- Border: 2px gold left border
- Padding: 24px
- Radius: 0 8px 8px 0

BENEFITS HEADING:
- "What's Inside:" (Fraunces 1.5rem, forest green, -0.02em letter-spacing)

BENEFITS LIST:
- Icon + text for each:
  ✓ Complete curriculum overview
  ✓ Meet the teachers
  ✓ Campus facilities & student life
  ✓ Admissions timeline & requirements
  ✓ FAQ & contact info
- Icons: Checkmarks (gold, 20px)
- Text: Inter 1rem, dark slate, 1.6 line-height
- Spacing: 12px between items

FORM BEHAVIOR:

CLIENT-SIDE VALIDATION:
- On blur: Check required fields, show error
- Email: Validate regex, show error if invalid
- Phone: Accept international + local formats
- Submit button: Disabled until all required fields valid
- Invalid submission: Show error toast + highlight field (red border)

SUBMIT WORKFLOW:
1. Click "Get Prospectus"
2. Run client-side validation
3. If errors: Show error toast + highlight fields, exit
4. If valid: Show spinner, disable form, POST to /api/prospectus-request
5. Success (2–3 sec): Replace form with:
   - Success icon (large gold checkmark)
   - Heading: "Success! Check Your Email"
   - Message: "Prospectus sent to [email]. Check email (including spam) within 2 min."
   - Button: "Download Now" (if PDF local)
   - Secondary: "Back to Site"
   - Confetti animation (optional)
6. Error: Show error toast "Something went wrong. Please try again or contact us."
   Re-enable form, preserve filled data

MOBILE RESPONSIVE:
- Right column: Hidden on mobile
- Benefits shown in footer after form
- Form width: Full with 20px padding
- Input padding: 14px 16px (larger touch targets)
- Buttons: Full width, 48px height minimum
- Spacing between fields: 20px (larger)
- Success state: Center-aligned, larger text

ACCESSIBILITY:
- Form wrapper: <form name="prospectus-form">
- Each input: <label> with htmlFor matching input id
- Required markers: Red asterisk (*) with aria-label="required"
- Error messages: role="alert", aria-describedby linked to input
- Success message: role="status", announced to screen readers
- Keyboard navigation: Tab through fields in logical order
- Color not sole indicator: Combine color + icon
- Submit button: 44px height minimum on mobile

BACKEND INTEGRATION:
- POST /api/prospectus-request
- Body: { fullName, email, phone, gradeInterest, studentName, message, consentToContact, consentToNewsletter }
- Response: { success: true, downloadUrl, message }
- Actions:
  * Send confirmation email to user with PDF link
  * Send lead notification to admissions@naveedesahar.online
  * Store lead in CRM (Mailchimp/HubSpot if available)
  * Subscribe to newsletter if opted in
```

---

### PROMPT 5: Event Calendar Component
```
Create interactive event calendar component:

CALENDAR SPECS:
- Primary view: Month view (calendar grid)
- Navigation: Next/prev month arrows
- Current day: Gold ring highlight
- Event dots: Color-coded per type

MONTH VIEW DISPLAY:
- Month header: Forest green background, white text, current month name
- Calendar grid: 7 columns (Sun–Sat), weeks rows
- Day cells: Light parchment background
- Current day: Gold ring border
- Event dots per day: Small circles, color-coded
  * Blue: Academic events
  * Gold: Sports events
  * Orange: Arts events
  * Gray: Holidays

INTERACTIVITY:
- Click day with events: Show event list for that day in modal
- Click event in modal: Full details (title, date/time, description, location, RSVP button)
- Modal button: "Add to Calendar" → Opens Google Calendar / iCal / Outlook
- Filter toggles (top): [Academic] [Sports] [Arts] [Holidays] [All]
  - Filters hide/show corresponding event dots

MOBILE BEHAVIOR:
- Month view with compact event indicators
- Below calendar: "Upcoming Events" list (next 7 days, agenda style)
- Agenda items: Date, title, [→] to details

MODAL DESIGN:
- White background, shadow-elegant, close button (X)
- Title (Fraunces 1.5rem, forest green)
- Date/time, description, location, RSVP button
- "Add to Calendar" button below

DESIGN:
- Month header: Forest green background, gold current month accent
- Days: Light parchment
- Event dots: Small circles, color-coded (accent, primary, terracotta, muted)
- Modal: White bg, shadow-elegant
- Buttons: CTA in gold

SAMPLE EVENTS DATA:
{
  "events": [
    {
      "id": "exam-2024-04-15",
      "title": "Class 9-10 Board Exams Begin",
      "date": "2024-04-15",
      "type": "academic",
      "color": "primary",
      "description": "Board examinations commence. Best wishes to all students!",
      "url": "/news/board-exams-2024"
    },
    {
      "id": "sports-2024-03-22",
      "title": "Annual Sports Day",
      "date": "2024-03-22",
      "type": "sports",
      "description": "K-12 sports competition. Families welcome. Doors open 8:00 AM."
    },
    {
      "id": "holiday-2024-04-10",
      "title": "Eid al-Fitr Holiday",
      "date": "2024-04-10",
      "type": "holiday",
      "description": "School closed for Eid celebration. Reopen on April 11."
    }
  ]
}

ACCESSIBILITY:
- Keyboard navigation (Tab through days)
- Screen reader labels for each day/event
- Alt text on all images
- Sufficiently high color contrast
```

---

### PROMPT 6: Tuition Calculator Component
```
Create interactive tuition calculator:

INPUTS:
- Grade Level dropdown (default: 6–8)
  Options: K–2, 3–5, 6–8, 9–12
- Payment Plan radio buttons
  Options: Annual | Monthly (×12) | Quarterly (×4)
- Toggle: "Include one-time fees?" (checkbox)
  Admission: 25,000 PKR | Activity: 15,000 PKR
- Toggle: "Interested in scholarship?" (checkbox)
  Shows 25% off simulation

CALCULATION DATA:
{
  "tuition": {
    "K-2": { annual: 150000 },
    "3-5": { annual: 180000 },
    "6-8": { annual: 220000 },
    "9-12": { annual: 280000 }
  },
  "fees": {
    "admission": 25000,
    "activity": 15000
  },
  "discounts": {
    "merit": 0.25,
    "upfrontPayment": 0.02
  }
}

OUTPUTS (Real-time calculation):
- Annual tuition amount (large, bold, gold text)
- Per-installment amount (subheading, smaller)
- Total with fees (if toggled)
- Scholarship impact (if toggled)
- Money saved vs. annual (if upfront selected)

RESULTS PANEL:
- Layout: Left column inputs, right column results (stacked on mobile)
- Results panel background: Dark forest green, gold text, white subtext
- Format all amounts: "PKR 150,000" (proper formatting, not 150000)
- Animate number changes: Fade-in, slight scale

BUTTONS:
- "Download Fee Schedule PDF" (below calc)
- "Schedule Consultation" (opens contact form)

DESIGN:
- Inputs: Light parchment bg, forest green borders on focus
- Results: Dark forest green bg, gold text
- Buttons: Gold with forest green text on hover
- Mobile: Stack vertically, full-width inputs

BEHAVIORS:
- Recalculate instantly on any input change
- All amounts in PKR with proper formatting
- Mobile: enlarged inputs, large tap targets (44px)
- Show all discount breakdowns when applicable

COLORS:
- Inputs: parchment bg (oklch(0.985 0.008 85)), green borders on focus
- Results panel: dark forest green (oklch(0.32 0.055 165))
- Text in panel: gold (oklch(0.78 0.13 78))
- Buttons: Gold bg with green text
```

---

## PART C: SEO & META TAGS

### Meta Tags Template
```html
<!-- Update src/routes/__root.tsx with: -->

<!-- Meta tags (update OG image URL to your domain) -->
<meta name="description" content="K–12 private school in Lalamusa, Pakistan. 
25+ years of academic excellence, character education, and 98% university placement rate. 
Schedule a campus tour today." />

<meta property="og:type" content="website" />
<meta property="og:site_name" content="Naveed-e-Sahar School" />
<meta property="og:title" content="Naveed-e-Sahar School · Where Excellence Meets Character" />
<meta property="og:description" content="Empowering the next generation with knowledge, 
character, and 25+ years of trusted education in Lalamusa." />
<meta property="og:image" content="https://naveedesahar.online/og-home.jpg" />
<meta property="og:image:width" content="1600" />
<meta property="og:image:height" content="1067" />
<meta property="og:url" content="https://naveedesahar.online" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Naveed-e-Sahar School · Lalamusa" />
<meta name="twitter:description" content="K–12 education with 25+ years of proven excellence." />
<meta name="twitter:image" content="https://naveedesahar.online/og-home.jpg" />

<!-- JSON-LD Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Naveed-e-Sahar School",
  "url": "https://naveedesahar.online",
  "logo": "https://naveedesahar.online/logo.png",
  "description": "Leading K–12 private school in Lalamusa, Pakistan with 25+ years of academic excellence.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lalamusa",
    "addressRegion": "Punjab",
    "addressCountry": "PK"
  },
  "foundingDate": "1999",
  "potentialAction": {
    "@type": "ReserveAction",
    "target": "https://naveedesahar.online/admissions",
    "name": "Schedule Campus Tour"
  }
}
</script>
```

### SEO Page Titles & Descriptions
```
HOME: "Naveed-e-Sahar School · Where Excellence Meets Character in Lalamusa" 
  (60 chars)
  "K–12 private school in Lalamusa, Pakistan. 25+ years of academic excellence, 
  character education, and 98% university placement rate." (158 chars)

ADMISSIONS: "Admissions · Apply to Naveed-e-Sahar School | Lalamusa"
  "Apply to NSS. Learn about requirements, tuition (150k–280k PKR), timeline, 
  and downloadable prospectus." (118 chars)

ACADEMICS: "Curriculum & Academic Programs · Naveed-e-Sahar School"
  "Explore our K–12 curriculum emphasizing STEM, Arts, Languages, and character 
  development." (105 chars)

CAMPUS: "Campus Life & Facilities · Naveed-e-Sahar School"
  "See our modern classrooms, science labs, sports facilities, arts spaces, 
  and student commons." (106 chars)

NEWS: "School News, Events & Student Achievements | Naveed-e-Sahar"
  "Latest updates on school events, student achievements, sports highlights, 
  and campus news." (110 chars)
```

---

## PART D: INFORMATION ARCHITECTURE & NAVIGATION

### Sitemap Structure
```
/                                   Home
/about                             About School
  /about/mission
  /about/staff
/academics                         Academics
  /academics/curriculum
  /academics/teachers
/admissions                        Admissions Hub
  /admissions/apply
  /admissions/faq
/campus                            Campus & Facilities
/news                              News & Blog
  /news/[slug]                     Individual Article
/student-life                      Student Life
  /student-life/clubs
  /student-life/sports
  /student-life/achievements
/events                            Event Calendar
/parent-resources                  Parent Resources
/contact                           Contact
/privacy-policy                    Privacy Policy
/terms-of-service                  Terms of Service
```

### Primary Navigation
```
Home | About | Academics | Admissions | Campus | News | Student Life

Dropdowns:
- Academics: Curriculum, Teachers, Schedule
- Admissions: Apply Now, FAQ, Contact
- Utility: Parent Portal, Donate
```

---

## PART E: IMPLEMENTATION TIMELINE

### Week 1: Foundation & Hero
- [ ] Update global design tokens in styles.css
- [ ] Implement Hero section with aurora background & animations
- [ ] Create Admissions Hub page structure (accordion sections)
- [ ] Add meta tags & schema markup to __root.tsx
- [ ] Test mobile responsiveness

### Week 2: Features & Content
- [ ] Build campus gallery carousel (Embla)
- [ ] Create tuition calculator component
- [ ] Build prospectus lead-gen form
- [ ] Implement event calendar widget
- [ ] Create news/achievements feed

### Week 3: Optimization & Launch
- [ ] Performance audit (Lighthouse >90)
- [ ] SEO audit & fixes
- [ ] Accessibility audit (WCAG AAA)
- [ ] Mobile responsiveness polish
- [ ] Cross-browser testing
- [ ] Deploy to production

---

## PART F: PERFORMANCE & MONITORING

### Lighthouse Targets
```
Performance: >90
  ✓ LCP < 2.5s, FID < 100ms, CLS < 0.1
  ✓ Images lazy-loaded (already done)
  ✓ Font optimized (display:swap)
  ✓ CSS/JS minified (Vite handles)

Accessibility: >90
  ✓ All images have alt text
  ✓ Color contrast WCAG AAA
  ✓ Keyboard navigation
  ✓ Form labels linked
  ✓ Screen reader tested

SEO: >90
  ✓ Meta tags & schema markup
  ✓ Robots.txt & sitemap.xml
  ✓ Mobile responsive
  ✓ Canonical URLs
  ✓ No render-blocking resources
```

### Key Metrics to Monitor
```
- Weekly Lighthouse audits
- Core Web Vitals (LCP, FID, CLS)
- Conversion rate (tour bookings, prospectus downloads)
- Form abandonment rate
- Mobile vs. desktop traffic
- Bounce rate by page
```

---

## PART G: CONTENT VOICE & MESSAGING

### Tone
```
✓ Authoritative + Warm
✓ Specific over generic (use numbers, names, dates)
✓ Student-centric (focus on "your child's potential")
✓ Action-oriented (every section ends with next step)
✓ Inclusive (welcome all learners, backgrounds, abilities)
```

### Key Messages
```
1. "25+ Years Proven Excellence" — Use in hero, admissions, about
2. "98% University Placement" — Use in academics, hero, testimonials
3. "Character + Academics" — Use in mission, values, why us sections
4. "Modern, Supportive" — Use in campus, resources, testimonials
5. "Diverse, Inclusive" — Use in community, admissions, news
```

---

## PART H: QUICK START CHECKLIST

- [ ] Copy Prompts 1–6 into Lovable interface (one per session)
- [ ] Update meta tags in __root.tsx (Part C)
- [ ] Create pages: /admissions, /campus, /news, /student-life
- [ ] Add navigation links to header & footer
- [ ] Build lead-gen form backend (email integration)
- [ ] Upload campus photos & create assets
- [ ] Test all forms on desktop & mobile
- [ ] Run Lighthouse audit
- [ ] Deploy to production
- [ ] Submit sitemap to Google Search Console & Bing Webmaster

---

**End of Implementation Guide**

Last Updated: 2024-07-17 | Status: Ready for Lovable Implementation
