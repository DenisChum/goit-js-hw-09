!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),o=null;e.addEventListener("click",(function(){e.disabled=!0,n.disabled=!1,o=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),n.addEventListener("click",(function(){e.disabled=!1,n.disabled=!0,clearInterval(o),console.log("Interval with id ".concat(o," has stopped!"))}))}();
//# sourceMappingURL=01-color-switcher.3e091b56.js.map