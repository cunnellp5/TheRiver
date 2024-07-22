# Checklist and workflows

## Styles

> The styles of this application rely on the scoping and layout nature of sveltekit
>
> - 'open-props' themes the application with variables.
> - A global style sheet is used for theme (for now, only light and dark)
> - Components are custom built, but should use the provided vars.
> - Layout uses a combination of flexbox and grid to make the site responsive.

- [] finalize desired font (https://modernfontstacks.com/)
- [] finalize dark vs light theme
  - [] Homepage
  - [] Services
  - [] Market
  - [] Posts
  - [] Contact
  - [] Login
  - [] Signup
  - [] Logout
  - [] Main Error
  - [] Admin
  - [] Dashboard
- [] check for semanitc HTML - everywhere
- [] test skeleton loaders

## Homepage

> Landing page and introduction to website

General

- [] ensure styles are themed (color of links)
- [] Remove restrictive layout styles such that sections can be full width
- [] finalize design of Article display
- [] finalize design of Artist spotlight section
  - [] show videos/music
  - [] add a banner
- [] finalize footer styling
- [] add tests
- [] double check animations and user interactions
  - [] video pausing / blur
  - [] svg loading animation
  - [] parallax
- [] media caching

Responsive for mobile

- [] header
- [] hero
- [] spotlight
- [] articles
- [] footer

## Services - client

- [] dial in scroll animations
- [] add explanation section

> Clients can
>
> - View service(s)
> - Book service(s)
> - Cancel service(s)

## Services - admin

> Admin can
>
> 1. CRUD services
> 2. CRUD bookings/appointments
> 3. CRUD time slot availabilities

- [] view jobs with common component
- [] CRUD jobs
- [] view bookings (this might seem the same as the sheduler section, but Id like a separation of conscerns: generate time slots, and then CRUD the actual bookings)
- [] CRUD bookings
- [] view calendar with existing time slots
- [] generate new timeslots
- [] view transactions for services

## CMS

- [] overarching layout
  - [] should I keep the original header aka make a different layout entirely
- [] bread crumb links
- [] side menu

### Main

#### Users

- [] Authorization

### Home page

#### Music

- [] Authorization

#### Videos

- [] Authorization

#### Articles

- [] Authorization

### Blog

#### Posts

- [] Authorization

### Services

#### Jobs

- [] Authorization

#### Bookings

- [] Authorization

#### Schedule

- [] Authorization

### Contact
