import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // Old product URLs, kept so that any shared link keeps working.
  async redirects() {
    return [
      { source: "/products/bms-monitoring", destination: "/products/bms-software", permanent: true },
      { source: "/products/battery-monitoring-iot", destination: "/products/bms-iot", permanent: true },
      { source: "/solutions", destination: "/products", permanent: true },
      { source: "/bms-app", destination: "/products/bms-software", permanent: true },
      { source: "/bms-app/:brand", destination: "/products/bms-software", permanent: true },
    ];
  },
};

export default nextConfig;
