document.addEventListener('DOMContentLoaded', function() {
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        currentYearSpan.textContent = year;

        // Récupérer la date de dernière modification du document
        const lastModified = document.lastModified;
        const lastModifiedDate = new Date(lastModified);

        // Formater la date de dernière modification
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const formattedLastModified = lastModifiedDate.toLocaleDateString('fr-FR', options);

        // Ajouter la date de dernière modification au footer
        const lastModifiedParagraph = document.createElement('p');
        lastModifiedParagraph.textContent = ` : ${formattedLastModified}`;
        document.querySelector('footer').appendChild(lastModifiedParagraph);
    }
});