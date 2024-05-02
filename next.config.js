/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.dummyjson.com',
          port: '',
          pathname: '/product-images/**',
        },
        {
          protocol: 'https',
          hostname: 'old-images.hb.ru-msk.vkcs.cloud',
          port: '',
          pathname: '/uploads/**/**',
        },
      ],
    },
  }


  // https:/old-images.hb.ru-msk.vkcs.cloud/uploads/2021-03-23/skillbox.png