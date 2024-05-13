// script.js

document.addEventListener('DOMContentLoaded', function() {
    const areaSelector = document.getElementById('categorySelector');

    areaSelector.addEventListener('change', function() {
        const selectedOption = areaSelector.options[areaSelector.selectedIndex];
        const selectedHref = selectedOption.getAttribute('value');

        if (selectedHref && selectedHref !== "all") {
            window.location.href = selectedHref;
        }
    });

    // Check if the current page is index.html and set the default value for the selector
    if (window.location.pathname.endsWith("/index.html")) {
        areaSelector.value = "all";
    }
});
