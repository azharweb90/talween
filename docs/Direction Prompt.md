I need to build a signage website for both Arabic and English version . I have Apple design.md with me . How to give claude a direction to make website using same design system for multi pages website . And for this website Admin Panel also needed so that Admin's can see Dashboard, Edit pages, how many visitors , they can generate bills pdf , they can give role access to SEO person for editing . Did you understand ask me or interview me so that you can give claude design to better design of the website and admin panel . I would like to see Light, dark and midnight blue themes but my logo colors and all already it is in Apple Design 

Yes, I understand what you want.

You are not asking Claude to simply design a website. You want to give Claude a proper product + design-system + architecture direction so it builds:

A professional Arabic + English signage company website
Multiple public website pages
RTL/LTR support without duplicating the entire application
Light / Dark / Midnight Blue themes
Your existing Apple Design.md as the source of truth
A complete Admin Panel
Role-based access, especially for an SEO person
Visitor/website analytics
Page/content management
PDF bill/invoice generation
A scalable structure where more pages/features can be added later

Before I write the actual Claude master prompt / design brief, I want to interview you like a Product Manager + Principal UX Architect. That will give Claude much better direction than a generic prompt.

First, I need your Apple Design.md

If you have the actual Apple Design.md, upload it here. I want to understand exactly what you already defined for:

Logo
Colors
Typography
Spacing
Buttons
Cards
Forms
Navigation
Components
Light/dark rules
Any existing design principles

Then I'll build the Claude instruction around your existing system rather than replacing it.

Let's do the interview

You can answer roughly. You don't need to know technical terminology.

A. Company & Website
1. What is the signage company's business?

For example:

Indoor signage
Outdoor signage
LED signage
3D letters
Acrylic signage
Shop signage
Building signage
Wayfinding
Vehicle branding
Printing
Corporate branding
Installation
Maintenance

Tell me everything they actually sell/do.

2. What is the company name and tagline?

Example:

ABC Signage
"Making Your Brand Visible"

3. Who are the main customers?

Choose or describe:

Small businesses
Restaurants
Retail shops
Corporate companies
Real-estate companies
Hotels
Hospitals
Government
Advertising agencies
Architects/interior designers
Individuals
B. Public Website
4. Which pages do you want?

Don't worry if you're unsure. Tell me what you currently expect.

For example:

Home
About Us
Services
    LED Signage
    3D Letters
    Acrylic Signage
    Outdoor Signage
    Indoor Signage
Products
Projects / Portfolio
Industries
Blog
Contact
Get a Quote

Tell me your expected pages.

5. Do you want a Get Quote / Enquiry system?

For example:

Customer
   ↓
Select Service
   ↓
Enter Requirements
   ↓
Upload Image / Drawing
   ↓
Enter Dimensions
   ↓
Submit
   ↓
Admin receives enquiry

Or do you only want a simple contact form?

6. Do customers need to upload files?

For signage, this could be very useful.

For example:

Logo
Reference image
Building photo
Design
PDF
CAD file
Measurements

Do you want this?

C. Website Content
7. Who will edit website content?

You mentioned an SEO person.

Do you want these roles?

Super Admin
Admin
Content Manager
SEO Manager
Sales
Finance

Or something different?

8. What should the SEO person be allowed to edit?

This is important.

For example:

Page Title
Meta Description
Meta Keywords
URL Slug
Canonical URL
OG Title
OG Description
OG Image
Schema
Robots
Sitemap
Image Alt Text
Headings
Page Content
Blog

Should SEO have access to only SEO fields, or also the actual page content?

D. Admin Panel
9. What should the Admin Dashboard show?

I would normally structure it around business operations rather than filling it with random statistics.

Potentially:

Website Overview

Visitors
Page Views
Enquiries
Quotes
Pending Quotes
Invoices
Revenue
Top Pages
Top Services
Traffic Sources
Recent Enquiries
Recent Admin Activity

