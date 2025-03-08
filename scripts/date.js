document.addEventListener("DOMContentLoaded", function () {
    const lastUpdateElement = document.getElementById("last-update");
    
    if (lastUpdateElement) {
        const lastModified = new Date(document.lastModified);
        lastUpdateElement.textContent = lastModified.toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    }
});
