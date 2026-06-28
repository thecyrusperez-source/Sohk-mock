// Resolve a public/ asset path under the current Vite base URL.
// Works for both root deploys (Netlify) and project sites (GitHub Pages).
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\//, '')}`;
