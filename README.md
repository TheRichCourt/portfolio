# Development

This project uses Vite and requires Node.js 22.12 or newer.

```bash
npm ci
npm run dev
```

Vite will print the local development URL. Changes to JavaScript, HTML, and Sass are reflected immediately.

## Checks and production build

```bash
npm test
npm run build
npm run preview
```

The optimized static site is written to `dist/`.

## Deploy from GitHub with Coolify

Connect the repository to Coolify with a GitHub App. The automated GitHub App setup is recommended because it provides scoped repository access and push-triggered deployments without a manually configured webhook. Grant the app access only to this repository if it does not need account-wide access.

Create an application from the GitHub repository, select the production branch, and use these settings:

- Build Pack: `Railpack (Beta)`
- Base Directory: `/`
- Is it a static site?: enabled
- Publish Directory: `/dist`
- Install Command: `npm ci`
- Build Command: `npm run build`
- Start Command: leave empty
- Port: `80`
- Domain: `https://portfolio2026.therichcourt.com`

Railpack detects Node.js 22 from `package.json`, npm from `package-lock.json`, and the Vite build automatically. No `railpack.json`, persistent storage, runtime environment variables, or custom Nginx configuration are required.

Before the first deployment, confirm Docker Buildx is available on the Coolify build server and helper container. Enable Auto Deploy if pushes to the selected GitHub branch should deploy automatically. Then deploy and confirm the root page and static assets are available over HTTPS. An optional HTTP health check can use `/` on port `80`.

If the repository is connected by its public HTTPS URL instead of a GitHub App, configure a GitHub repository webhook separately to enable automatic deployments.
