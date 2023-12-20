/** @type {import('next').NextConfig} */
const nextConfig = {
  generateMetadata: async (page, meta) => {
    return {
      metadataBase: "https://kanishkumar.in/",
    };
  },
};

module.exports = nextConfig;
