# TALWEEN ADVERTISING

## MASTER DESIGN + PRODUCT DIRECTION FOR CLAUDE

You are designing and architecting a premium bilingual signage company's complete digital platform.

Company:

**Talween Advertising — Dubai, UAE**

This is NOT a generic SaaS dashboard and NOT an Apple clone.

The visual foundation is provided in the attached:

**Design.md**

You MUST treat `Design.md` as the primary design-system source of truth.

The product consists of:

1. Public bilingual website
2. Admin/business management platform
3. Shared design system
4. Light theme
5. Dark theme
6. Midnight Blue theme
7. English LTR
8. Arabic RTL
9. CMS
10. SEO management
11. Website analytics
12. Enquiry management
13. Customer management
14. Quotation management
15. Invoice management
16. Payment tracking
17. PDF generation
18. Role-based access control
19. Media library
20. Audit logs

---

# 01. MOST IMPORTANT DESIGN PRINCIPLE

Do NOT blindly reproduce Apple's website.

Use the design philosophy from `Design.md`, but translate it into the signage industry.

Apple's "product" becomes Talween's:

**REAL SIGNAGE + REAL PROJECT PHOTOGRAPHY**

The signage must be the visual hero.

The interface must recede.

The website should feel:

* Premium
* Architectural
* Modern
* Quiet
* Trustworthy
* High-end
* Photography-led
* Spacious
* Confident

Avoid:

* Generic SaaS appearance
* Excessive gradients
* Excessive cards
* Excessive shadows
* Excessive rounded containers
* Dashboard-style public website
* Huge decorative illustrations
* Random colors
* Random typography
* Visual clutter
* Artificial stock imagery when real project photography is available

---

# 02. DESIGN.MD IS THE SOURCE OF TRUTH

Before designing anything, thoroughly inspect `Design.md`.

Do not invent another design system.

Do not replace its:

* typography
* spacing
* colors
* radius grammar
* button grammar
* navigation philosophy
* elevation philosophy
* responsive behavior

when an equivalent token/component already exists.

Use the existing token/reference architecture.

Never scatter raw values throughout the implementation.

Prefer:

`{colors.primary}`

over:

`#0066cc`

Prefer:

`{spacing.lg}`

over:

`24px`

Prefer existing component definitions over creating visually similar duplicates.

If a new component is genuinely required, extend the system deliberately and document the new token/component.

---

# 03. TALWEEN VISUAL TRANSLATION

The original design system is photography-first.

For Talween:

PRODUCT = SIGNAGE PROJECT

Therefore the public website should use:

* real building signage
* shop signage
* illuminated signage
* LED signage
* 3D letters
* acrylic signage
* wayfinding
* vehicle branding
* corporate signage
* installation photography

Large imagery should often occupy the majority of the viewport.

Text should be short.

Do not turn every section into a marketing paragraph.

---

# 04. PUBLIC WEBSITE

Create a complete multilingual website.

Primary language:

English

Secondary:

Arabic

English:

LTR

Arabic:

RTL

Arabic must not simply be translated text placed into the English layout.

The entire interface must correctly switch direction.

This includes:

* navigation
* breadcrumbs
* grids
* forms
* cards
* tables
* icons where directional
* spacing
* alignment
* drawers
* modals
* admin screens
* pagination
* filters
* buttons
* mobile navigation

Use one component system.

Do NOT create a separate Arabic application.

---

# 05. PUBLIC WEBSITE SITEMAP

Create:

Home

About

Services

Services detail pages:

* Indoor Signage
* Outdoor Signage
* LED Signage
* 3D Letters
* Acrylic Signage
* Shop Signage
* Building Signage
* Wayfinding
* Vehicle Branding
* Printing
* Corporate Branding
* Installation
* Maintenance

Projects

Blog

Contact

Get a Quote

---

# 06. HOMEPAGE STRUCTURE

The homepage should NOT look like a conventional corporate website.

Recommended structure:

## Hero

Small eyebrow:

PREMIUM SIGNAGE SOLUTIONS

Large headline:

Your Brand
Deserves To Be Seen

Short supporting statement.

Actions:

[ Get a Quote ]

[ Explore Services ]

Large real Talween project photograph.

---

## Services

Present the core services using restrained utility cards.

Do not make this a dense icon grid.

Show approximately 5–6 important services initially, with:

View All Services

---

## Featured Project

Large immersive project.

Use:

Project name

Location

Service type

One short description

View Project

---

## Dark Project Section

Use the existing light/dark surface rhythm.

Large project photography.

Minimal copy.

---

## Capabilities

Show Talween's manufacturing / installation / service capabilities.

Keep the section visually quiet.

---

## Projects

Large editorial project grid.

Photography should dominate.

---

## About

