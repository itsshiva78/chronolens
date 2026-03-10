// @ts-check
import { defineConfig } from 'astro/config';

// Platform-agnostic config:
// - GitHub Pages deploys to /chronolens/ subpath
// - Vercel, Netlify, etc. deploy to root /
const isGitHubPages = !!process.env.GITHUB_ACTIONS;

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages
    ? 'https://itsshiva78.github.io'
    : (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://chronolens.vercel.app'),
  base: isGitHubPages ? '/chronolens/' : '/',
});
