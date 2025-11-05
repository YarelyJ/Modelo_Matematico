/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  // Agrega aquí las definiciones de tus variables de entorno
  // Por ejemplo:
  readonly VITE_API_URL: string;
  readonly VITE_SOME_OTHER_KEY: string;
  // ...
}
