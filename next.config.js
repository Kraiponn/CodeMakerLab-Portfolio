/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");

module.exports = nextTranslate({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
      },
    ],
  },
});

// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
