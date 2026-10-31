function all() {location.replace("https://mampirdulu.pages.dev/");}
function xgoogle() {location.replace("https://google.com/");}

document.addEventListener("click", function(e) {const btn = e.target.closest("[onclick^='link']");if (!btn) return;e.preventDefault();const nama = btn.getAttribute("onclick");if (/^link[1-4]\(\)$/.test(nama)) {all();}}, true);
