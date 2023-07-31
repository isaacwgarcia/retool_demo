/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    RETOOL_URL: process.env.RETOOL_URL,
    RETOOL_API_KEY: process.env.RETOOL_API_KEY,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_CLIENT_ID: process.env.NEXTAUTH_CLIENT_ID,
    NEXTAUTH_CLIENT_SECRET: process.env.NEXTAUTH_CLIENT_SECRET,
    NEXTAUTH_CLIENT_ISSUER: process.env.NEXTAUTH_CLIENT_ISSUER,
    RETOOL_GROUP_ID: process.env.RETOOL_GROUP_ID,
    CURRENCY_CHART_APP_ID: process.env.CURRENCY_CHART_APP_ID,
  },
};

module.exports = nextConfig;
