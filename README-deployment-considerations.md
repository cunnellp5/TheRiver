# Deployment

> A place to write down costs and considerations when it comes to deploying this application. The goal is to figure out how to do this as cheap as possible even with a e-commerce aspect to the site

## application

- Vercel

## database

- Supabase

## media

- Currently using Cloudinary
- Supabase storage
- Backblaze vs s3

rollout plan verified:

- Media (ignoring)
  - Supabase (storage)
  - cloudinary
  - s3
- Supabase
  - DB
  - Auth supabase
    - Could store customers
  - Auth regular could be just admin
    - No customers via this route
  - Consider splitting users between e-commerce / services / general users
  - PII shiiiit don’t store info but keep the relationship to Stripe purchases
- Stripe = 2.9%
- Vercel = 20/mo

---

- Page analytics - Google Analytics
- Backup DB script
- Move .json files to DB

---

---

Other DB hosts: render.com

---