Do you want something like this?

10. Should Admin manage enquiries?

For example:

New Enquiry
      ↓
Contacted
      ↓
Requirement Collected
      ↓
Quotation Created
      ↓
Quotation Sent
      ↓
Negotiation
      ↓
Approved
      ↓
Invoice
      ↓
Completed

This could turn your admin panel into a mini CRM, rather than just a CMS.

Do you want this?

E. Bills / PDF
11. When you say "generate bills PDF", what exactly do you mean?

Is it:

A. Quotation

Customer
Project
Products/services
Quantity
Price
Tax
Discount
Total
Terms

B. Invoice

Invoice Number
Customer
Items
Tax
Total
Payment Status

C. Both quotation + invoice

I suspect C, but tell me.

12. Do you need payment tracking?

For example:

Quotation: ₹100,000

Advance: ₹40,000
Second Payment: ₹30,000
Final Payment: ₹30,000

Paid: ₹70,000
Remaining: ₹30,000

And Admin can generate:

Quotation PDF
Invoice PDF
Payment receipt PDF

Yes/no?

F. Customers
13. Should Admin have a customer database?

Something like:

Customers

Customer
 ├── Contact information
 ├── Company
 ├── Projects
 ├── Quotes
 ├── Invoices
 ├── Payments
 ├── Documents
 └── Communication history

Or do you want to keep the first version simpler?

G. Analytics
14. When you say "how many visitors", how detailed do you want?

Basic:

Today
Yesterday
This Week
This Month

Or advanced:

Visitors
Sessions
Page Views
Bounce Rate
Traffic Sources
Google
Social Media
Direct
Referral

Countries
Cities

Devices
Desktop
Mobile
Tablet

Top Pages
Top Services

Search Queries

And importantly:

Do you want Google Analytics / Google Search Console integration, or do you want the system to track its own analytics?

I'd strongly recommend deciding this before Claude designs the Admin architecture.

H. Arabic + English

This is extremely important for the architecture.

15. Which language is the default?
English
Arabic

And should the user be able to switch:

EN | العربية

from the header?

16. Should Arabic be a complete RTL experience?

I recommend:

English → LTR
Arabic  → RTL

Not just translating the text.

That means:

Navigation reverses
Icons adapt where appropriate
Breadcrumbs reverse
Forms adapt
Tables adapt
Admin panel adapts
Spacing/layout respects RTL
Numbers/dates are handled properly

Do you want this?

I. Themes

You said:

Light, dark and midnight blue themes

I want to understand one important thing.

Should website visitors be able to change theme?

For example:

☀ Light
◐ Dark
◉ Midnight Blue

Or is this primarily an Admin Panel setting?

My recommendation would probably be:

Public website
Light
Dark
Midnight Blue
System
Admin
Light
Dark
Midnight Blue

But we can decide after seeing your Apple Design.md.

J. Design Direction
17. What kind of signage website are you trying to create visually?

Pick the closest:

A. Luxury Corporate

Very clean, premium, minimal.

B. Modern Advertising Agency

Bold typography, large visuals, strong motion.

C. Architectural

Lots of whitespace, project photography, sophisticated.

D. Industrial / Engineering

Technical, trustworthy, structured.

E. Premium Signage Studio

Large signage photography + premium typography + strong visual hierarchy.

Or tell me your own direction.

K. Portfolio
18. Do you want Projects/Portfolio?

If yes, what information should each project have?

For example:

Project
├── Cover Image
├── Project Gallery
├── Client
├── Location
├── Industry
├── Signage Type
├── Materials
├── Description
├── Before/After
└── Related Services

This can also become excellent SEO content.

L. Admin architecture
19. How many Admin users do you expect?

For example:

Owner
1 Admin
2 Sales
1 SEO person
1 Accountant

Give me an approximate number.

20. Should Admin have permissions like this?
Users
   ├── View
   ├── Create
   ├── Edit
   └── Delete

