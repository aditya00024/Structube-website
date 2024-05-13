

document.addEventListener('DOMContentLoaded', function() {
    const areaSelector = document.getElementById('categorySelector');

    areaSelector.addEventListener('change', function() {
        const selectedOption = areaSelector.options[areaSelector.selectedIndex];
        const selectedHref = selectedOption.getAttribute('value');

        if (selectedHref && selectedHref !== "all") {
            window.location.href = selectedHref;
        }
    });

   
    if (window.location.pathname.endsWith("/index.html")) {
        areaSelector.value = "all";
    }
});