Minimal corporate credibility section.

Use numbers only where actual company data exists.

Never invent statistics.

---

## Final CTA

Large quiet section:

Let's make your
brand visible.

[ Get a Quote ]

[ WhatsApp ]

[ Call ]

---

## Footer

Services

Company

Projects

Resources

Contact

Social

Language

Legal

---

# 07. SERVICE PAGE TEMPLATE

Every service should have an SEO-ready page.

Structure:

Hero

↓
What is this service?

↓
Talween solution

↓
Materials / options

↓
Process

↓
Project examples

↓
Industries / applications

↓
FAQ

↓
Get a Quote CTA

↓
Related Services

Do not place a giant enquiry form directly inside every service page.

The consistent CTA should open the shared enquiry experience.

---

# 08. GET A QUOTE

Use ONE PAGE.

Do not use a multi-step wizard.

The user specifically wants a simple website enquiry because WhatsApp is also available.

The form should collect:

Service

Project name

Company

Project description

Project location

UAE Emirates:

* Dubai
* Abu Dhabi
* Sharjah
* Ajman
* Umm Al Quwain
* Ras Al Khaimah
* Fujairah

Also:

Outside UAE

Requirements

Dimensions

Quantity

Material

Installation required

Maintenance required

File uploads

* Logo
* Reference images
* Building photos
* Drawings
* PDF
* CAD where supported
* Other files

Contact name

Company

Email

Phone

Preferred contact method

Submit Enquiry

Provide alternative contact actions:

WhatsApp

Call

Website enquiry

The Get a Quote CTA should be available in:

* Header
* Hero
* Relevant service sections
* Project sections
* Final CTA
* Footer

---

# 09. PROJECTS

Talween has complete project information and photography.

Treat Projects as a major content type.

Project model should support:

Project name

Client

Location

Industry

Services

Description

Cover image

Gallery

Installation images

Before/after

Video

Completion date

Related services

SEO metadata

Arabic content

English content

V1 does NOT require portfolio filtering.

Keep the experience editorial.

---

# 10. ADMIN PLATFORM

The Admin Panel is NOT a decorative copy of the public website.

It is an operational business application.

Primary navigation:

DASHBOARD

WEBSITE

* Pages
* Services
* Projects
* Blog
* Media Library

LEADS & SALES

* Enquiries
* Customers
* Quotes
* Invoices
* Payments

MARKETING

* SEO
* Analytics

ADMINISTRATION

* Users
* Roles & Permissions
* Settings
* Audit Logs

---

# 11. ADMIN DASHBOARD

The dashboard should immediately answer:

What is happening with the business?

Top metrics:

Visitors

Enquiries

Quotes

Revenue

Outstanding amount

Then:

Website Analytics

Visitors

Page Views

Traffic Sources

Top Pages

Top Services

Then:

Sales Pipeline

New

Contacted

Quotation

Negotiation

Approved

Completed

Then:

Recent Enquiries

Then:

Recent Admin Activity

Examples:

New enquiry

Quote created

Quote sent

Invoice generated

Payment received

Project published

SEO updated

Do not fill the dashboard with meaningless decorative charts.

Every visualization must answer a business question.

---

# 12. ENQUIRY PIPELINE

Website enquiry enters Admin.

Flow:

ENQUIRY

↓

NEW

↓

CONTACTED

↓

REQUIREMENT COLLECTED

↓

QUOTATION

↓

QUOTATION SENT

↓

NEGOTIATION

↓

APPROVED

↓

INVOICE

↓

PAYMENT

↓

COMPLETED

The Admin should make this workflow obvious.

---

# 13. CUSTOMERS

Customer record:

Contact information

Company

Projects

Enquiries

Quotes

Invoices

Payments

Documents

Communication history

Activity timeline

---

# 14. QUOTATIONS

Admin must be able to create quotations.

Quotation includes:

Customer

Project

Services/products

Quantity

Price

Tax

Discount

Subtotal

Total

Terms

Notes

Validity

Status

Generate PDF

Send/share PDF

Quotation status should be visually clear.

---

# 15. INVOICES

Invoice includes:

Invoice number

Customer

Project

Items

Quantity

Price

Tax

Discount

Total

Payment status

Due date

Notes

Generate PDF

---

# 16. PAYMENTS

Track:

Invoice amount

Advance payment

Additional payments

Remaining amount

Payment date

Payment method

Reference

Payment status

Generate payment receipt PDF.

Flow:

Quotation

→ Approval

→ Invoice

→ Payment

→ Receipt

---

# 17. PDF DESIGN

PDF documents must use the same visual language.

Create:

Quotation PDF

Invoice PDF

Payment Receipt PDF

They should look professional enough to send directly to a Dubai corporate client.

