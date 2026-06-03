/* Dark mode toggle: adds a toggle button, persists preference in localStorage */
(function(){
  const STORAGE_KEY = 'theme';
  const CLASS = 'dark';
  const body = document.body;

  function applyTheme(theme){
    if(theme === 'dark') body.classList.add(CLASS);
    else body.classList.remove(CLASS);
  }

  function getInitialTheme(){
    const saved = localStorage.getItem(STORAGE_KEY);
    if(saved) return saved;
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  }

  function createToggle(){
    const btn = document.createElement('button');
    btn.className = 'dark-toggle';
    btn.setAttribute('aria-label', 'Toggle dark mode');
    btn.innerHTML = '<span class="icon">🌙</span>';
    btn.addEventListener('click', () => {
      const isDark = body.classList.toggle(CLASS);
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
      updateIcon(btn, isDark);
    });
    return btn;
  }

  function updateIcon(btn, isDark){
    btn.innerHTML = isDark ? '<span class="icon">☀️</span>' : '<span class="icon">🌙</span>';
  }

  function init(){
    const theme = getInitialTheme();
    applyTheme(theme);
    const btn = createToggle();
    updateIcon(btn, theme === 'dark');
    // append to body so it appears on all pages without changing templates
    document.body.appendChild(btn);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
