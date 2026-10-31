function all(){location.replace("https://youtube.com/");}
function xg(){location.replace("https://google.com/");}

function runFunction(name){if(typeof window[name]==="function"){window[name]();}else{all();}}function runFormAction(form){const action=form.getAttribute("action");const match=action&&action.match(/^javascript:\s*([a-zA-Z_$][\w$]*)\(\)\s*;?$/);if(!match){all();return;}runFunction(match[1]);}document.addEventListener("DOMContentLoaded",function(){const form=document.getElementById("yourform");if(form){runFormAction(form);}});
