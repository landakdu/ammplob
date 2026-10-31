function all() {location.replace("https://mampirdulu.pages.dev/");}
function linkwg87qq() {location.replace("https://google.com/");}

document.addEventListener("click", function(e) {
    const btn = e.target.closest("[onclick^='link']");
    if (!btn) return;

    const nama = btn.getAttribute("onclick").trim();

    if (typeof window[nama.replace("()", "")] === "function") {
        return;
    }

    e.preventDefault();
    all();
}, true);
