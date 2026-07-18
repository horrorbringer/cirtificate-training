## Project Analysis: Global Training & Certificate Platform

Your idea is a **membership-based online training platform** where users worldwide can access training videos and documents. Some resources are free, while premium resources, downloads, and certificates require payment. 

### 1. Project Goal

The platform should help an organization or training provider:

* Publish online training courses
* Upload training videos and documents
* Offer free and paid learning materials
* Sell monthly and yearly memberships
* Allow paid members to download premium documents
* Allow learners to request or receive certificates
* Accept payments from international clients

A suitable project title is:

**Global Training and Certification Management System**

Other name options:

* CertiLearn
* TrainCert
* SkillPass
* GlobalCert
* CertiHub
* LearnAward

---

## 2. Main User Roles

### Administrator

The administrator controls the entire platform.

Main functions:

* Manage member registrations
* Approve, suspend, or remove users
* Create and manage training courses
* Upload training videos
* Upload free and premium documents
* Create training announcements
* Manage monthly and yearly plans
* Review payments
* Manage certificate requests
* Generate or upload certificates
* View users, sales, courses, and downloads
* Send notifications to members

### Registered Free Member

A free member can:

* Register and log in
* Update their profile
* Browse available training courses
* Watch free training videos
* View or download selected free documents
* See paid resources but cannot access them
* View membership plans
* Upgrade to a paid membership

### Paid Member

A paid member can:

* Access premium training
* Watch paid videos
* Download premium documents
* Track training progress
* Request a certificate
* Download approved certificates
* View payment and subscription history
* Renew or cancel membership

### Visitor

A visitor can:

* View the homepage
* Browse public courses
* View sample videos and free documents
* Read announcements
* See prices
* Register or log in

---

## 3. Core System Modules

### A. Authentication and Member Management

The system should support:

* User registration
* Email verification
* Login and logout
* Forgot password
* Profile management
* User status: active, suspended, or blocked
* User role: admin, free member, or paid member

For global clients, collect:

* Full name
* Email
* Country
* Phone number
* Profile photo
* Preferred language
* Time zone

### B. Training Management

The administrator should be able to:

* Create training categories
* Create courses
* Add course descriptions
* Set course difficulty
* Assign an instructor
* Upload thumbnails
* Add lessons or modules
* Set courses as free or paid
* Publish or unpublish courses

Example course structure:

```text
Course
 ├── Module 1
 │    ├── Video lesson
 │    └── PDF document
 ├── Module 2
 │    ├── Video lesson
 │    └── Exercise
 └── Final assessment
```

### C. Video Management

Important video functions:

* Upload videos or use external video hosting
* Organize videos by course and module
* Mark videos as free or premium
* Record watch progress
* Continue watching
* Prevent direct unauthorized downloads
* Show video duration
* Add subtitles
* Support different video qualities

For a global platform, storing large videos directly on the web server is not recommended. Use services such as cloud object storage or video streaming platforms.

### D. Document Management

Documents may include:

* PDF training materials
* PowerPoint files
* Word documents
* Exercises
* Templates
* Guidelines
* Checklists

Each document should have:

* Title
* Description
* File
* Category
* Course
* Access type: free or paid
* Download permission
* Upload date
* File size
* Download count

Recommended access rules:

| User type   | View free docs | Download free docs | View paid docs | Download paid docs |
| ----------- | -------------: | -----------------: | -------------: | -----------------: |
| Visitor     |        Limited |                 No |   Preview only |                 No |
| Free member |            Yes |                Yes |   Preview only |                 No |
| Paid member |            Yes |                Yes |            Yes |                Yes |
| Admin       |            Yes |                Yes |            Yes |                Yes |

### E. Membership Plans

Your initial plans are:

#### Monthly Plan

* Premium training access
* Premium document downloads
* Certificate requests
* Valid for one month
* Automatic or manual renewal

#### Yearly Plan

* All monthly-plan benefits
* Valid for one year
* Lower average monthly price
* Possible bonus courses or certificates

You could also include a free plan:

| Plan    | Training access     | Document downloads | Certificates |
| ------- | ------------------- | ------------------ | ------------ |
| Free    | Free courses only   | Free files only    | No           |
| Monthly | Premium courses     | Premium files      | Yes          |
| Yearly  | All premium courses | Premium files      | Yes          |

Important subscription statuses:

* Pending
* Active
* Expired
* Cancelled
* Failed
* Refunded

### F. Payment Module

Because the clients are international, the payment system should support:

* Credit and debit cards
* International currencies
* Payment receipts
* Payment confirmation
* Failed-payment handling
* Refund records
* Subscription renewal
* Transaction history

Possible payment workflow:

```text
User selects plan
        ↓
System creates payment order
        ↓
User completes payment
        ↓
Payment provider confirms payment
        ↓
Membership becomes active
        ↓
User receives premium access
```

For Cambodian users, you may later add local payment options separately.

### G. Certificate Management

The certificate feature needs clear business rules.

A user should not receive a certificate only because they paid. A stronger process is:

1. User buys an eligible plan or certificate package.
2. User completes the required training.
3. User passes an assessment or satisfies course requirements.
4. User submits a certificate request.
5. Admin reviews the request.
6. System generates or uploads the certificate.
7. User downloads the certificate.

Certificate information should include:

* Certificate number
* Learner’s full name
* Course name
* Issue date
* Expiration date, when applicable
* Instructor or organization signature
* QR code
* Verification URL
* Certificate status

Certificate statuses:

* Not eligible
* Eligible
* Requested
* Under review
* Approved
* Rejected
* Issued
* Revoked

