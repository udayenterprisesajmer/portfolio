// Uday Enterprises - shared JS
(function(){
  // Highlight active nav link based on current path
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(a=>{
    const href = a.getAttribute('href');
    if(href && (href === path || (path === 'index.html' && href === './'))){
      a.classList.add('active');
      a.setAttribute('aria-current','page');
    }
  });

  // Simple year update
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
})();
