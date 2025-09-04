# Instrucciones para instalar y probar NGINX en Windows

## Instalación

### Opción A: Usando Chocolatey (Recomendado)
```powershell
# Instalar Chocolatey si no lo tienes
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Instalar NGINX
choco install nginx
```

### Opción B: Descarga manual
1. Ir a http://nginx.org/en/download.html
2. Descargar la versión Windows
3. Extraer en `C:\nginx`

## Configuración

1. Hacer build del proyecto:
```bash
npm run build
```

2. Copiar los archivos:
- Copia todo el contenido de la carpeta `out` a `C:\nginx\html`
- Copia `nginx.conf` a `C:\nginx\conf\nginx.conf`

3. Editar `C:\nginx\conf\nginx.conf` y cambiar:
```nginx
root C:/nginx/html;  # Ruta donde copiaste los archivos
```

## Ejecutar NGINX

```powershell
# Ir al directorio de NGINX
cd C:\nginx

# Iniciar NGINX
.\nginx.exe

# Para detener
.\nginx.exe -s stop

# Para recargar configuración
.\nginx.exe -s reload
```

## Verificar

Abrir http://localhost en tu navegador. Deberías ver tu sitio web.

## Logs

Los logs están en:
- `C:\nginx\logs\access.log`
- `C:\nginx\logs\error.log`

## Solución de Problemas

### Puerto ocupado
Si el puerto 80 está ocupado:
1. Cambiar en `nginx.conf`: `listen 8080;`
2. Acceder a http://localhost:8080

### Permisos
Ejecutar PowerShell como administrador si hay problemas de permisos.

### Archivos no encontrados
Verificar que:
1. Los archivos están en la carpeta correcta
2. La ruta en `nginx.conf` es correcta
3. NGINX puede acceder a la carpeta (permisos)