Do not make them look like generic browser printouts.

---

# 18. ROLES

Create:

## Super Admin

Full access.

## Admin

Website + enquiries + customers + quotes + invoices.

## Sales

Enquiries

Customers

Quotes

Projects where appropriate

## SEO Manager

SEO

Pages

Blog

Media / alt text

Analytics

Search Console where integrated

## Finance

Customers where required

Quotes

Invoices

Payments

Financial reports

---

# 19. RBAC

Use granular permissions.

Examples:

View

Create

Edit

Delete

Publish

Export

Generate PDF

Manage SEO

Manage users

View analytics

Never rely only on hiding a menu item.

Authorization must exist at the actual action/data level.

---

# 20. SEO

SEO Manager must have a dedicated SEO workspace.

Support:

Meta title

Meta description

URL slug

Canonical URL

OG title

OG description

OG image

Schema

Robots

Sitemap

Image alt text

Redirects

Headings

Page content

Blog

English SEO

Arabic SEO

SEO preview.

The SEO interface should make it obvious which language is being edited.

---

# 21. CMS

Admin must be able to update website content without developers changing source code.

Use structured content models.

Pages

Services

Projects

Blog

Global settings

Navigation

Footer

SEO

Media

Do not make the CMS one giant unstructured rich-text field.

Use reusable content blocks.

---

# 22. ANALYTICS

Dashboard should support:

Visitors

Sessions

Page views

Traffic sources

Top pages

Top services

Countries

Cities where available

Devices

Search queries where available

Date range

Today

Yesterday

7 days

30 days

Custom

Prefer integration with established analytics/search platforms rather than inventing a fake analytics system.

Design the UI so the data source can be connected cleanly.

---

# 23. THEMES

The application has three themes:

LIGHT

DARK

MIDNIGHT BLUE

These are token modes.

Do NOT create three separate CSS systems.

Use:

Design Tokens

↓

Theme Variables

↓

Shared Components

↓

Public Website + Admin

The component must remain structurally identical between themes.

Only appropriate token values change.

---

# 24. LIGHT THEME

Use the existing Design.md foundation:

White

Parchment

Near-black text

Action Blue

Hairlines

Minimal elevation

Large photographic surfaces

---

# 25. DARK THEME

Preserve:

Near-black surfaces

White text

Sky Link Blue where required on dark

Action Blue actions

Minimal borders

Minimal shadows

Photography-first composition.

---

# 26. MIDNIGHT BLUE

Create a sophisticated midnight-blue surface mode.

Important:

Do NOT turn it into a neon-blue website.

Midnight Blue should feel:

Architectural

Premium

Corporate

Deep

Quiet

Use the existing blue family as the accent and introduce only the minimum additional surface tokens necessary.

Do not introduce random colors.

---

# 27. TYPOGRAPHY

Follow `Design.md`.

Display:

SF Pro Display / system equivalent

Body:

SF Pro Text / system equivalent

Maintain the established weight hierarchy.

Do not introduce random font families.

Do not use:

Roboto

Poppins

Montserrat

Inter

unless SF Pro/system fonts are genuinely unavailable and the documented fallback strategy requires it.

Do not use weight 500 where the design system explicitly avoids it.

---

# 28. SPACING

Follow the 8px rhythm.

Use the documented spacing tokens.

Do not invent arbitrary:

13px

19px

27px

33px

etc.

unless a documented typographic adjustment requires it.

Structural spacing should remain tokenized.

---

# 29. BUTTONS

Use the existing button grammar.

Primary action:

Blue pill

Secondary:

Quiet/outlined pill where appropriate.

Do not create:

Gradient buttons

Huge floating buttons

3D buttons

Glass buttons everywhere

Random radius variations

The primary action should remain visually obvious without becoming loud.

---

# 30. CARDS

Cards should be used only when they improve information organization.

Do not cardify everything.

Public website:

Prefer open editorial sections.

Admin:

Cards are appropriate for metrics, tables, widgets and operational groups.

No unnecessary shadows.

---

# 31. IMAGERY

Photography is extremely important.

Prioritize real Talween project photography.

Use:

Large hero photography

Editorial project layouts

Immersive dark sections

Before/after when available

Installation photography

Detail photography

Do not use generic stock photos when real project photography exists.

Images should be responsive and optimized.

---

# 32. RESPONSIVE

Follow the responsive principles already documented in Design.md.

The system must work on:

Mobile

Tablet

Desktop

Wide desktop

Do not simply shrink desktop.

Recompose layouts.

Maintain touch targets.

Arabic RTL must also work responsively.

---

# 33. MOBILE WEBSITE

Mobile should feel intentionally designed.

Header:

Logo

Language

Menu

Quote CTA where appropriate

Large project imagery

