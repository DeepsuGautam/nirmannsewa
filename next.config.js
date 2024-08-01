// next.config.js

const config = {
  experimental: {
    serverActions: {
      bodySizeLimit: '200mb',
    },
    // Experimental options can change; ensure these are valid for your Next.js version
  }
};

module.exports = config;
