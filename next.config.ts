import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy branded micro-sites → new solution pages
      {
        source: "/msm%20environnement/:path*",
        destination: "/solutions/bactrack",
        permanent: true,
      },
      {
        source: "/msm environnement/:path*",
        destination: "/solutions/bactrack",
        permanent: true,
      },
      {
        source: "/msm%20confidentiel/:path*",
        destination: "/solutions/confidentiel",
        permanent: true,
      },
      {
        source: "/msm confidentiel/:path*",
        destination: "/solutions/confidentiel",
        permanent: true,
      },
      {
        source: "/msm%20organic/:path*",
        destination: "/solutions/organic",
        permanent: true,
      },
      {
        source: "/msm organic/:path*",
        destination: "/solutions/organic",
        permanent: true,
      },
      {
        source: "/landingpage/msm1/:path*",
        destination: "/solutions/iaa",
        permanent: true,
      },
      {
        source: "/msm%20stg/:path*",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/msm stg/:path*",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/msm%20carriere/:path*",
        destination: "/carriere",
        permanent: true,
      },
      {
        source: "/msm carriere/:path*",
        destination: "/carriere",
        permanent: true,
      },
      {
        source: "/msm%20logo/:path*",
        destination: "/a-propos",
        permanent: true,
      },
      {
        source: "/msm logo/:path*",
        destination: "/a-propos",
        permanent: true,
      },
      {
        source: "/msm/index.html",
        destination: "/a-propos",
        permanent: true,
      },
      {
        source: "/msm%20declarations/:path*",
        destination: "/legal/confidentialite",
        permanent: true,
      },
      {
        source: "/msm declarations/:path*",
        destination: "/legal/confidentialite",
        permanent: true,
      },
      {
        source: "/msm%20termes/:path*",
        destination: "/legal/termes",
        permanent: true,
      },
      {
        source: "/msm termes/:path*",
        destination: "/legal/termes",
        permanent: true,
      },
      {
        source: "/msm%20utilisation/:path*",
        destination: "/legal/utilisation",
        permanent: true,
      },
      {
        source: "/msm utilisation/:path*",
        destination: "/legal/utilisation",
        permanent: true,
      },
      {
        source: "/msm%20contact/:path*",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/msm contact/:path*",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