Pages
   ├── View
   ├── Edit
   └── Publish

SEO
   ├── View
   └── Edit

Quotes
   ├── View
   ├── Create
   ├── Edit
   └── Delete

Invoices
   ├── View
   ├── Create
   └── Edit

Analytics
   └── View

This would give you a proper RBAC (Role-Based Access Control) architecture.

M. Most important question
21. Do you want the Admin Panel to be only a CMS?

Meaning:

"Change website content."

Or do you want it to become a business management system?

Something closer to:

                    ┌──────────────┐
                    │ Public Site  │
                    └──────┬───────┘
                           │
                     Enquiries
                           │
                           ▼
                    ┌──────────────┐
                    │    Admin     │
                    └──────┬───────┘
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
       CRM/Leads         Quotes          Content
          │                │                │
          ▼                ▼                ▼
      Customers         Invoices           SEO
                           │
                           ▼
                       Payments

If you're building this for a real signage company, I would strongly consider the second approach.

What I will give you after your answers

Once you answer these questions and upload Apple Design.md, I'll turn everything into one structured document for Claude.

It will look approximately like:

SIGNAGE WEBSITE + ADMIN PLATFORM
MASTER CLAUDE DESIGN & ARCHITECTURE BRIEF

with sections for:

01 — Product Vision

What we're building and why.

02 — Design System Contract

Claude must use your Apple Design.md as the single source of truth.

03 — Theme Architecture
Design Tokens
      │
      ├── Light
      ├── Dark
      └── Midnight Blue
              │
              ▼
        Shared Components
              │
       ┌──────┴──────┐
       ▼             ▼
    Website        Admin
04 — Internationalization
English → LTR
Arabic  → RTL

with one component system, not two separate websites.

05 — Public Website Sitemap

I'll define the complete page hierarchy.

06 — Admin Sitemap

Something like:

Dashboard
├── Analytics
├── Pages
├── Services
├── Projects
├── Blog
├── Enquiries
├── Customers
├── Quotes
├── Invoices
├── Payments
├── SEO
├── Media
├── Users & Roles
├── Settings
└── Audit Logs

We'll adjust this based on your answers.

07 — Role & Permission Matrix

So Claude understands exactly what:

Super Admin
Admin
SEO
Sales
Finance

can and cannot do.

08 — Data Flow

For example:

Website
   ↓
Enquiry
   ↓
Admin
   ↓
Customer
   ↓
Quotation
   ↓
Approval
   ↓
Invoice
   ↓
Payment
   ↓
PDF
09 — CMS Architecture

So Admin can edit pages without developers modifying React code.

10 — SEO Architecture

Including:

metadata
sitemap
robots
canonical
Open Graph
structured data
image alt text
redirects
slugs
Arabic/English SEO
11 — Analytics Architecture

Including visitor tracking and external analytics integration.

12 — PDF Architecture

Quotation → Invoice → Receipt.

13 — UX Rules

I'll explicitly tell Claude:

Do not invent new colors, typography, spacing, shadows, buttons, cards or component styles when an equivalent token/component exists in Apple Design.md.

That's particularly important given your previous problem with Claude generating hundreds of inconsistent colors.

14 — Development Rules

I'll also give Claude rules around:

reusable components
TypeScript
design tokens
responsive design
RTL
accessibility
SEO
routing
forms
validation
API boundaries
admin permissions
scalable folder structure
15 — Page-by-Page Design Instructions

And most importantly, I'll make Claude design the entire system first, instead of jumping straight into random page implementation.

Start by uploading your Apple Design.md and answering questions 1–21. You can answer in rough notes; I’ll organize the answers into the final Claude-ready specification.

Design.md
File
Indoor signage
Outdoor signage
LED signage
3D letters
Acrylic signage
Shop signage
Building signage
Wayfinding
Vehicle branding
Printing
Corporate branding
Installation
Maintenance

