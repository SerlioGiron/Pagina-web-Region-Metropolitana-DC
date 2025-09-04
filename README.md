# Página Web - Región Sanitaria Metropolitana DC

Esta es una aplicación web desarrollada con [Next.js](https://nextjs.org) para la Región Sanitaria Metropolitana del Distrito Central.

## Desarrollo Local

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build para Producción

### Para servidores con Node.js
```bash
npm run build
npm run start
```

### Para servidores NGINX (exportación estática)

El proyecto está configurado para exportarse como sitio estático compatible con NGINX.

```bash
# Build normal para servidores web (NGINX, Apache, etc.)
npm run build

# Build con rutas relativas para abrir directamente desde el sistema de archivos
npm run build-static
```

#### En Windows:
```bash
# Ejecutar el script de build
build-for-nginx.bat
```

#### En Linux/Mac:
```bash
# Hacer ejecutable el script
chmod +x build-for-nginx.sh
# Ejecutar el script
./build-for-nginx.sh
```

#### Manual:
```bash
npm install
npm run build
```

Esto generará una carpeta `out` con todos los archivos estáticos listos para servir con NGINX.

## Configuración de NGINX

1. Copia el contenido de la carpeta `out` a tu directorio web (ej: `/var/www/html/`)
2. Usa la configuración de `nginx.conf` incluida en el proyecto
3. Ajusta las rutas en el archivo de configuración según tu setup
4. Reinicia NGINX

### Ejemplo de configuración NGINX:
```nginx
server {
    listen 80;
    server_name tu-dominio.com;
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }
}
```

## Estructura del Proyecto

- `/src/app` - Páginas de la aplicación (App Router)
- `/src/components` - Componentes reutilizables
- `/public` - Archivos estáticos (imágenes, documentos, etc.)
- `/public/assets` - Assets principales (logos, imágenes)
- `/public/documents` - Documentos PDF y archivos descargables

## Problemas Comunes

### Error con rutas en NGINX
Si tienes problemas con las rutas:
1. Verifica que `output: 'export'` esté en `next.config.ts`
2. Asegúrate de usar la configuración correcta de NGINX
3. Verifica que todos los enlaces usen rutas absolutas

### Imágenes no cargan
1. Verifica que `images: { unoptimized: true }` esté en `next.config.ts`
2. Asegúrate de que las imágenes estén en la carpeta `/public`

## Deploy on Vercel

También puedes desplegar fácilmente en [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consulta la [documentación de deployment de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.
