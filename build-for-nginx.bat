@echo off
REM Script para hacer build del proyecto y prepararlo para NGINX en Windows
REM Guarda este archivo como build-for-nginx.bat

echo 🚀 Construyendo proyecto para NGINX...

REM Limpiar builds anteriores
echo 🧹 Limpiando builds anteriores...
if exist ".next" rmdir /s /q ".next"
if exist "out" rmdir /s /q "out"

REM Instalar dependencias
echo 📦 Instalando dependencias...
npm install

REM Hacer build
echo 🔨 Construyendo proyecto...
npm run build

REM Verificar que se creó la carpeta out
if exist "out" (
    echo ✅ Build completado exitosamente
    echo 📁 Los archivos están en la carpeta 'out'
    echo.
    echo 📋 Para desplegar en NGINX:
    echo 1. Copia el contenido de la carpeta 'out' a tu servidor
    echo 2. Configura NGINX con el archivo nginx.conf incluido
    echo 3. Reinicia NGINX
    echo.
    echo 🔍 Archivos generados:
    dir out /b
) else (
    echo ❌ Error: No se pudo generar la carpeta 'out'
    echo Revisa los errores de build arriba
    pause
    exit /b 1
)

pause
