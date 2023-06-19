/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DB_URI: "mongodb://0.0.0.0:27017/bazzar"
    }
}

module.exports = nextConfig
