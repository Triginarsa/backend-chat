// next.config.js
module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://backend-chat-nu.vercel.app/:path*',
        },
      ]
    },
};