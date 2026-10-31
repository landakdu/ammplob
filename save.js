function all() {location.replace("https://mampirdulu.pages.dev/");}
function xgoogle() {location.replace("https://google.com/");}

document.addEventListener("click", function(e) {
    const btn = e.target.closest("[onclick^='link']");
    if (!btn) return;

    const nama = btn.getAttribute("onclick").trim();

    if (nama !== "link5()") {
        e.preventDefault();
        all();
    }
}, true);
