/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { 
        loader: 'imgix',
    path: 'the "domain" of your Imigix source',
        unoptimized: true }
}

module.exports = nextConfig
