/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Tells Next.js to export a static site
  basePath: '',      // Optional: base path for subfolder hosting
  images: {
    unoptimized: true,  // Disable image optimization for GitHub Pages
  },
  reactStrictMode: true,
};

module.exports = nextConfig