Above all are services.

Company Name is Talween Advertising Dubai Based.

Perfect. Now the product direction is becoming very clear.

We have:

Talween Advertising — Dubai
13 core signage/advertising services
Broad B2B customer base, from restaurants and retail through government and large enterprises
Primary website goals: generate leads + showcase work + generate quotation requests
Talween already has real project photography, videos/assets, etc.
Every service gets its own SEO-ready page
Customer journey: Enquiry → Sales → Quotation → Approval → Invoice
Bilingual English + Arabic
Public website + Admin Panel
Light + Dark + Midnight Blue
Existing Design.md is the design-system foundation

Your Design.md is particularly useful because it already establishes the typography hierarchy, 8px-based spacing rhythm, responsive breakpoints, radius system and component grammar.

Now I want to interview you on the business/admin side, because that's where we can make this substantially better than a normal company website.

Next: Customer & Sales Workflow
8. Get Quote form

I suggest we don't make this a basic:

Name / Email / Phone / Message

Instead, because Talween has many services, we can make it intelligent.

For example:

GET A QUOTE

Step 1
What do you need?
○ Indoor Signage
○ Outdoor Signage
○ LED Signage
○ 3D Letters
○ Acrylic Signage
○ Shop Signage
...

Step 2
Tell us about your project
Project name
Company
Location
Project description

Step 3
Project requirements
Dimensions
Quantity
Material
Installation required?
Maintenance required?

Step 4
Upload
Logo
Reference images
Drawings
PDF
Other files

Step 5
Contact details
Name
Company
Email
Phone
Preferred contact method

Submit Request

Question: Do you want this as a multi-step quote form, or do you prefer a simple one-page form?

9. Should customers select a project location?

Because Talween is Dubai-based, this could be useful:

Project Location
[ Dubai ]
[ Abu Dhabi ]
[ Sharjah ]
[ Ajman ]
[ Other UAE ]
[ Outside UAE ]

Do you want UAE locations specifically, or just a free-text address?

10. Do you want WhatsApp integration?

For a Dubai signage company, this could be important.

For example:

Get a Quote

→ Website form

WhatsApp Us

→ Direct WhatsApp conversation

Call Us

→ Phone

Would you like all three as primary contact channels?

Projects / Portfolio

Since Talween already has real project photography, I want to make the portfolio a major part of the website rather than just a gallery.

11. What information do you have for each project?

For example:

Project
├── Project Name
├── Client Name
├── Location
├── Industry
├── Services Used
├── Description
├── Project Images
├── Installation Images
├── Before / After
├── Video
└── Completion Date

Do you have this information for projects, or mainly photos?

12. Should projects be filterable?

For example:

All Projects

Industry
   Restaurant
   Retail
   Hotel
   Corporate
   Healthcare
   Government

Service
   LED
   3D Letters
   Outdoor
   Indoor
   Vehicle Branding

This would make the portfolio much more powerful.

Services

You said every service will have its own page.

So potentially:

/services
   │
   ├── /indoor-signage
   ├── /outdoor-signage
   ├── /led-signage
   ├── /3d-letters
   ├── /acrylic-signage
   ├── /shop-signage
   ├── /building-signage
   ├── /wayfinding
   ├── /vehicle-branding
   ├── /printing
   ├── /corporate-branding
   ├── /installation
   └── /maintenance

Each page could have:

Hero
↓
What is this service?
↓
Types / Solutions
↓
Materials / Options
↓
Talween's process
↓
Project examples
↓
Industries served
↓
FAQ
↓
Get a Quote
13. Do you want me to structure these 13 service pages this way?

Or should some services have different structures?

About Talween
14. What should we communicate about Talween?

Tell me anything you know about:

Year established
Number of years experience
Team size
Factory/workshop
UAE locations
Projects completed
Major clients
Certifications
Equipment
Manufacturing capability
Installation team
Maintenance capability

Don't worry if you don't have all of these.

