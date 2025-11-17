// La Noria - Landing Page TypeScript

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const href = anchor.getAttribute('href');
    if (href && href !== '#') {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Newsletter Form Handling
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]') as HTMLInputElement;
    if (emailInput && emailInput.value) {
      alert(`¡Gracias por suscribirte! Te enviaremos novedades a ${emailInput.value}`);
      emailInput.value = '';
    }
  });
}

// Cart Functionality
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

document.querySelectorAll('.product-card .btn-primary').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    cartCount++;
    if (cartCountElement) {
      cartCountElement.textContent = cartCount.toString();
    }

    // Add animation feedback
    const btn = e.target as HTMLElement;
    btn.textContent = '✓ Agregado';
    btn.style.background = '#7fb539';

    setTimeout(() => {
      btn.textContent = 'Agregar al Carrito';
      btn.style.background = '';
    }, 2000);
  });
});

// Header Scroll Effect
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (header) {
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Search Functionality
const searchBtn = document.querySelector('.search-btn');
if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    const searchTerm = prompt('¿Qué producto estás buscando?');
    if (searchTerm) {
      alert(`Buscando: ${searchTerm}... (funcionalidad en desarrollo)`);
    }
  });
}

console.log('La Noria - Productos Orgánicos | Sitio cargado correctamente');
