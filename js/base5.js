console.log("test");

let elements = document.querySelectorAll("#tabQuotes");
let element = document.querySelector(".tabElement");
let auteur = document.querySelector(".auteur");
let citation = document.querySelector(".citation");
const tabQuotes = document.querySelector("#wrapper");

/*pour chaque paire clé/valeur appelée dans la fonction forEach
cloner "tabElement" avec nouvel auteur et nouvelle citation à chaque fois
*/

console.log(quotes);
console.log(elements);

//remplacer contenu de l'élément "proto" par le 1er élément du tableau "quotes"

const premiereCitation = quotes["Serge Karamazov"];
const premierAuteur = "Serge Karamazov";

const elementPc = document.querySelector(".citation");
const elementPa = document.querySelector(".auteur");

elementPc.textContent = premiereCitation;
elementPa.textContent = premierAuteur;


    for (auteur in quotes) {
        citation = quotes[auteur];
        document.write(auteur + " = " + citation + '<br>');
       
        function afficherCitations() {

            const newElementP = document.createElement("p").clodeNode();
            newElementP.textContent = citation;
            citation.appendChild(newElementP);
        }}    

            /*
          
            const newAuteur = newElement.querySelector(".auteur");
            const newCitation = newElement.querySelector(".citation");
            

            newCitation.textContent = citation;
            newAuteur.textContent = auteur;

            newElement.appendChild(newAuteur);
            newElement.appendChild(newCitation);

            tabElement.appendChild(newElement);
        }
    }
    */
       