Admin Panel — most important part

Now let's design the business system.

I recommend separating the Admin into six major areas:

┌─────────────────────────────────────────┐
│              TALWEEN ADMIN              │
├─────────────────────────────────────────┤
│                                         │
│ Dashboard                               │
│                                         │
│ Website                                 │
│   Pages                                 │
│   Services                              │
│   Projects                              │
│   Blog                                  │
│   Media Library                         │
│                                         │
│ Leads & Sales                           │
│   Enquiries                             │
│   Customers                             │
│   Quotes                                │
│   Invoices                              │
│   Payments                              │
│                                         │
│ Marketing & SEO                         │
│   SEO                                   │
│   Analytics                             │
│                                         │
│ Administration                          │
│   Users                                 │
│   Roles & Permissions                   │
│   Settings                              │
│   Audit Logs                            │
│                                         │
└─────────────────────────────────────────┘
15. Do you agree with this overall Admin structure?

If yes, I'll use this as the foundation.

16. Roles

I recommend starting with:

Super Admin

Everything.

Admin

Website + enquiries + customers + quotes + invoices.

Sales
Enquiries
Customers
Quotes
Projects
SEO Manager
Pages
SEO metadata
Blog
Media / Alt text
Analytics
Search Console
Finance
Customers
Quotes
Invoices
Payments
Financial reports

Do these roles make sense for Talween?

17. Very important: SEO permissions

You specifically mentioned giving access to an SEO person.

I want to know whether you want the SEO person to be able to edit:

Option A — SEO only
Meta Title
Meta Description
Slug
Canonical
Schema
OG Image
Image Alt
Robots

while not touching the actual page design/content.

Option B — SEO + Content

They can also edit:

Headings
Paragraphs
FAQs
Images
Page content
Blog

I would recommend Option B with permission boundaries, because SEO often requires content changes.

Which one?

18. Invoice / quotation

I need one clarification before designing this.

Do you want:

ENQUIRY
   ↓
QUOTATION
   ↓
CUSTOMER APPROVES
   ↓
INVOICE
   ↓
PAYMENT

with PDFs for:

Quotation
Invoice
Payment Receipt

Yes / No?

And should Admin be able to create a quotation manually, even if there wasn't a website enquiry?

19. Dashboard

For the first Admin dashboard, I'm thinking:

TODAY

Visitors          1,284
New Enquiries        24
Quote Requests       12
Pending Quotes        8
Invoices              5
Outstanding           AED XXX

Then:

Website Analytics
────────────────────────
Visitors
Page Views
Top Services
Top Projects
Traffic Sources

And:

Sales Pipeline
────────────────────────
New Enquiries
Contacted
Quotation
Negotiation
Approved
Completed

And:

Recent Activity
────────────────────────
New enquiry
Quote created
Invoice paid
Project published
SEO updated

Would this dashboard be useful to the Talween owner/admin?

20. Finally — the visual direction

Your existing system says things like:

photography-first presentation

and

the product speaks, UI recedes.

For Talween, I want to translate that into:

The signage itself becomes the hero.

For example:

┌─────────────────────────────────────────────┐
│                                             │
│          TALWEEN ADVERTISING                │
│                                             │
│     Signage that makes your brand visible.  │
│                                             │
│       [ Get a Quote ]   [ View Projects ]   │
│                                             │
│                                             │
│           LARGE REAL PROJECT PHOTO          │
│                                             │
└─────────────────────────────────────────────┘

Then:

LIGHT PROJECT
        ↓
DARK PROJECT
        ↓
LIGHT SERVICE
        ↓
DARK PROJECT
        ↓
PARCHEMENT / LIGHT

This preserves the visual rhythm of your Design.md without making Talween look like Apple. The existing system explicitly uses alternating light/dark surfaces as its structural rhythm.

So for your next reply, answer just these:

