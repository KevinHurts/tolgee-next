import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/utils/i18nRequestConfig.ts");

const nextConfig: NextConfig = {
    /* config options here */
};

export default withNextIntl(nextConfig);
