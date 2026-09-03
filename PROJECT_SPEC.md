# Shopify Headless Storefront — Project Specification

## 1. Project Overview

This project is a custom headless Shopify storefront.

The storefront will use:

- Next.js
- React
- TypeScript
- Shopify Storefront API
- GitHub
- Vercel

The Shopify Dev Store is currently used for development and testing.

The storefront will eventually be connected to a production Shopify store.

---

## 2. Current Architecture

The intended architecture is:

Browser
↓
Next.js
↓
Shopify Storefront API
↓
Shopify

Development workflow:

Developer
↓
VS Code
↓
Cline
↓
Kimi K3
↓
Project code

Source control:

Git
↓
GitHub

Deployment:

GitHub
↓
Vercel
↓
Live storefront

---

## 3. Current Technology Stack

Use:

- Next.js
- React
- TypeScript
- Shopify Storefront API
- npm
- Git
- GitHub
- Vercel

Use the Next.js App Router.

Use TypeScript for application code.

Do not convert the project to another framework unless explicitly instructed.

---

## 4. Shopify Integration

The storefront connects to Shopify through the Shopify Storefront API.

The Shopify store domain is stored in:

SHOPIFY_STORE_DOMAIN

The Shopify Storefront API access token is stored in:

SHOPIFY_STOREFRONT_ACCESS_TOKEN

These values must be read from environment variables.

Never hard-code Shopify credentials into source code.

Never expose Shopify credentials in the browser unnecessarily.

Never commit `.env.local` to Git.

---

## 5. Environment Variables

The project uses `.env.local` for local development.

Expected variables:

SHOPIFY_STORE_DOMAIN
SHOPIFY_STOREFRONT_ACCESS_TOKEN

Never display the actual values of these variables in:

- source code
- chat messages
- logs
- screenshots
- GitHub
- documentation
- error messages

Use environment variable references instead.

---

## 6. Shopify Data

The storefront will eventually use Shopify data including:

- Products
- Product variants
- Product images
- Prices
- Inventory availability where appropriate
- Collections
- Product descriptions
- Product options
- Cart data
- Checkout

Shopify remains the source of truth for commerce data.

Do not duplicate Shopify product data unnecessarily in the application.

---

## 7. Storefront Features

The storefront is expected to eventually include:

### Homepage

- Brand presentation
- Featured products
- Featured collections
- Promotional sections
- Responsive design

### Product Catalog

- Product listing
- Collections
- Product filtering where appropriate
- Product sorting where appropriate
- Product search

### Product Pages

- Product title
- Product images
- Product description
- Price
- Product options
- Variant selection
- Add to cart
- Availability

### Cart

- Cart items
- Quantity controls
- Remove item
- Subtotal
- Checkout button

### Checkout

Checkout will use Shopify's checkout functionality.

Do not build a custom payment-processing system.

---

## 8. Design Requirements

The storefront should be:

- Responsive
- Mobile-friendly
- Fast
- Accessible
- Clean
- Modern
- Easy to navigate

Do not choose a permanent brand identity, logo, color system, or visual identity unless explicitly instructed.

Use temporary styling when necessary during development.

---

## 9. Coding Standards

Use:

- TypeScript
- React components
- Next.js App Router
- Server components by default
- Client components only when client-side interactivity requires them

Prefer simple, maintainable code.

Avoid unnecessary dependencies.

Before installing a new dependency, explain why it is needed.

Do not introduce duplicate libraries that solve the same problem.

---

## 10. Security Rules

Never:

- hard-code API keys
- hard-code access tokens
- commit secrets
- expose environment variable values
- print credentials to logs
- place secrets in client-side code unnecessarily

Never modify `.env.local` unless explicitly instructed by the developer.

Never request that the developer paste secret values into chat.

---

## 11. AI Coding Rules

AI coding agents must:

1. Read this specification before making significant changes.
2. Follow the existing architecture.
3. Avoid unnecessary rewrites.
4. Avoid deleting files unless necessary.
5. Avoid changing frameworks without permission.
6. Avoid installing unnecessary dependencies.
7. Explain significant architectural changes before making them.
8. Keep changes focused and reviewable.
9. Test changes when possible.
10. Report errors rather than hiding them.
11. Never expose secrets.
12. Never modify `.env.local`.
13. Never commit directly without developer approval.

---

## 12. Git Workflow

GitHub is the source-control repository.

Before significant changes:

- Check Git status.
- Make focused changes.
- Test the application.
- Review the changes.
- Create a Git commit.

Do not rewrite Git history unless explicitly instructed.

Do not force-push.

Do not delete branches or repositories without explicit approval.

---

## 13. Deployment

Vercel will eventually host the production storefront.

The GitHub repository will be connected to Vercel.

Production environment variables will be configured through Vercel.

Do not commit `.env.local`.

Do not assume local environment variables automatically exist in Vercel.

---

## 14. Development Environment

Local development uses:

npm run dev

The local storefront is expected to run at:

http://localhost:3000

The Shopify Dev Store is currently the development commerce backend.

---

## 15. Current Project Status

Currently completed:

- Next.js installed
- React installed
- TypeScript installed
- Next.js App Router configured
- Shopify Storefront API client installed
- Shopify Storefront API connection created
- Shopify Dev Store connected
- Git configured
- GitHub configured
- `.env.local` configured
- `.env.local` excluded from Git
- Local storefront successfully communicates with Shopify

---

## 16. Current Development Goal

The immediate goal is to build the custom headless storefront on top of the existing Next.js and Shopify Storefront API foundation.

Do not redesign the architecture unless explicitly instructed.

Do not introduce production deployment changes until the storefront is ready.

Build incrementally and verify each major feature before proceeding.