Readable typography

Generous spacing

Sticky contact/quote actions may be considered where useful, but do not turn the entire bottom of the screen into a toolbar.

---

# 34. ADMIN MOBILE

Admin should also be responsive.

Do not simply squeeze desktop tables into mobile.

Use:

Cards

Drawers

Bottom sheets where appropriate

Horizontal scrolling only when genuinely necessary

Condensed navigation

Touch-friendly actions

---

# 35. ACCESSIBILITY

Support:

Keyboard navigation

Visible focus

Accessible labels

Contrast

Semantic HTML

44px minimum touch targets where applicable

RTL accessibility

Reduced motion

Screen reader-friendly forms

Do not sacrifice accessibility for visual minimalism.

---

# 36. MICRO-INTERACTIONS

Keep motion subtle.

Use motion to communicate:

Navigation

State changes

Page transitions

Modal opening

Form feedback

Button press

Do NOT use:

Parallax everywhere

Constant floating elements

Excessive scroll animation

Animation for decoration alone

The photography and typography should provide most of the visual drama.

---

# 37. NAVIGATION

Public:

Thin global navigation.

Contextual navigation where useful.

Admin:

Persistent sidebar on desktop.

Collapsible navigation on smaller screens.

Navigation must remain consistent across themes and languages.

---

# 38. DESIGN SYSTEM RULE

Before creating a new UI element ask:

"Does Design.md already define this?"

If yes:

USE IT.

If no:

Can the requirement be solved by composing existing components?

If yes:

COMPOSE.

Only create a new component when genuinely required.

If creating one:

* Name it
* Define its purpose
* Define its tokens
* Define its states
* Define responsive behavior
* Define RTL behavior
* Add it to the design system

---

# 39. NO RANDOM DESIGN DECISIONS

Never randomly introduce:

Colors

Fonts

Radii

Shadows

Gradients

Spacing

Buttons

Cards

Icons

Charts

Component variants

If a design decision is necessary but not covered by Design.md, choose the smallest extension consistent with the existing system.

---

# 40. DESIGN REVIEW BEFORE IMPLEMENTATION

Before writing the full application, first produce:

1. Design system map
2. Theme architecture
3. Public sitemap
4. Admin sitemap
5. Navigation system
6. Typography system
7. Color token system
8. Component inventory
9. Responsive strategy
10. RTL strategy
11. Public homepage
12. Service page
13. Project page
14. Quote form
15. Admin dashboard
16. Enquiry screen
17. Quote screen
18. Invoice screen
19. SEO screen
20. Media library
21. Roles/permissions screen

Do NOT immediately build dozens of pages independently.

First establish the system.

---

# 41. FIRST VISUALS TO CREATE

Create these high-fidelity screens first:

### PUBLIC

1. Home — Light
2. Home — Dark
3. Home — Midnight Blue
4. Service Detail
5. Project Detail
6. Get a Quote
7. About
8. Projects
9. Blog
10. Contact
11. Arabic Home RTL
12. Arabic Service RTL

### ADMIN

13. Dashboard
14. Enquiries
15. Enquiry Detail
16. Customers
17. Customer Detail
18. Quotes
19. Quote Editor
20. Invoice Editor
21. Payments
22. Pages
23. Page Editor
24. Services
25. Projects
26. Blog
27. Media Library
28. SEO
29. Analytics
30. Users
31. Roles & Permissions
32. Settings
33. Audit Logs

---

# 42. IMPORTANT VISUAL TEST

When viewing any screen, ask:

"Does this look like a premium signage company?"

If the answer is no, improve the visual hierarchy.

If the answer is:

"Does this look like a generic SaaS dashboard?"

reduce the UI chrome.

If the answer is:

"Does this look exactly like Apple?"

translate the composition toward Talween's signage industry.

The goal is:

**Apple-level restraint + Talween identity + architectural signage photography.**

---

# 43. FINAL PRODUCT EXPERIENCE

The public website should make a visitor think:

"They produce beautiful signage."

The project pages should make them think:

"They have done work like this before."

The quote experience should make them think:

"It is easy to contact them."

The Admin should make the owner think:

"I can understand my business immediately."

The Sales user should think:

"I can manage every enquiry and quotation."

The Finance user should think:

"I can manage invoices and payments safely."

The SEO manager should think:

"I can manage SEO without breaking the website."

---

# 44. FINAL INSTRUCTION

Do not optimize for maximum UI.

Optimize for:

**clarity + trust + visual quality + business usefulness + consistency.**

Design the entire product as one coherent system.

Do not allow individual pages to develop their own visual language.

The design system is the product.

The website and Admin Panel are two expressions of the same system.

Start by presenting the design architecture and high-fidelity screen direction before implementing the complete application.
