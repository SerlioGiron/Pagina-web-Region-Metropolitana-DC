# Dockerfile para probar con NGINX
FROM nginx:alpine

# Copiar archivos estáticos
COPY out/ /usr/share/nginx/html/

# Copiar configuración personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
