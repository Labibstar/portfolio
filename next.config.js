/** @type {import('next').NextConfig} */
const nextConfig = {
    generateStaticParams: async function ( ) {
        return {
          '/': { page: '/' },
        }
    },
    output: 'export',
    images: { unoptimized: true }
}

module.exports = nextConfig