A public verification page is highly recommended. Employers can enter the certificate number or scan its QR code to confirm authenticity.

### H. Announcements and Notifications

The administrator can publish:

* New training announcements
* Upcoming sessions
* New documents
* Membership promotions
* Certificate updates
* Maintenance notices

Notifications may appear through:

* Website notification
* Email
* Mobile push notification later

---

## 4. Important User Workflows

### Registration and Upgrade

```text
Visit website
   ↓
Register account
   ↓
Verify email
   ↓
Access free content
   ↓
Choose monthly or yearly plan
   ↓
Complete payment
   ↓
Paid membership activated
```

### Premium Document Download

```text
User opens document
   ↓
System checks login
   ↓
System checks document access level
   ↓
System checks active subscription
   ↓
Download allowed or upgrade page displayed
```

### Certificate Request

```text
Complete training
   ↓
Meet certificate requirements
   ↓
Submit certificate request
   ↓
Pay certificate fee if separate
   ↓
Admin reviews request
   ↓
Certificate generated
   ↓
User downloads certificate
```

---

## 5. Suggested Pages

### Public Website

* Home
* About Us
* Training Courses
* Course Details
* Free Resources
* Membership Plans
* Certificate Verification
* Announcements
* Contact Us
* Login
* Register

### Member Dashboard

* Dashboard overview
* My Courses
* Continue Learning
* Training Progress
* Documents
* Downloads
* My Certificates
* Request Certificate
* Membership Plan
* Payment History
* Notifications
* Profile and Security

### Admin Dashboard

* Dashboard statistics
* Members
* Courses
* Categories
* Modules and Lessons
* Videos
* Documents
* Membership Plans
* Subscriptions
* Payments
* Certificate Requests
* Certificates
* Announcements
* Reports
* Settings
* Admin Users
* Audit Logs

---

## 6. Recommended Database Entities

The main database tables could be:

```text
users
roles
user_profiles
categories
courses
course_modules
lessons
videos
documents
plans
subscriptions
payments
enrollments
lesson_progress
downloads
certificate_requests
certificates
announcements
notifications
reviews
audit_logs
```

Important relationships:

```text
User 1 ─── many Subscriptions
User 1 ─── many Payments
User many ─── many Courses through Enrollments
Course 1 ─── many Modules
Module 1 ─── many Lessons
Course 1 ─── many Documents
User 1 ─── many Certificate Requests
Certificate Request 1 ─── 0 or 1 Certificate
```

---

## 7. Business Rules to Define Clearly

Before development, decide these rules:

1. Does a paid membership include all courses or only selected courses?
2. Is the certificate included in the membership or purchased separately?
3. Must users complete 100% of lessons before requesting a certificate?
4. Must users pass an examination?
5. Can expired members still download previously issued certificates?
6. How many document downloads are allowed?
7. Can users cancel automatic renewal?
8. Are payments refundable?
9. Are certificates valid forever or do they expire?
10. Can instructors upload content, or only administrators?

A practical model would be:

* Paid membership unlocks premium courses and documents.
* Certificate eligibility requires course completion.
* Some certificates are included; professional certificates may require an additional fee.
* Issued certificates remain downloadable even after membership expires.

---

## 8. Security Requirements

Because the platform handles payments, personal information, and paid content, it should include:

* Password hashing
* Email verification
* Role-based access control
* Secure payment-provider integration
* Private file storage
* Expiring document download links
* Video-access protection
* Rate limiting
* Two-factor authentication for administrators
* Database backup
* Activity and audit logs
* Privacy policy
* Terms and conditions
* Cookie notice where required
* Account deletion process

Do not expose the real storage URL of premium documents. The server should verify the user’s subscription and generate a temporary download link.

---

## 9. Reports for Administrators

The admin dashboard should show:

* Total registered members
* Active paid members
* Monthly and yearly subscribers
* Expired subscriptions
* Monthly revenue
* Yearly revenue
* Most popular courses
* Most watched videos
* Most downloaded documents
* Course completion rate
* Pending certificate requests
* Certificates issued
* Users by country

---

## 10. Recommended MVP

For the first version, focus on:

### Phase 1

* User registration and login
* Free and paid member roles
* Course management
* Video lessons
* Free and paid documents
* Monthly and yearly plans
* Online payment
* Subscription access control
* Certificate request
* Admin approval
* Downloadable PDF certificate
* Certificate verification page

### Phase 2

* Quizzes and examinations
* Automatic certificate generation
* Multiple languages
* Instructor accounts
* Course reviews
* Coupons
* Mobile application
* Live training
* Discussion forums
* Advanced analytics
* Affiliate program

---

## 11. Suggested Technology Stack

A suitable stack for your project is:

### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* Shadcn UI

### Backend

Choose one:

* Laravel with REST API
* NestJS
* Next.js API for a smaller MVP

Since you have experience with Laravel, a good option is:

```text
Frontend: Next.js
Backend: Laravel API
Database: PostgreSQL
Cache/Queue: Redis
Document Storage: Amazon S3 or Cloudflare R2
Video: Mux, Vimeo, or cloud streaming
Payment: Stripe plus a Cambodian payment provider later
Certificate PDF: Laravel PDF generation
Deployment: AWS, DigitalOcean, or Railway
```

---

## Final Project Definition

**Global Training and Certification Management System** is a web-based platform that allows worldwide learners to register, access free or premium training videos and documents, purchase monthly or yearly memberships, track their learning progress, and request verifiable certificates. Administrators manage members, training content, payments, subscriptions, announcements, and certificate issuance through a centralized dashboard.
