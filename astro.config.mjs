// @ts-check
import { defineConfig } from 'astro/config';

// Platform-agnostic config:
// - GitHub Pages deploys to /chronolens/ subpath
// - Vercel, Netlify, etc. deploy to root /
// @ts-ignore - process.env exists at runtime in Node.js
const env = globalThis.process?.env ?? {};
const isGitHubPages = !!env.GITHUB_ACTIONS;

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages
    ? 'https://itsshiva78.github.io'
    : (env.VERCEL_URL ? `https://${env.VERCEL_URL}` : 'https://chronolens.vercel.app'),
  base: isGitHubPages ? '/chronolens/' : '/',
});
