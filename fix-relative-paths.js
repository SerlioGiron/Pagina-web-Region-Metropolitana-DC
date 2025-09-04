const fs = require('fs');
const path = require('path');

// Función para convertir rutas absolutas a relativas en archivos HTML
function convertToRelativePaths(dir, depth = 0) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            convertToRelativePaths(fullPath, depth + 1);
        } else if (item.endsWith('.html')) {
            console.log(`Procesando: ${fullPath}`);
            
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Calcular el prefijo relativo basado en la profundidad
            const relativePrefix = depth === 0 ? './' : '../'.repeat(depth);
            
            // Reemplazar rutas absolutas por relativas
            content = content.replace(/href="\/_next\//g, `href="${relativePrefix}_next/`);
            content = content.replace(/src="\/_next\//g, `src="${relativePrefix}_next/`);
            content = content.replace(/href="\/assets\//g, `href="${relativePrefix}assets/`);
            content = content.replace(/src="\/assets\//g, `src="${relativePrefix}assets/`);
            content = content.replace(/href="\/favicon\.ico"/g, `href="${relativePrefix}favicon.ico"`);
            content = content.replace(/src="\/favicon\.ico"/g, `src="${relativePrefix}favicon.ico"`);
            
            // Reemplazar otras rutas estáticas comunes
            content = content.replace(/href="\/([^"]+\.(css|js|ico|png|jpg|jpeg|gif|svg|pdf))"/g, `href="${relativePrefix}$1"`);
            content = content.replace(/src="\/([^"]+\.(css|js|ico|png|jpg|jpeg|gif|svg))"/g, `src="${relativePrefix}$1"`);
            
            fs.writeFileSync(fullPath, content);
            console.log(`✅ Convertido: ${fullPath}`);
        }
    });
}

// Función principal
function main() {
    const outDir = path.join(__dirname, 'out');
    
    if (!fs.existsSync(outDir)) {
        console.error('❌ La carpeta "out" no existe. Ejecuta "npm run build" primero.');
        process.exit(1);
    }
    
    console.log('🔄 Convirtiendo rutas absolutas a relativas...');
    convertToRelativePaths(outDir);
    console.log('✅ ¡Conversión completada! Ahora puedes abrir index.html directamente.');
}

main();
