# NSL-KDD Dataset Analysis - Sistema Distribuido

Sistema completo de análisis del dataset NSL-KDD con arquitectura distribuida:
- **Backend**: Django REST Framework (Python)
- **Frontend**: React + Vite + TypeScript

## 🏗️ Arquitectura

\`\`\`
┌─────────────────┐         ┌─────────────────┐
│   Frontend      │         │    Backend      │
│   React + Vite  │ ◄─────► │    Django       │
│   (Vercel)      │   API   │    (Render)     │
└─────────────────┘         └─────────────────┘
\`\`\`

## 📁 Estructura del Proyecto

\`\`\`
.
├── backend/              # Backend Django
│   ├── nslkdd_api/      # Configuración Django
│   ├── analysis/        # App de análisis
│   ├── requirements.txt
│   ├── render.yaml
│   └── README.md
│
├── frontend/            # Frontend React
│   ├── src/
│   │   ├── components/  # Componentes React
│   │   ├── services/    # API services
│   │   └── App.tsx
│   ├── vercel.json
│   └── README.md
│
└── README.md           # Este archivo
\`\`\`

## 🚀 Inicio Rápido

### Backend (Django)

\`\`\`bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
\`\`\`

El backend estará disponible en `http://localhost:8000`

### Frontend (React)

\`\`\`bash
cd frontend
npm install
cp .env.example .env
# Editar .env con VITE_API_URL=http://localhost:8000/api
npm run dev
\`\`\`

El frontend estará disponible en `http://localhost:3000`

## 🌐 Despliegue

### Backend en Render

1. Crea una cuenta en [Render](https://render.com)
2. Conecta tu repositorio
3. Selecciona la carpeta `/backend`
4. Render detectará automáticamente `render.yaml`
5. El backend se desplegará automáticamente

**URL del backend**: `https://tu-app.onrender.com`

### Frontend en Vercel

1. Crea una cuenta en [Vercel](https://vercel.com)
2. Importa tu repositorio
3. Configura el directorio raíz: `frontend`
4. Agrega variable de entorno:
   - `VITE_API_URL`: URL de tu backend en Render
5. Deploy

**URL del frontend**: `https://tu-app.vercel.app`

## 📊 Endpoints de la API

- `GET /api/overview/` - Información general del dataset
- `GET /api/statistics/` - Estadísticas descriptivas
- `GET /api/correlations/` - Correlaciones con la clase
- `GET /api/protocols/` - Distribución de protocolos
- `GET /api/classification/` - Clasificación Normal vs Anomaly
- `GET /api/feature-distribution/<feature>/` - Distribución de una característica

## 🔧 Tecnologías

### Backend
- Django 5.1
- Django REST Framework
- pandas, numpy, scipy
- django-cors-headers
- gunicorn

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Recharts
- Axios

## 📝 Documentación Detallada

- [Backend README](./backend/README.md)
- [Frontend README](./frontend/README.md)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👥 Autores

- Tu Nombre - Desarrollo inicial

## 🙏 Agradecimientos

- Dataset NSL-KDD por proporcionar datos de calidad para IDS
- Comunidad de Django y React
