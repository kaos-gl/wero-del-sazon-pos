# 🍽️ El Wero del Sazón — Punto de Venta (POS)

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6.x-CA4245?logo=reactrouter&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20.x_LTS-339933?logo=nodedotjs&logoColor=white)
![Estado](https://img.shields.io/badge/Estado-Prototipo-orange)

> **Prototipo interactivo** de un sistema de Punto de Venta para el restaurante **El Wero del Sazón**, desarrollado como proyecto final de **Diseño de Interfaces de Usuario**.

---

## 📖 Descripción

**El Wero del Sazón POS** es un prototipo frontend (sin backend real) que simula el flujo operativo completo de un restaurante: toma de comandas, cobro, entregas a domicilio, supervisión y análisis gerencial.

| Principio | Descripción |
|---|---|
| ⚡ **Usabilidad bajo estrés** | Interfaces claras y rápidas de operar en momentos de alta demanda (hora pico). |
| 🛡️ **Tolerancia a fallos** | Confirmaciones, validaciones y mecanismos de deshacer para prevenir y corregir errores del usuario. |
| 📱🖥️ **Adaptabilidad GUI / NUI** | Interfaces gráficas para escritorio (mouse y teclado) e interfaces naturales para tablets y móviles (táctil). |

> ⚠️ **Nota:** Este proyecto **no tiene backend**. Toda la información es simulada mediante datos *mock*.

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| ⚛️ [React](https://react.dev/) | `18.x` | Librería principal de UI |
| ⚡ [Vite](https://vitejs.dev/) | `5.x` | Bundler y servidor de desarrollo |
| 🎨 [Tailwind CSS](https://tailwindcss.com/) | `3.x` | Estilos mediante clases de utilidad |
| 🧭 [React Router DOM](https://reactrouter.com/) | `6.x` | Navegación simulada entre vistas |
| 🟢 [Node.js](https://nodejs.org/) | `20.x LTS` | Entorno de ejecución base |

---

## 👥 Asignación de Módulos

| Integrante | Módulo | Dispositivo objetivo | Alcance | Rama |
|---|---|---|---|---|
| **[Nombre 1]** | 🧑‍🍳 **Mesero** | Tablet (NUI) | Navegación táctil, comandas con modificadores | `feature/ui-mesero` |
| **[Nombre 2]** | 💵 **Cajero** | Escritorio (GUI) | Cobro fraccionado, cálculo de cambio | `feature/ui-cajero` |
| **[Nombre 3]** | 🛵 **Repartidor** | Móvil (NUI) | Rutas, confirmación de entregas | `feature/ui-repartidor` |
| **[Nombre 4]** | 🔐 **Supervisor** | Escritorio / Tablet | Autorización de descuadres con PIN | `feature/ui-supervisor` |
| **[Nombre 5]** | 📊 **Gerente** | Escritorio (GUI) | Dashboard de métricas, alertas visuales | `feature/ui-gerente` |

Cada quien trabaja **solo dentro de su carpeta** en `src/pages/<modulo>/`.

---

## 🔀 Flujo de Trabajo en GitHub (Git Flow Restringido)

- 🚫 La rama **`main` está bloqueada**. Nadie hace commits directos.
- 🌿 Cada integrante trabaja únicamente en la rama de su módulo.
- 🔍 Todo cambio entra por **Pull Request** con **al menos 1 revisión aprobada** de un compañero.
- 🧱 Así el código de uno no rompe la interfaz de otro.

```text
main
 ├── feature/ui-mesero
 ├── feature/ui-cajero
 ├── feature/ui-repartidor
 ├── feature/ui-supervisor
 └── feature/ui-gerente
```

```bash
git checkout main
git pull origin main
git checkout -b feature/ui-mesero      # cambia según tu módulo

git add .
git commit -m "feat(mesero): agrega selector de modificadores"
git push -u origin feature/ui-mesero
```

Después abre un **Pull Request** hacia `main` y pide la revisión de al menos 1 compañero.

| Prefijo | Uso |
|---|---|
| `feat` | Nueva funcionalidad o vista |
| `fix` | Corrección de errores |
| `style` | Cambios visuales (solo clases de Tailwind) |
| `refactor` | Reorganización sin cambiar comportamiento |
| `docs` | Documentación |

---

## 🚀 Instalación y Ejecución Local

Requisitos: [Node.js 20.x LTS](https://nodejs.org/) y [Git](https://git-scm.com/).

```bash
git clone https://github.com/<usuario>/wero-del-sazon-pos.git
cd wero-del-sazon-pos
npm install
npm run dev
```

La app queda en 👉 **http://localhost:5173**

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Previsualiza la build |

---

## 📐 Reglas Estrictas de Diseño y Programación

> Los Pull Requests que incumplan estas reglas serán rechazados.

1. **🚫 Cero Backend:** el estado se maneja con **React Context** o archivos **`.json`** estáticos en `src/data/` (Mock Data).
2. **🎨 Estilos Unificados:** prohibido usar `.css` puros con clases inventadas. Todo se maqueta con **clases de utilidad de Tailwind**.
3. **🌗 Tema Dinámico:** el modo oscuro/claro depende de una variable de estado global (`ThemeContext`). Usa siempre variantes `dark:`.
4. **👆 Accesibilidad Táctil:** en **Mesero** y **Repartidor**, todo botón interactivo mide mínimo `w-12 h-12` (48×48 px).

```jsx
// ❌ Incorrecto
<button className="btn-cobrar">Cobrar</button>

// ✅ Correcto
<button className="h-12 min-w-12 rounded-lg bg-emerald-600 px-4 font-semibold text-white hover:bg-emerald-700">
  Cobrar
</button>
```

```jsx
// Tema oscuro/claro
<div className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">...</div>
```

---

## 🗂️ Estructura del proyecto

```text
src/
 ├── components/shared/   # Layout, ThemeToggle y componentes compartidos
 ├── context/             # ThemeContext (tema global)
 ├── data/                # Mock data (.json)
 └── pages/
      ├── Home.jsx
      ├── mesero/
      ├── cajero/
      ├── repartidor/
      ├── supervisor/
      └── gerente/
```

---

## 📄 Licencia

Proyecto académico con fines educativos — **Diseño de Interfaces de Usuario**.