8. Multi-step or single-page quote form?
9. UAE project locations?
10. WhatsApp + Call + Website enquiry?
11. What project information exists?
12. Project filtering?
13. Standard service-page structure okay?
14. Anything you know about Talween's company credentials?
15. Admin structure okay?
16. Roles okay?
17. SEO-only or SEO + content?
18. Quotation → Invoice → Payment + PDFs?
19. Dashboard structure okay?

Then I'll do the final architecture interview around languages, themes, authentication, database/content model, and public-site navigation—and after that I'll give you the single master Claude prompt that you can paste into Claude together with Design.md.

Simple one page form i need because whatsapp enquiry will keep .

In whole 7 stated of UAE and Outside as well

10 YES

11: YES HAve Everything

Currently not
Yes but enquiry form above as well they can keep and in the footer side also you mentioned .

Perfect. That clarifies the customer-facing flow nicely.

Confirmed decisions

Enquiry

One-page enquiry/quote form — not multi-step
WhatsApp enquiry also available
Phone/call option available
Website enquiry available
The Get a Quote CTA can appear in the header/hero and again throughout the site/footer
Project location: all 7 Emirates + Outside UAE
Project records have complete information and photography
Portfolio filtering is not required for V1
Every service gets its own dedicated page using the common service-page structure

So I would structure the public journey as:

                    TALWEEN WEBSITE
                          │
          ┌───────────────┼────────────────┐
          │               │                │
          ▼               ▼                ▼
      Get a Quote       WhatsApp          Call
          │
          ▼
    ONE-PAGE FORM
          │
          ├── Service
          ├── Project details
          ├── Location
          ├── Upload files
          ├── Contact details
          └── Submit
                  │
                  ▼
             ADMIN PANEL
                  │
                  ▼
              ENQUIRY
                  │
                  ▼
              SALES TEAM
                  │
                  ▼
             QUOTATION
                  │
                  ▼
               INVOICE
                  │
                  ▼
               PAYMENT

This is much cleaner than making the public website behave like a full CRM.

One important UX decision

I would not put a huge "Get a Quote" form on every service page.

Instead:

Hero → service information → projects → CTA → related services → final CTA/footer

with a consistent Get a Quote button that opens the same one-page form.

That keeps the Apple-style visual calmness from your Design.md while still making lead generation extremely accessible.

Your design system specifically emphasizes low-density layouts, large visual sections, and restrained UI rather than filling every section with controls.

I need the remaining business decisions

We're almost done with the interview. I don't want to make assumptions about these because they will directly affect the Claude architecture.

14. Talween company information

Tell me whatever you know:

Year established:
Years of experience:
Office location:
Workshop/factory:
Team size:
Projects completed:
Major clients:
Certifications:
Awards:
UAE coverage:
Any particular competitive advantage:

If you don't know, just write "Claude can leave placeholders."

15–16. Admin

Are you happy with this?

ADMIN
│
├── Dashboard
│
├── Website
│   ├── Pages
│   ├── Services
│   ├── Projects
│   ├── Blog
│   └── Media Library
│
├── Leads & Sales
│   ├── Enquiries
│   ├── Customers
│   ├── Quotes
│   ├── Invoices
│   └── Payments
│
├── Marketing
│   ├── SEO
│   └── Analytics
│
└── Administration
    ├── Users
    ├── Roles & Permissions
    ├── Settings
    └── Audit Logs

And roles:

Super Admin
Admin
Sales
SEO Manager
Finance

Yes / No?

17. SEO person

Which do you want?

A — SEO only

They can edit:

Meta title
Meta description
Slug
Canonical
Schema
OG information
Image alt text
Robots
Sitemap-related settings

B — SEO + Content

Everything above plus:

Page headings
Page text
FAQs
Images
Blog
Service content

I'd recommend B, with permissions controlled individually.

18. Quotation / invoice

Confirm:

Enquiry
   ↓
Quotation
   ↓
Customer approval
   ↓
