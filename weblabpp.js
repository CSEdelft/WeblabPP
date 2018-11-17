// This was the only way to actually edit window
var elt = document.createElement("script");
elt.innerHTML = "window.onkeyupdelayoverride = 500;"
document.head.appendChild(elt);