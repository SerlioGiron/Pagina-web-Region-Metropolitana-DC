import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Habilita la exportación estática
  trailingSlash: true, // Añade slash final a las URLs
  images: {
    unoptimized: true // Desactiva la optimización de imágenes para export estático
  },
  // Para desarrollo y servidor web (NGINX)
  // assetPrefix: './',
  // basePath: '',
  
  // Si tu sitio se va a servir desde un subdirectorio, descomenta y ajusta:
  // basePath: '/mi-subdirectorio',
  // assetPrefix: '/mi-subdirectorio',
};

export default nextConfig;
