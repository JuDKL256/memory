const button = document.querySelector("button");
let clickCount = 0; // Compteur de clics

// Liste d'images de cartes disponibles
const cardImages = [
    "./ressources/pokemon/16.png",
    "./ressources/pokemon/15.png",
    "./ressources/pokemon/14.png",
    "./ressources/pokemon/13.png",
    "./ressources/pokemon/12.png",
  "./ressources/pokemon/11.png",  
  "./ressources/pokemon/17.png",
  "./ressources/pokemon/2.png",
  "./ressources/pokemon/3.png",
  "./ressources/pokemon/4.png",
  "./ressources/pokemon/5.png",
  "./ressources/pokemon/6.png",
  "./ressources/pokemon/7.png",
  "./ressources/pokemon/8.png",
  "./ressources/pokemon/9.png",
  "./ressources/pokemon/10.png"
];

// Ajouter un gestionnaire d'événements au bouton
button.addEventListener("click", () => {
  clickCount++; // Incrémente le compteur de clics
  button.innerHTML = `Nombre de clics : ${clickCount}`; // Met à jour le texte du bouton
  addElement(); // Ajoute de nouvelles cartes
});

function addElement() {
  // Crée un nouvel élément div pour la ligne de cartes
  var newDiv = document.createElement("div");

  // Crée le conteneur de la ligne de cartes
  var ligneDiv = document.createElement("div");
  ligneDiv.classList.add("ligne");
 
  var numberOfCards = 4; // 4 cartes

  for (let i = 0; i < numberOfCards; i++) {
    // Crée une carte
    var carteDiv = document.createElement("div");
    carteDiv.classList.add("carte");

    var carteInnerDiv = document.createElement("div");
    carteInnerDiv.classList.add("carteInner");

    // Face avant de la carte
    var carteFrontDiv = document.createElement("div");
    carteFrontDiv.classList.add("carteFront");
    var frontImg = document.createElement("img");
    frontImg.src = "./ressources/pokemon/BACK-2.png"; // Image générique pour le dos
    frontImg.alt = `Carte Avant ${i}`;
    carteFrontDiv.appendChild(frontImg);

    // Face arrière de la carte avec une image aléatoire
    var carteBackDiv = document.createElement("div");
    carteBackDiv.classList.add("carteBack");
    var randomImage = cardImages[Math.floor(Math.random() * cardImages.length)]; // Choix aléatoire de l'image
    var backImg = document.createElement("img");
    backImg.classList.add("imageCarte");
    backImg.src = randomImage; // Image aléatoire pour la face arrière
    backImg.alt = `Carte Arrière ${i}`;
    carteBackDiv.appendChild(backImg);

    // Ajout des faces avant et arrière à la carte
    carteInnerDiv.appendChild(carteFrontDiv);
    carteInnerDiv.appendChild(carteBackDiv);
    carteDiv.appendChild(carteInnerDiv);

    // Ajout d'un gestionnaire de clic pour retourner la carte
    carteDiv.addEventListener("click", function() {
      carteDiv.classList.toggle("flipped"); // Applique ou enlève la classe 'flipped' à la carte
    });

    // Ajoute la carte à la ligne
    ligneDiv.appendChild(carteDiv);
  }

  // Ajoute la ligne de cartes au div principal
  newDiv.appendChild(ligneDiv);

  // Ajoute le nouvel élément au body (ou à un autre endroit si nécessaire)
  document.body.appendChild(newDiv);
}
