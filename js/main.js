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

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry);
    }
  });
});
document.querySelectorAll('section.content').forEach(target => observer.observe(target));
