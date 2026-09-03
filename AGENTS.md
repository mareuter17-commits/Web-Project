# Project Instructions

## Secrets and environment variables

- Never read, display, copy, or expose the contents of `.env.local`.
- Never include API keys, access tokens, passwords, or other secrets in source code.
- Never commit `.env.local` or any environment files containing secrets.
- Use environment variable names in code instead of hard-coded secret values.
- When Shopify credentials are needed, reference:
  `process.env.SHOPIFY_STORE_DOMAIN`
  `process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN`
- Never print environment variable values to the terminal or application logs.
