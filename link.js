function all(){location.replace("https://youtube.com/");}
function xg(){location.replace("https://google.com/");}

document.addEventListener("click",function(e){const btn=e.target.closest("[onclick^='x']");if(!btn)return;const match=btn.getAttribute("onclick").match(/^x\w*\(\)$/);if(!match)return;const nama=match[0].replace("()","");if(typeof window[nama]!=="function"){e.preventDefault();e.stopImmediatePropagation();all();}},true);document.addEventListener("DOMContentLoaded",function(){const form=document.getElementById("yourform");if(!form)return;const action=form.getAttribute("action");const match=action&&action.match(/^javascript:(x\w*)\(\)$/);if(!match||typeof window[match[1]]!=="function"){all();}else{window[match[1]]();}});
