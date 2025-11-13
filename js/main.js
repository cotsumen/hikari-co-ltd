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

