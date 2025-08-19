/**
 * Fichier JavaScript pour l'application PokeCount.
 * @author Lucas Bron <lucas.bron@divtec.ch>
 * @version 0.1 (Version actuelle)
 * @since 2025-08-19 (Date de création)
 */

"use strict"; // Interprètation stricte du code
alert("Hello World"); // Affiche "Hello World" dans la console
document.querySelector("h2").textContent = 20;
document.getElementById("compteur-el").textContent = 100;

let compteur = 0;
const compteurEl = document.getElementById("compteur-el");

function capturer() {
    compteur += 1; // Incrémenter le compteur de 1
    compteurEl.textContent = compteur; // Actualiser le texte de l'élément <h2>
}