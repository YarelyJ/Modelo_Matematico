/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  // Esta línea es la que soluciona tu error en api.ts
  readonly VITE_API_URL: string;

  // Agrega aquí cualquier otra variable de entorno que uses
}
