const btn = document.getElementById('menuBtn');
const mob = document.getElementById('mobileNav');

btn?.addEventListener('click', () => {
  const show = mob.style.display !== 'block';
  mob.style.display = show ? 'block' : 'none';
  btn.textContent = show ? 'Close' : 'Menu';
});

// close mobile nav on click
mob?.querySelectorAll('a')?.forEach(a => {
  a.addEventListener('click', () => {
    mob.style.display = 'none';
    btn.textContent = 'Menu';
  });
});
