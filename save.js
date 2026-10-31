function all() {location.replace("https://mampirdulu.pages.dev/");}
function linkg() {location.replace("https://google.com/");}
function linknama() {location.replace("https://google.com/");}

document.addEventListener("click",function(e){const btn=e.target.closest("[onclick^='link']");if(!btn)return;const match=btn.getAttribute("onclick").match(/^link\w*\(\)$/);if(!match)return;const nama=match[0].replace("()","");if(typeof window[nama]!=="function"){e.preventDefault();e.stopImmediatePropagation();all();}},true);document.addEventListener("DOMContentLoaded",function(){const form=document.getElementById("yourform");if(!form)return;const action=form.getAttribute("action");const match=action&&action.match(/^javascript:(link\w*)\(\)$/);if(!match||typeof window[match[1]]!=="function"){all();}else{window[match[1]]();}});
