import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/projects/Build%20Smarter",
        destination: "/projects/logo-design/altiscale-lab",
        permanent: true,
      },
      {
        source: "/projects/Build Smarter",
        destination: "/projects/logo-design/altiscale-lab",
        permanent: true,
      },
      {
        source: "/projects/logo-design/altiscalelab-branding",
        destination: "/projects/logo-design/altiscale-lab",
        permanent: true,
      },
      {
        source: "/projects/example.com",
        destination: "/projects/uiux-design",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
