// @ts-nocheck
window.Library = (function() {
    let queue = [];
    if (Library) {
        queue = Library.queue || queue; 
    }

    while (queue.length > 0) {
        var func = queue.shift();
        func();
    }
})();

