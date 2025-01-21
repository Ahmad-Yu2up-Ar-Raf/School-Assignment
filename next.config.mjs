/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',  // Menambahkan domain Cloudinary
        pathname: '/**', // Mengizinkan gambar dengan path apapun di Cloudinary
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',  // Menambahkan domain Unsplash
        pathname: '/**', // Mengizinkan gambar dengan path apapun di Unsplash
      },
    ],
  },
};

export default nextConfig;
