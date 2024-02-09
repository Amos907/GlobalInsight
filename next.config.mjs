/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "loremflickr.com",
      "flagcdn.com",
      "upload.wikimedia.org",
      "mainfacts.com",
    ],
  },
};

export default nextConfig;
