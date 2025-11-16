// ピンチ操作でのズームを防ぐ
document.addEventListener('gesturestart', function(e) {
  e.preventDefault();
});

// 2本指タッチでのスクロールを無効化
document.addEventListener('touchmove', function(e) {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
}, { passive: false });

const toggleButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".global-nav");

toggleButton.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.getElementById('trigger-contact')?.addEventListener('click', e => {
  e.preventDefault();
  try {
    const target = document.getElementById(e.currentTarget.value);
    
    if (!target) throw new Error('Does Not Exists TargetElement.');

    target.classList.toggle('disabled');
    document.body.classList.toggle('disabled');
  } catch (_e) {
    console.error(_e);
  }
});
document.getElementById('remover-contact')?.addEventListener('click', e => {
  e.preventDefault();
  try {
    const target = document.getElementById(e.currentTarget.value);
    
    if (!target) throw new Error('Does Not Exists TargetElement.');

    target.classList.toggle('disabled');
    document.body.classList.toggle('disabled');
  } catch (_e) {
    console.error(_e);
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserver(entry);
    }
  });
});
document.querySelectorAll('section.content').forEach(target => observer.observe(target));
