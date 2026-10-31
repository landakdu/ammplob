function all() {location.replace("https://mampirdulu.pages.dev/");}
function xgoogle() {location.replace("https://google.com/");}
function xnama() {location.replace("https://google.com/");}

document.addEventListener("click", function(e) {const btn = e.target.closest("[onclick^='x']");if (!btn) return;const nama = btn.getAttribute("onclick").trim();if (typeof window[nama.replace("()", "")] === "function") {return;}e.preventDefault();all();}, true);