Invoice
   ↓
Payment

And Admin can generate:

Quotation PDF
Invoice PDF
Payment Receipt PDF

Also: should Admin be able to create a quotation manually, without a website enquiry?

19. Dashboard

Is this direction correct?

Dashboard

┌────────────┬────────────┬────────────┬────────────┐
│ Visitors   │ Enquiries  │ Quotes     │ Revenue    │
│            │            │            │            │
└────────────┴────────────┴────────────┴────────────┘

Website Analytics
├── Visitors
├── Page views
├── Traffic sources
├── Top pages
└── Top services

Lead Pipeline
├── New
├── Contacted
├── Quotation
├── Negotiation
├── Approved
└── Completed

Recent Enquiries

Recent Admin Activity
Then only 5 final questions

After these, I'll have enough information to create the Claude master specification.

20. Languages

Should the website URL structure be:

English
talween.com/...

Arabic
talween.com/ar/...

or do you want Arabic as the default and English under /en/?

21. Arabic content

Will Talween provide the Arabic translations, or should the system allow an Admin/SEO person to enter both:

English Content
Arabic Content

for every page?

22. Theme switcher

Should visitors be able to choose:

☀ Light
◐ Dark
◉ Midnight Blue

or should themes mainly be an Admin/design-system capability?

23. Admin authentication

Do you want Admin login with:

Email + password
Email + password + OTP/2FA
Google/Microsoft login
Something else?
24. Blog

Do you want a proper SEO blog?

For example:

Blog
├── Signage Ideas
├── LED Signage
├── Shop Signage
├── Dubai Signage
├── Outdoor Signage
├── Branding
└── Industry-specific articles

This could be particularly valuable because your SEO person would have a dedicated place to continuously publish content.

Once you answer 14–24, I can stop interviewing you and produce the actual Claude Design & Architecture Master Prompt. It will explicitly tell Claude how to use your uploaded Design.md as the design-system source of truth, while extending it safely for Talween's Light / Dark / Midnight Blue + Arabic RTL + English LTR + Public Website + Admin Panel.

15-20 all are perfect for Admin panel 

Perfect. I'll lock 15–20 as approved requirements rather than revisiting them.

So the Admin Panel direction is confirmed:

TALWEEN ADMIN
│
├── Dashboard
│
├── Website
│   ├── Pages
│   ├── Services
│   ├── Projects
│   ├── Blog
│   └── Media Library
│
├── Leads & Sales
│   ├── Enquiries
│   ├── Customers
│   ├── Quotes
│   ├── Invoices
│   └── Payments
│
├── Marketing
│   ├── SEO
│   └── Analytics
│
└── Administration
    ├── Users
    ├── Roles & Permissions
    ├── Settings
    └── Audit Logs

And the roles are:

Super Admin
Admin
Sales
SEO Manager
Finance

with the quotation → invoice → payment workflow and PDF generation.

Your Design.md will remain the foundation, not something Claude is allowed to replace. Its token/reference approach and rule of avoiding inline values are particularly important here.

I only need these final 4 decisions

21. Arabic content:
Will Talween provide Arabic translations, or should Admin have separate fields for English + Arabic content?

22. Themes:
Should website visitors themselves be able to switch:

Light / Dark / Midnight Blue

or should the theme selector primarily be available in Admin?

23. Admin login:
Which do you want?

Email + password
Email + password + 2FA/OTP
Google/Microsoft login
Other

24. Blog:
Do you want a full SEO blog managed from Admin?

I recommend yes, because the SEO Manager can continuously publish articles targeting searches such as signage company Dubai, LED signage Dubai, shop signage UAE, etc.

Once you answer those four, I'll stop the interview and build the complete Claude master direction—including the public sitemap, admin sitemap, page architecture, RTL/LTR architecture, theme architecture, CMS structure, roles/permissions, data flow, component rules, and the exact instructions Claude should follow when implementing the website from your Design.md.