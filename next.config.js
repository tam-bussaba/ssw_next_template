// next.config.js

const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false, // ปิดการใช้งาน fs หากไม่จำเป็น
      module: false, // ปิดการใช้งาน module หากไม่จำเป็น
    };
    return config;
  },
};

module.exports = nextConfig;
