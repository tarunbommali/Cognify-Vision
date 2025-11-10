# Cognify Design Guidelines

## Design Approach
**System-Based with Marketing Creative Freedom**: Material Design 3 principles for the application core, with enhanced creative latitude for the landing page. This balances professional credibility with student-friendly approachability.

**Inspiration References**: Linear (clean dashboards), Notion (information hierarchy), Coursera (educational credibility), Stripe (trust and clarity)

---

## Typography System

**Font Families** (via Google Fonts):
- **Primary**: Inter (400, 500, 600, 700) - UI, body text, data
- **Display**: Outfit (600, 700) - Landing page headlines, section titles

**Type Scale**:
- Hero/Display: 3.5rem (56px) desktop / 2.5rem mobile, weight 700
- H1: 2.5rem (40px) / 2rem mobile, weight 600
- H2: 2rem (32px) / 1.75rem mobile, weight 600
- H3: 1.5rem (24px), weight 600
- H4: 1.25rem (20px), weight 600
- Body Large: 1.125rem (18px), weight 400
- Body: 1rem (16px), weight 400
- Small/Caption: 0.875rem (14px), weight 400

---

## Layout & Spacing System

**Tailwind Spacing Units**: Consistently use 2, 4, 6, 8, 12, 16, 20, 24, 32 (p-2, m-4, gap-6, py-8, etc.)

**Common Patterns**:
- Component padding: p-6 (cards), p-8 (modals)
- Section spacing: py-16 desktop / py-12 mobile
- Element gaps: gap-4 (cards), gap-6 (sections), gap-8 (major divisions)
- Container max-widths: max-w-7xl (standard), max-w-6xl (content), max-w-4xl (forms)

**Grid Systems**:
- Landing features: 3-column on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Domain cards: 3-column with gap-6
- Dashboard layout: Sidebar (w-64) + main content (flex-1)
- Admin analytics: 4-column metrics grid (grid-cols-1 sm:grid-cols-2 lg:grid-cols-4)

---

## Component Library

### Navigation
- **Header**: Full-width with max-w-7xl container, logo left, nav center, auth/profile right, h-16, sticky top-0, backdrop blur
- **Sidebar** (Admin/Dashboard): Fixed w-64, collapsible to icons on mobile, grouped menu items with dividers

### Cards & Content
- **Domain/Internship Cards**: Elevated surface (shadow-md), rounded-xl, p-6, hover lift effect
- **Stats Cards**: Minimal border, rounded-lg, p-6, icon + metric + label vertical layout
- **Progress Cards**: Include visual progress bars (h-2 rounded-full), percentage display, task counts

### Forms & Inputs
- **Input Fields**: h-12, rounded-lg, border consistent, focus ring, clear labels above fields
- **Buttons Primary**: h-12, px-8, rounded-lg, medium weight text
- **Buttons Secondary**: Same height, outlined variant
- **File Upload**: Drag-drop zone with dashed border, min-h-32, upload icon + instructions

### Data Display
- **Tables**: Striped rows, sticky header, compact spacing (py-3), sortable columns
- **Curriculum Display**: Accordion pattern, week-by-week expansion, nested task lists
- **Timeline**: Vertical with connector lines, milestone markers, date stamps

### Modals & Overlays
- **Modals**: max-w-2xl, rounded-2xl, p-8, centered with backdrop
- **Notifications**: Fixed top-right, toast pattern, slide-in animation

---

## Page-Specific Layouts

### Landing Page
- **Hero**: Full viewport (min-h-screen), 2-column split (60% content / 40% hero image), large headline, subtitle, dual CTA (primary + secondary)
- **Features Section**: 3-column grid, icon + title + description, py-20
- **Domain Preview**: Horizontal scroll cards or 3-column featured domains
- **Stats Banner**: 4-column metrics (students enrolled, domains, success rate, companies)
- **CTA Section**: Full-width accent background, centered content, bold headline + action button
- **Footer**: 4-column (About, Domains, Resources, Legal), newsletter signup, social links

### Domain Listing
- **Filter Bar**: Sticky top (below header), horizontal tags, search input, sort dropdown
- **Grid**: 3-column responsive, each card shows domain icon, title, internship count, "Explore" CTA

### Internship Details
- **Header Section**: Breadcrumb navigation, title, instructor info (avatar + name), duration badge, enrollment status
- **Content Tabs**: Curriculum | Batches | Resources (horizontal tab bar)
- **Curriculum Accordion**: Weekly modules, expandable task lists, checkmarks for completed items
- **Sticky CTA**: "Enroll Now" button fixed bottom on mobile, sidebar card on desktop

### User Dashboard
- **Overview Cards Row**: Active internship, progress percentage, pending tasks, achievements (4-column)
- **Main Content**: 2-column (70% task feed / 30% upcoming deadlines sidebar)
- **Task Cards**: Title, due date, status badge, quick action buttons

### Admin Dashboard
- **Analytics Grid**: 4 metric cards (total users, active internships, pending submissions, completion rate)
- **Quick Actions**: Create internship, manage domains, view submissions (icon buttons)
- **Data Tables**: Sortable, filterable, with bulk actions, pagination
- **Creation Wizard**: Step indicator, form sections, save draft capability

### Profile
- **Header Card**: Avatar upload area, name/email, role badge, edit button
- **Section Tabs**: Overview | Domains | Achievements | Certificates
- **Achievement Grid**: 4-column card grid with icons, unlock dates, descriptions
- **Certificate List**: Cards with download buttons, issue dates, verification codes

---

## Images

**Hero Image**: Vibrant, diverse students collaborating on laptops, bright modern workspace, professional photography style, positioned right side of hero split layout

**Domain Icons**: Consistent illustrative icon set (coding symbols, cloud icons, AI graphics) - use Font Awesome or Material Icons

**Instructor Avatars**: Circular, consistent sizing (w-12 h-12 standard, w-20 h-20 detail pages)

**Empty States**: Friendly illustrations for no tasks, no submissions, no domains selected

**Background Patterns**: Subtle gradient mesh or dot grid patterns for section backgrounds on landing page

---

## Visual Hierarchy Principles

1. **Information Density**: Dashboard and admin views prioritize data density; landing/marketing pages use generous whitespace
2. **Elevation**: Cards use consistent shadow hierarchy (shadow-sm, shadow-md, shadow-lg) to establish depth
3. **Status Indication**: Clear visual states (pending/amber, active/blue, completed/green, overdue/red) using badges and indicators
4. **Responsive Behavior**: Mobile-first collapsing: sidebars → bottom nav, multi-column → single stack, tables → cards
5. **Focus on Action**: Primary CTAs stand out with high contrast, secondary actions are subtle but accessible