// Portfolio Main JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Get common elements
  const menuOpen = document.getElementById("menu-open");
  const menuClose = document.getElementById("menu-close");
  const nav = document.querySelector(".nav");
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  
  // Mobile menu functionality
  if (menuOpen && menuClose && nav) {
    menuOpen.addEventListener("click", () => {
      nav.classList.add("open");
    });

    menuClose.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  }

  // Dark mode functionality
  if (themeToggle) {
    const themeIcon = themeToggle.querySelector('i');
    
    // Load saved theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      body.setAttribute('data-theme', 'dark');
      if (themeIcon) themeIcon.className = 'fas fa-sun';
    }

    themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        if (themeIcon) themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
      } else {
        body.setAttribute('data-theme', 'dark');
        if (themeIcon) themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
      }
    });
  }

  // Add smooth scroll to anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Add fade-in animation to sections on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  // Observe elements for fade-in animation
  const animateElements = document.querySelectorAll('.card, .project-card, .skill-card');
  animateElements.forEach(element => {
    observer.observe(element);
  });
});
