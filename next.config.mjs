/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — served by GitHub Pages on the custom domain nabinpdev.com
  output: 'export',

  // GitHub Pages serves directories without trailing slashes; this guarantees
  // /about/index.html, /projects/index.html, etc.
  trailingSlash: true,

  // Custom domain means no basePath; serves from root '/'
  // If reverting to nabindev3.github.io/nabinwebsite/, set basePath: '/nabinwebsite'

  images: {
    // next/image cannot run the optimizer in static export mode
    unoptimized: true
  },

  reactStrictMode: true
};

export default nextConfig;
