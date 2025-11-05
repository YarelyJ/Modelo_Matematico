/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  // Agrega aquí las variables de entorno que usas
  // (Deben empezar con VITE_ por seguridad)
  // Por ejemplo, si usas VITE_API_URL en 'api.ts':
  readonly VITE_API_URL: string;

  // Agrega cualquier otra que necesites
  // readonly VITE_OTRA_VARIABLE: string;
}
