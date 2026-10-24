# Feather VFX Studio

## Local development

Install dependencies with `npm install`, then start the Vite development server with `npm run dev`.

Create a local `.env.local` from `.env.example` to configure EmailJS. Environment values prefixed with `VITE_` are embedded in browser code at build time and are public; never put passwords, private API keys, or other server secrets in them.

## GoDaddy cPanel deployment

1. Run `npm run build`.
2. Upload the **contents of `dist`** to the website's cPanel document root (for example, `public_html`). Do not upload the repository, `.env` files, `node_modules`, or Git metadata to the public document root.
3. Keep the included `.htaccess` file in the document root. It enables client-side route fallback, disables directory listing, redirects HTTP and `www` traffic to the HTTPS canonical domain, sets browser security headers, and blocks source-map files.
4. Confirm the domain has a valid HTTPS certificate before deployment. The redirect assumes TLS is configured.
5. In EmailJS, allow only the production site domain, enable the provider's available abuse/spam controls and quotas, and review usage regularly. The EmailJS public key and service/template identifiers are visible to visitors by design; protect submissions with provider-side restrictions.
6. Keep `.env.local` out of Git and the public document root. If a private credential was ever committed or deployed, revoke/rotate it immediately; removing it from the current working tree does not remove it from Git history or backups.

The production JavaScript and assets must be downloaded by visitors' browsers and therefore cannot be hidden after deployment. Production builds are optimized, not secret. Keep confidential logic and private credentials on a server rather than in this frontend.
