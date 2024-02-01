
let elements = document.querySelectorAll(".tabElement"); // Utilisation de querySelectorAll pour sélectionner tous les éléments avec la classe "tabElement"
const tabQuotes = document.getElementById("wrapper"); // Correction de la syntaxe de getElementById

// Fonction pour afficher toutes les citations
function afficherCitations() {
    for (let auteur in quotes) { // Parcourt chaque auteur dans l'objet quotes
        const citation = quotes[auteur]; // Récupère la citation pour cet auteur

        const newElement = document.createElement("div"); // Création d'un nouvel élément div
        newElement.classList.add("tabElement"); // Ajout de la classe "tabElement" à l'élément créé

        const newCitation = document.createElement("div");
        newCitation.classList.add("citation");
        newCitation.textContent = citation;

        const newAuteur = document.createElement("div");
        newAuteur.classList.add("auteur");
        newAuteur.textContent = auteur;

        const favorisBtn = document.createElement("button");
        favorisBtn.textContent = "Favoris";
        favorisBtn.classList.add("favoris-btn");

        newElement.appendChild(newCitation);
        newElement.appendChild(newAuteur);
        newElement.appendChild(favorisBtn);
        tabQuotes.appendChild(newElement);

        // Gestionnaire d'événements pour le bouton de favoris
        favorisBtn.addEventListener("click", function() {
            if (favorisBtn.classList.contains("favori")) {
                favorisBtn.classList.remove("favori");
        /* Supprimer du stockage local
                 removeFavorite(auteur);
            } else {
                favorisBtn.classList.add("favori");
        // Ajouter au stockage local
                addFavorite(auteur, citation);*/
            }
        })    
    }
}
                

afficherCitations(); // Appel de la fonction pour afficher toutes les citations


/*
let elements = document.querySelectorAll("#tabQuotes");
let element = document.querySelectorAll(".tabElement");
let auteur = document.querySelector(".auteur");
let citation = document.querySelector(".citation");
const tabQuotes = document.getElementById("wrapper");

/*pour chaque paire clé/valeur appelée dans la fonction forEach
cloner "tabElement" avec nouvel auteur et nouvelle citation à chaque fois
*/
/*
console.log(quotes);
console.log(elements);

//remplacer contenu de l'élément "proto" par le 1er élément du tableau "quotes"

const premiereCitation = quotes["Serge Karamazov"];
const premierAuteur = "Serge Karamazov";

citation.textContent = premiereCitation;
auteur.textContent = premierAuteur;

//on applique une fonction de création des autres éléments du tableau quotes

    for (let auteur in quotes) {
        citation = quotes[auteur];
               
        function afficherCitations() {

            const newElement = element.clodeNode(true);
            const newCitation = newElement.querySelector(".citation");
            const newAuteur = newElement.querySelector(".auteur");

            newCitation.textContent = citation;
            newAuteur.textContent = auteur;

            tabElement.appendChild(newCitation);
            tabElement.appendChild(newAuteur);
            tabQuotes.appendChild(newElement);
        }}    

    
*/