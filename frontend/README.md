# NSL-KDD Frontend - React + Vite

Frontend del sistema de análisis del dataset NSL-KDD construido con React, TypeScript, Vite y Tailwind CSS.

## 🚀 Características

- **React 18** con TypeScript
- **Vite** para desarrollo rápido
- **Tailwind CSS** para estilos
- **Recharts** para visualizaciones
- **Axios** para llamadas a la API
- **Lucide React** para iconos

## 📋 Requisitos Previos

- Node.js 18+ y npm/pnpm
- Backend Django ejecutándose (ver `/backend`)

## 🛠️ Instalación

\`\`\`bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env

# Editar .env con la URL de tu backend
# VITE_API_URL=http://localhost:8000/api
\`\`\`

## 🏃 Desarrollo Local

\`\`\`bash
# Iniciar servidor de desarrollo
npm run dev

# La aplicación estará disponible en http://localhost:3000
\`\`\`

## 🏗️ Build para Producción

\`\`\`bash
# Crear build optimizado
npm run build

# Preview del build
npm run preview
\`\`\`

## 🌐 Despliegue en Vercel

**Ver la guía completa de despliegue:** Consulta el archivo `DEPLOYMENT.md` en la raíz del proyecto para instrucciones detalladas paso a paso.

### Opción 1: Desde la UI de Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Importa tu repositorio
3. Vercel detectará automáticamente Vite
4. Agrega la variable de entorno:
   - `VITE_API_URL`: URL de tu backend en Render

### Opción 2: Vercel CLI

\`\`\`bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
\`\`\`

### Configuración de Variables de Entorno en Vercel

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega: `VITE_API_URL` = `https://tu-backend.onrender.com/api`

## 📁 Estructura del Proyecto

\`\`\`
frontend/
├── src/
│   ├── components/          # Componentes React
│   │   ├── DatasetOverview.tsx
│   │   ├── ProtocolDistribution.tsx
│   │   ├── ClassificationChart.tsx
│   │   ├── CorrelationMatrix.tsx
│   │   └── StatisticsTable.tsx
│   ├── services/            # Servicios API
│   │   └── api.ts
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Entry point
│   └── index.css            # Estilos globales
├── public/                  # Archivos estáticos
├── index.html               # HTML template
├── vite.config.ts           # Configuración Vite
├── tailwind.config.js       # Configuración Tailwind
├── vercel.json              # Configuración Vercel
└── package.json
\`\`\`

## 🔌 Conexión con el Backend

El frontend se conecta al backend Django a través de la variable de entorno `VITE_API_URL`.

**Desarrollo:**
\`\`\`env
VITE_API_URL=http://localhost:8000/api
\`\`\`

**Producción:**
\`\`\`env
VITE_API_URL=https://tu-backend.onrender.com/api
\`\`\`

## 📊 Componentes Principales

- **DatasetOverview**: Información general del dataset
- **ProtocolDistribution**: Gráfico de distribución de protocolos (TCP, UDP, ICMP)
- **ClassificationChart**: Gráfico de clasificación (Normal vs Anomaly)
- **CorrelationMatrix**: Top 10 correlaciones con la clase objetivo
- **StatisticsTable**: Tabla de estadísticas descriptivas

## 🎨 Personalización

Los colores y estilos se pueden modificar en:
- `tailwind.config.js`: Configuración de Tailwind
- `src/index.css`: Estilos globales
- Componentes individuales: Estilos inline con Tailwind

## 🐛 Troubleshooting

**Error de CORS:**
- Verifica que el backend tenga CORS configurado correctamente
- Asegúrate de que `VITE_API_URL` apunte al backend correcto

**Error de conexión:**
- Verifica que el backend esté ejecutándose
- Revisa la consola del navegador para errores de red

**Build falla:**
- Ejecuta `npm install` para asegurar todas las dependencias
- Verifica que no haya errores de TypeScript con `npm run build`

## 📝 Scripts Disponibles

- `npm run dev`: Inicia servidor de desarrollo
- `npm run build`: Crea build de producción
- `npm run preview`: Preview del build
- `npm run lint`: Ejecuta ESLint

## 🔗 Enlaces Útiles

- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de React](https://react.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
- [Documentación de Recharts](https://recharts.org/)
- [Documentación de Vercel](https://vercel.com/docs)
