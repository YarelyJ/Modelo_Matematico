# 🚀 Guía de Despliegue - Sistema Distribuido NSL-KDD

Este proyecto está configurado como un sistema distribuido con:
- **Backend Django** → Render
- **Frontend React** → Vercel

---

## 📋 Requisitos Previos

- Cuenta en [Render](https://render.com)
- Cuenta en [Vercel](https://vercel.com)
- Repositorio Git (GitHub, GitLab, o Bitbucket)

---

## 🔧 Parte 1: Desplegar Backend Django en Render

### Paso 1: Preparar el Repositorio

1. Sube tu código a GitHub/GitLab/Bitbucket
2. Asegúrate de que la carpeta `backend/` esté en la raíz del repositorio

### Paso 2: Crear Web Service en Render

1. Ve a [Render Dashboard](https://dashboard.render.com)
2. Click en **"New +"** → **"Web Service"**
3. Conecta tu repositorio Git
4. Configura el servicio:

\`\`\`
Name: nslkdd-backend
Region: Oregon (US West) o el más cercano
Branch: main
Root Directory: backend
Runtime: Python 3
Build Command: ./build.sh
Start Command: gunicorn nslkdd_api.wsgi:application
\`\`\`

### Paso 3: Variables de Entorno en Render

En la sección **"Environment"**, agrega:

\`\`\`
PYTHON_VERSION=3.11.0
DJANGO_SETTINGS_MODULE=nslkdd_api.settings
SECRET_KEY=tu-clave-secreta-aqui-genera-una-nueva
DEBUG=False
ALLOWED_HOSTS=.onrender.com
FRONTEND_URL=https://tu-frontend.vercel.app
\`\`\`

**Generar SECRET_KEY:**
\`\`\`python
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
\`\`\`

### Paso 4: Desplegar

1. Click en **"Create Web Service"**
2. Espera a que termine el build (5-10 minutos)
3. Copia la URL del backend: `https://nslkdd-backend.onrender.com`

### Paso 5: Verificar el Backend

Visita: `https://tu-backend.onrender.com/api/dataset/overview/`

Deberías ver un JSON con los datos del dataset.

---

## 🎨 Parte 2: Desplegar Frontend React en Vercel

### Paso 1: Configurar Variables de Entorno Localmente

En la carpeta `frontend/`, crea un archivo `.env`:

\`\`\`env
VITE_API_URL=https://tu-backend.onrender.com
\`\`\`

**⚠️ Importante:** Reemplaza `tu-backend.onrender.com` con la URL real de tu backend de Render.

### Paso 2: Desplegar en Vercel

#### Opción A: Desde la Terminal

\`\`\`bash
cd frontend
npm install -g vercel
vercel login
vercel
\`\`\`

Sigue las instrucciones:
- **Set up and deploy?** → Yes
- **Which scope?** → Tu cuenta
- **Link to existing project?** → No
- **Project name?** → nslkdd-frontend
- **Directory?** → ./
- **Override settings?** → No

#### Opción B: Desde el Dashboard de Vercel

1. Ve a [Vercel Dashboard](https://vercel.com/dashboard)
2. Click en **"Add New..."** → **"Project"**
3. Importa tu repositorio Git
4. Configura el proyecto:

\`\`\`
Framework Preset: Vite
Root Directory: frontend
Build Command: npm run build
Output Directory: dist
Install Command: npm install
\`\`\`

### Paso 3: Configurar Variables de Entorno en Vercel

1. En el proyecto de Vercel, ve a **"Settings"** → **"Environment Variables"**
2. Agrega:

\`\`\`
Name: VITE_API_URL
Value: https://tu-backend.onrender.com
Environment: Production, Preview, Development
\`\`\`

### Paso 4: Re-desplegar

1. Ve a **"Deployments"**
2. Click en los tres puntos del último deployment
3. Click en **"Redeploy"**

### Paso 5: Verificar el Frontend

Visita tu URL de Vercel: `https://nslkdd-frontend.vercel.app`

Deberías ver el dashboard con todas las visualizaciones cargadas.

---

## 🔄 Parte 3: Conectar Frontend y Backend

### Actualizar CORS en el Backend

1. En Render, ve a tu servicio backend
2. En **"Environment"**, actualiza `FRONTEND_URL`:

\`\`\`
FRONTEND_URL=https://tu-frontend.vercel.app
\`\`\`

3. Guarda y espera a que se redespliegue automáticamente

### Verificar la Conexión

1. Abre el frontend en tu navegador
2. Abre las DevTools (F12) → Console
3. No deberías ver errores de CORS
4. Los datos deberían cargarse correctamente

---

## 🐛 Solución de Problemas

### Error: CORS Policy

**Problema:** El frontend no puede conectarse al backend.

**Solución:**
1. Verifica que `FRONTEND_URL` en Render tenga la URL correcta de Vercel
2. Asegúrate de que no haya espacios ni barras finales
3. Redesplega el backend después de cambiar variables de entorno

### Error: API URL undefined

**Problema:** El frontend no encuentra la variable de entorno.

**Solución:**
1. Verifica que `VITE_API_URL` esté configurada en Vercel
2. Las variables de Vite DEBEN empezar con `VITE_`
3. Redesplega el frontend después de agregar variables

### Error: 500 Internal Server Error

**Problema:** El backend Django tiene un error.

**Solución:**
1. En Render, ve a **"Logs"** para ver el error
2. Verifica que todas las dependencias estén en `requirements.txt`
3. Verifica que `SECRET_KEY` esté configurada

### Backend muy lento en Render (Free Tier)

**Problema:** El servicio gratuito de Render se "duerme" después de 15 minutos de inactividad.

**Solución:**
1. Upgrade a plan pagado ($7/mes)
2. O usa un servicio de "keep-alive" como [UptimeRobot](https://uptimerobot.com)

---

## 📊 Arquitectura del Sistema

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                         USUARIO                              │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                  FRONTEND (Vercel)                           │
│  - React + TypeScript + Vite                                 │
│  - Recharts para visualizaciones                             │
│  - Tailwind CSS                                              │
│  - URL: https://nslkdd-frontend.vercel.app                   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ HTTP/HTTPS
                         │ (API Calls)
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                  BACKEND (Render)                            │
│  - Django + Django REST Framework                            │
│  - Pandas, NumPy, Matplotlib                                 │
│  - Análisis de datos NSL-KDD                                 │
│  - URL: https://nslkdd-backend.onrender.com                  │
└─────────────────────────────────────────────────────────────┘
\`\`\`

---

## 🔐 Seguridad

### Producción Checklist

- [ ] `DEBUG=False` en el backend
- [ ] `SECRET_KEY` única y segura (no la del código)
- [ ] CORS configurado solo para tu dominio frontend
- [ ] Variables de entorno configuradas (no hardcodeadas)
- [ ] HTTPS habilitado (automático en Render y Vercel)

---

## 📝 Comandos Útiles

### Backend (Local)

\`\`\`bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py runserver
\`\`\`

### Frontend (Local)

\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`

### Ver Logs en Render

\`\`\`bash
# Desde el dashboard de Render
Logs → Live Logs
\`\`\`

### Ver Logs en Vercel

\`\`\`bash
# Desde el dashboard de Vercel
Deployments → [Tu deployment] → View Function Logs
\`\`\`

---

## 🎯 URLs Finales

Después del despliegue, tendrás:

- **Backend API:** `https://nslkdd-backend.onrender.com/api/`
- **Frontend App:** `https://nslkdd-frontend.vercel.app`
- **API Docs:** `https://nslkdd-backend.onrender.com/api/`

---

## 📚 Recursos Adicionales

- [Documentación de Render](https://render.com/docs)
- [Documentación de Vercel](https://vercel.com/docs)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [Vite Documentation](https://vitejs.dev/)

---

## 💡 Próximos Pasos

1. **Agregar autenticación:** JWT tokens para proteger la API
2. **Base de datos:** PostgreSQL en Render para almacenar datos
3. **Caché:** Redis para mejorar performance
4. **Monitoreo:** Sentry para tracking de errores
5. **CI/CD:** GitHub Actions para tests automáticos

---

## 🆘 Soporte

Si tienes problemas:

1. Revisa los logs en Render y Vercel
2. Verifica las variables de entorno
3. Asegúrate de que las URLs estén correctas
4. Revisa la consola del navegador para errores de CORS

---

**¡Listo!** Tu sistema distribuido NSL-KDD está desplegado y funcionando. 🎉
