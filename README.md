# Sitio web corporativo de servicios tecnológicos

Sitio estático (HTML, CSS, Bootstrap 5 y JavaScript) para promocionar servicios de TI en Mérida, Yucatán. Las cotizaciones se reciben por WhatsApp. Sin backend ni compilación.

## Configuración rápida

- **Número de WhatsApp y nombre comercial:** `assets/js/main.js`, objeto `CONFIG` (`whatsappNumber` con país + lada, sin espacios ni signos).
- **Dominio:** reemplaza `https://TU-SITIO.netlify.app` en `index.html`, `robots.txt` y `sitemap.xml` por tu URL real.
- **Imágenes:** `assets/img/` contiene ilustraciones generadas; reemplázalas por fotos propias con los mismos nombres (idealmente < 200 KB cada una).

## 1. Probar localmente

```
cd sitio-ti
python -m http.server 8000
```
Abre http://localhost:8000 (también puedes abrir `index.html` directamente).

## 2. Crear repositorio en GitHub

```
git init
git add .
git commit -m "Sitio inicial"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```
(Crea antes el repositorio vacío en github.com.)

## 3. Conectar con Netlify

1. Entra a https://app.netlify.com → **Add new site → Import an existing project**.
2. Elige **GitHub** y autoriza el acceso; selecciona el repositorio.

## 4. Publicar

- Build command: *(vacío)*
- Publish directory: `/` (raíz; si el sitio está dentro de una subcarpeta, indica esa carpeta)
- Pulsa **Deploy**. Cada `git push` republica automáticamente.

## 5. Dominio personalizado

En Netlify: **Domain management → Add a domain**, y configura en tu registrador los DNS que Netlify indique. El certificado HTTPS se genera automáticamente. Después actualiza la URL en `index.html`, `robots.txt` y `sitemap.xml`.
