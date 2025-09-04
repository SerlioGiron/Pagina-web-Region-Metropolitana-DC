#!/bin/bash
# Script para hacer build del proyecto y prepararlo para NGINX
# Guarda este archivo como build-for-nginx.sh

echo "🚀 Construyendo proyecto para NGINX..."

# Limpiar builds anteriores
echo "🧹 Limpiando builds anteriores..."
rm -rf .next
rm -rf out

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Hacer build
echo "🔨 Construyendo proyecto..."
npm run build

# Verificar que se creó la carpeta out
if [ -d "out" ]; then
    echo "✅ Build completado exitosamente"
    echo "📁 Los archivos están en la carpeta 'out'"
    echo ""
    echo "📋 Para desplegar en NGINX:"
    echo "1. Copia el contenido de la carpeta 'out' a tu servidor"
    echo "2. Configura NGINX con el archivo nginx.conf incluido"
    echo "3. Reinicia NGINX"
    echo ""
    echo "🔍 Archivos generados:"
    ls -la out/
else
    echo "❌ Error: No se pudo generar la carpeta 'out'"
    echo "Revisa los errores de build arriba"
    exit 1
fi
