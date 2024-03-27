// Tableau 'slides' avec 2 propriétés : image et tagLine
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlideIndex = 0; // Déclare une variable 'currentSlideIndex et l'initialise à 0


//Ajout des Event Listeners sur les flèches

const leftArrow = document.querySelector('.arrow_left') // Sélectionne l'élément HTML ayant la classe 'arrow_left'.
const rightArrow = document.querySelector('.arrow_right')

leftArrow.addEventListener('click', function(){ // Ajout d'un event listener sur l'élément 'leftArrow', 
	// alert('Bonjour')
	currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;  // Réduit l'indice de la diapositive pour permettre une navigation dans le carrousel
	updateSlide(); // Met à jour l'affichage pour montrer la diapositive

})


rightArrow.addEventListener('click', function() {
	// alert('Bonjour')
	currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Passer à la diapositive suivante dans le carrousel
  updateSlide(); 

})

// Ajout des bullets point au slider

const dotsContainer = document.querySelector('.dots') // Sélectionne l'élément HTML ayant la classe 'dots'.

//  Création des quatre points dynamiquement
 for (let i = 0; i < slides.length; i++) {  // Boucle 'for' qui va répéter 4 fois pour créer 4 points
   const dot = document.createElement('div') // Créer un nouveau élément 'div' dans le DOM.
   dot.classList.add('dot') // Ajout de la classe 'dot' à l'élément que l'on a créé
   dotsContainer.appendChild(dot) // Ajout l'élément en tant qu'enfant de 'dotsContainer'
 
   
}

// Modifier le slide au clic sur le bouton

function updateSlide() {
	const bannerImg = document.querySelector(".banner-img"); //Sélectionne l'élément HTML qui a la classe CSS "banner-img"
	const tagLine = document.querySelector("#banner p");	//Sélectionne l'élément HTML qui a la classe CSS "banner p"
	const dots = document.querySelectorAll(".dot");  //Sélectionne tous les élément HTML qui ont la classe CSS "dot"

// Met à jour l'image et le texte de la diapositive affiché dans le carrousel

	bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`; // Met à jour la source de l'image affichée dans la bannière du carrousel en utilisant le chemin de l'image spécifié dans 'slides'
	tagLine.innerHTML = slides[currentSlideIndex].tagLine; //Met à jour le contenu HTML de l'élément représenté par tagLine avec le texte associé à la diapositive
  
	// Mettre à jour les points
	dots.forEach((dot, index) => { // Méthode forEach pour itérer sur chaque élément de 'dot' 
	  if (index === currentSlideIndex) { // Vérifie si l'indice de l'élément actuel dans la boucle forEach correspond à l'indice de la diapositive
		dot.classList.add("dot_selected"); // Si l'indice de l'élément correspond à l'indice de la diapositive actuel, la classe CSS "dot_selected" est ajoutée à cet élément (dot).
	  } else {
		dot.classList.remove("dot_selected"); // Si l'indice de l'élément ne correspond pas à l'indice de la diapositive actuel, la classe "dot_selected" est retirée de cet élément
	  }
	});
  }

  // Appeler updateSlide() pour afficher la première diapositive au chargement de la page
updateSlide();









 