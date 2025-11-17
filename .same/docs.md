# Documentación del Proyecto La Noria

## 📋 Índice

1. [Información General](#información-general)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Guía de Estilos](#guía-de-estilos)
4. [Componentes](#componentes)
5. [Funcionalidades](#funcionalidades)
6. [Mantenimiento](#mantenimiento)

## Información General

### Descripción
Landing page para La Noria, tienda de productos orgánicos con más de 10 años en el mercado. El diseño está basado en el template Orgaxi pero completamente personalizado para la marca.

### Tecnologías
- HTML5
- CSS3 con Variables CSS
- TypeScript
- Vite como bundler
- Bun como runtime

### Repositorio GitHub
https://github.com/hashagenciadigital/la-noria-landing

## Estructura del Proyecto

```
la-noria/
├── .same/               # Archivos de configuración de Same
│   └── docs.md         # Esta documentación
├── public/             # Archivos públicos
│   └── _redirects     # Configuración de rutas
├── src/
│   ├── main.ts        # Lógica principal
│   └── styles.css     # Estilos globales
├── index.html         # Página principal
├── package.json       # Dependencias
├── tsconfig.json      # Configuración TypeScript
├── netlify.toml       # Configuración de despliegue
└── README.md          # Documentación principal
```

## Guía de Estilos

### Paleta de Colores

```css
/* Colores principales de La Noria */
--primary-orange: #f7a642;    /* Naranja principal (logo) */
--primary-brown: #6b4423;     /* Marrón oscuro (logo) */
--primary-green: #7fb539;     /* Verde principal */
--secondary-green: #a8d275;   /* Verde secundario */
--light-cream: #fef8f1;       /* Crema claro */
--light-green: #d4f1c5;       /* Verde claro */
```

### Tipografía

```css
/* Fuentes del proyecto */
--font-heading: 'Outfit', sans-serif;      /* Títulos */
--font-body: 'Inter', sans-serif;          /* Texto general */
--font-script: 'DM Sans', sans-serif;      /* Texto decorativo */
```

### Botones

**IMPORTANTE:** Todos los botones deben tener `border-radius: 50px` (bordes redondeados)

```css
.btn {
    border-radius: 50px;
    padding: 14px 32px;
    font-weight: 600;
}

.btn-primary {
    background: var(--primary-orange);
    color: white;
}

.btn-secondary {
    background: var(--primary-green);
    color: white;
}
```

## Componentes

### 1. Top Bar
Barra superior con información de envío y contacto.
- Color de fondo: `var(--dark-gray)`
- Altura: auto
- Responsive: Se oculta en móvil

### 2. Header/Navbar
Navegación principal sticky.
- Logo de La Noria
- Menú de navegación
- Iconos de búsqueda y carrito
- Responsive: Menú hamburguesa en móvil

### 3. Hero Section
Sección principal con imagen y CTA.
- Fondo: Gradiente crema a verde claro
- Imagen de producto orgánico
- 2 botones de acción

### 4. Promo Banners
Grid de 2 columnas con ofertas.
- Banner grande: 2/3 del ancho
- Banner pequeño: 1/3 del ancho

### 5. About Section
Sección "Sobre Nosotros".
- Grid de 2 columnas
- Imagen con estadística overlay
- Features con iconos

### 6. Categories Section
Grid de 5 categorías de productos.
- Iconos circulares
- Hover effect con elevación
- Responsive: 2 columnas en tablet, 1 en móvil

### 7. Products Section
Grid de productos destacados.
- 5 columnas en desktop
- Imagen circular del producto
- Badge de oferta
- Precio y categoría
- Botón "Agregar al Carrito"

### 8. Services Section
Grid de 4 servicios.
- Fondo naranja gradiente
- Cards blancas con iconos
- Link circular a detalles

### 9. Blog Section
Grid de 3 artículos.
- Imagen destacada
- Fecha y metadata
- Responsive: 1 columna en móvil

### 10. Newsletter
Formulario de suscripción.
- Fondo naranja con pattern
- Input + botón inline

### 11. Footer
Footer con 4 columnas.
- Logo y descripción
- Información de contacto
- Enlaces útiles
- Posts populares

## Funcionalidades

### JavaScript/TypeScript

#### 1. Navegación Suave
```typescript
// Scroll suave entre secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    // ... navegación suave
  });
});
```

#### 2. Carrito de Compras
```typescript
// Contador de productos en carrito
let cartCount = 0;
// Incrementa al hacer clic en "Agregar al Carrito"
```

#### 3. Newsletter
```typescript
// Manejo del formulario de suscripción
newsletterForm.addEventListener('submit', (e) => {
  // ... lógica de suscripción
});
```

#### 4. Scroll Animations
```typescript
// Intersection Observer para animaciones
const observer = new IntersectionObserver((entries) => {
  // ... animaciones al entrar en viewport
});
```

## Mantenimiento

### Actualizar Productos

Para agregar nuevos productos, edita la sección en `index.html`:

```html
<div class="product-card">
    <div class="product-badge sale">Oferta</div>
    <div class="product-image">
        <img src="URL_IMAGEN" alt="Nombre">
    </div>
    <div class="product-price">$PRECIO</div>
    <span class="product-category">Categoría</span>
    <div class="product-rating">⭐⭐⭐⭐⭐</div>
    <h3 class="product-name">Nombre del Producto</h3>
    <button class="btn btn-primary">Agregar al Carrito</button>
</div>
```

### Actualizar Colores

Para cambiar la paleta de colores, edita las variables CSS en `src/styles.css`:

```css
:root {
    --primary-orange: #TU_COLOR;
    --primary-green: #TU_COLOR;
    /* etc... */
}
```

### Despliegue

El proyecto está configurado para desplegarse automáticamente en Netlify:

1. Cada push a `master` despliega automáticamente
2. La configuración está en `netlify.toml`
3. El comando de build es: `bun run build`
4. El directorio de salida es: `dist`

### Scripts Disponibles

```bash
# Desarrollo
bun run dev          # Inicia servidor de desarrollo

# Producción
bun run build        # Construye para producción
bun run preview      # Vista previa del build

# Linting
bun run lint         # Ejecuta el linter
```

## Mejoras Futuras

### Próximas Funcionalidades
- [ ] Integración con backend para productos reales
- [ ] Pasarela de pago
- [ ] Sistema de usuarios
- [ ] Carrito persistente (localStorage)
- [ ] Filtros de productos
- [ ] Búsqueda avanzada
- [ ] Blog funcional con CMS
- [ ] Multiidioma

### Optimizaciones
- [ ] Lazy loading de imágenes
- [ ] Optimización de fuentes
- [ ] Service Worker para PWA
- [ ] Caché de assets
- [ ] Minificación adicional

---

**Última actualización:** Noviembre 2024
**Versión:** 1.0.0
