document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();var o=new FormData(n.target),t=o.get("amount"),e=o.get("delay");!function n(o){o>t||function(n,o){return new Promise((function(t,e){setTimeout((function(){Math.random()>.3?t({position:n,delay:o}):e({position:n,delay:o})}),o)}))}(o,e).then((function(o){var t=o.position,e=o.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(e,"ms")),n(t+1)})).catch((function(o){var t=o.position,e=o.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(e,"ms")),n(t+1)}))}(1)}));
//# sourceMappingURL=03-promises.9c038504.js.map
