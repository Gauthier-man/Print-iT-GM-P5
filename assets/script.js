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

const leftArrow = document.querySelector('.arrow_left') 
const rightArrow = document.querySelector('.arrow_right')

leftArrow.addEventListener('click', function(){ 
	currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;  
	updateSlide(); 

})


rightArrow.addEventListener('click', function() {
	currentSlideIndex = (currentSlideIndex + 1) % slides.length; 
  updateSlide(); 

})

// Ajout des bullets point au slider

const dotsContainer = document.querySelector('.dots') 

//  Création des quatre points dynamiquement
 for (let i = 0; i < slides.length; i++) {  
   const SliderDot = document.createElement('div') 
   SliderDot.classList.add('dot') 
   dotsContainer.appendChild(SliderDot) 
 
}

// Modifier le slide au clic sur le bouton

function updateSlide() {
	const bannerImg = document.querySelector(".banner-img"); 
	const tagLine = document.querySelector("#banner p");	
	const dots = document.querySelectorAll(".dot");  

// Met à jour l'image et le texte de la diapositive affiché dans le carrousel

	bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`; 
	tagLine.innerHTML = slides[currentSlideIndex].tagLine; 
  
	// Mettre à jour les points
	dots.forEach((dot, index) => { 
	  if (index == currentSlideIndex) { 
		dot.classList.add("dot_selected"); 
	  } else {
		dot.classList.remove("dot_selected"); 
	  }
	});
  }

 
updateSlide();









 