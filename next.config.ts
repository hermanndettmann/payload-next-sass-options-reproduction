import { withPayload } from '@payloadcms/next/withPayload'

import type { NextConfig } from 'next'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'standalone',
  sassOptions: {
    // additionalData: `
    //   @use "src/styles/_bootstrap.scss" as bs;
    //   @use "src/styles/variables/_colors.scss";
    // `,
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
