// Helper para manejar rutas de manera consistente
export const getRoutePath = (path) => {
  // Si hay un basePath configurado en next.config, se añadirá automáticamente
  // Este helper asegura que todas las rutas sean consistentes
  if (path.startsWith('/')) {
    return path;
  }
  return `/${path}`;
};

// Rutas principales de la aplicación
export const ROUTES = {
  HOME: '/',
  SOBRE_NOSOTROS: '/SobreNosotros',
  DEPARTAMENTOS: '/Departamentos',
  DEPARTAMENTOS_MARCO_NORMATIVO: '/Departamentos/Marco-Normativo',
  MARCO_NORMATIVO: {
    BASE: '/Departamentos/Marco-Normativo',
    LICENCIA_SANITARIA: {
      ESTANDARES: '/Departamentos/Marco-Normativo/licencia-sanitaria/estandares',
      REQUISITOS: '/Departamentos/Marco-Normativo/licencia-sanitaria/Requisitos'
    },
    MARCO_JURIDICO: '/Departamentos/Marco-Normativo/marco-juridico',
    SOBRE_NOSOTROS: '/Departamentos/Marco-Normativo/sobre-nosotros',
    UNIDADES: {
      BASE: '/Departamentos/Marco-Normativo/unidades',
      DOCUMENTOS: '/Departamentos/Marco-Normativo/unidades/documentos',
      NORMATIVA: '/Departamentos/Marco-Normativo/unidades/normativa'
    }
  },
  ESTABLECIMIENTOS: {
    CIS: '/Establecimientos/CIS',
    UAPS: '/Establecimientos/UAPS', 
    REDES: '/Establecimientos/Redes'
  },
  BLOG: '/Blog-page'
};
