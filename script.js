const nav = document.querySelector('.nav2');
const btn = document.getElementById('menu');

btn.addEventListener("click", () => {
    nav.classList.toggle("show");
});
