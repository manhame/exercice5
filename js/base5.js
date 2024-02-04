
let elements = document.querySelectorAll(".tabElement"); // Utilisation de querySelectorAll pour sélectionner tous les éléments avec la classe "tabElement"
const tabQuotes = document.getElementById("wrapper"); // Correction de la syntaxe de getElementById

//Initializations
let favoriteQuotes = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];//on déclare une variable objet qui récupère les citations du localstorage ou rien []

// Fonction pour afficher toutes les citations avec option "favoris" cliquables
function afficherCitations() {
    quotes.forEach((quote) => {   // foreach($quotes as $quote)
        //console.log(quotes);// affiche bien le tableau objet "de type associatif"
    
        const newElement = document.createElement("div"); // Création d'un nouvel élément div
        newElement.classList.add("tabElement"); // Ajout de la classe "tabElement" à l'élément créé
    
        const newCitation = document.createElement("div");//idem
        newCitation.classList.add("citation");
        newCitation.textContent = `${quote.citation}`;//on ajoute le texte de chaque citation
    
        const newAuteur = document.createElement("div");//idem
        newAuteur.classList.add("auteur");
        newAuteur.textContent = `${quote.auteur}`;//on ajoute le nom de chaque auteur

        const favorisBtn = document.createElement("button");//idem
        favorisBtn.textContent = "Favoris";
        favorisBtn.classList.add("favoris-btn");
        favorisBtn.setAttribute("data-id", quote.id);//on affecte au bouton favori un attribut de nom "data-id" et de valeur quote.id (index de numérotation des citations)
        let classBtn //on declare une variable qui représente la classe du bouton quand une citation est stockée dans les favoris
        if (favoriteQuotes.includes(quote.id)) { 
           classBtn = "favori"
        }
        favorisBtn.classList.add(classBtn);//on ajoute cette classe (ici variable déclarée) au bouton
    
        newElement.appendChild(newCitation);
        newElement.appendChild(newAuteur);
        newElement.appendChild(favorisBtn);
        tabQuotes.appendChild(newElement);

        favorisBtn.addEventListener("click", () => toggleFavorite(quote.id));//quand on clique sur "favoris" on execute la fonction ci-dessous
        
    });
}    
        afficherCitations(); // Appel de la fonction pour afficher toutes les citations

        function toggleFavorite(quoteId) {      //on affecte une variable peu importe le nom, valable que dans la fonction

            const btnFav = document.querySelector(`.favoris-btn[data-id='${quoteId}']`);//on declare une variable qui représente l'ensemble des citations favorites

            
            if (favoriteQuotes.includes(quoteId)) {     //si les citations favorites sont inclues (cliquées)
                favoriteQuotes = favoriteQuotes.filter(id => id !== quoteId);  //alors on les retire
                //Remove the quote from favorites
                btnFav.classList.remove("favori");
        
            } else {
                favoriteQuotes.push(quoteId); //sinon on les pousse dedans
                // Add the quote to favorites
                btnFav.classList.add("favori");
            }

            localStorage.setItem('favoriteQuotes', JSON.stringify(favoriteQuotes));//fonction qui stocke les favoris
        }        