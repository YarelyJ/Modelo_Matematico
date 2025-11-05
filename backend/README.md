# NSL-KDD Analysis API - Django Backend

Backend API para análisis del dataset NSL-KDD (Network Intrusion Detection).

## Características

- API REST completa con Django REST Framework
- Análisis estadístico del dataset NSL-KDD
- Correlaciones y distribuciones de datos
- CORS configurado para frontend React
- Listo para desplegar en Render

## Endpoints Disponibles

- `GET /api/dataset/overview/` - Información general del dataset
- `GET /api/dataset/statistics/` - Estadísticas descriptivas
- `GET /api/dataset/correlations/` - Análisis de correlaciones
- `GET /api/dataset/protocols/` - Distribución de protocolos
- `GET /api/dataset/classification/` - Distribución de clasificación
- `GET /api/dataset/features/` - Análisis de características importantes

## Instalación Local

\`\`\`bash
# Crear entorno virtual
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate

# Instalar dependencias
pip install -r requirements.txt

# Ejecutar migraciones
python manage.py migrate

# Crear superusuario (opcional)
python manage.py createsuperuser

# Ejecutar servidor
python manage.py runserver
\`\`\`

La API estará disponible en `http://localhost:8000/api/`

## Despliegue en Render

**Ver la guía completa de despliegue:** Consulta el archivo `DEPLOYMENT.md` en la raíz del proyecto para instrucciones detalladas paso a paso.

### Quick Start

1. Sube el código a GitHub
2. Conecta tu repositorio en Render.com
3. Selecciona "New Web Service"
4. Configura:
   - Build Command: `./build.sh`
   - Start Command: `gunicorn nslkdd_api.wsgi:application`
5. Agrega variables de entorno:
   - `DJANGO_SECRET_KEY` (genera una nueva)
   - `DEBUG=False`
   - `FRONTEND_URL` (URL de tu frontend en Vercel)

Render detectará automáticamente `render.yaml` y configurará todo por ti.

## Variables de Entorno

- `DJANGO_SECRET_KEY` - Clave secreta de Django (requerida)
- `DEBUG` - Modo debug (False en producción)
- `FRONTEND_URL` - URL del frontend para CORS

## Tecnologías

- Django 5.0
- Django REST Framework
- pandas & numpy para análisis de datos
- CORS Headers para comunicación con frontend
- Gunicorn como servidor WSGI
- WhiteNoise para archivos estáticos
