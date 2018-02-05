const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

//setting first image opacity
imgs[0].style.opacity = 0.4;

const opacity = 0.4;

imgs.forEach(img => img.addEventListener('click',imgClick));
			 
			 
function imgClick(e)
{  
		imgs.forEach(img => img.style.opacity = 1);
	//change image target
  current.src = e.target.src;	
	
	
	//Adding fade in class
	 current.classList.add('fade-in');
	
	//Remove fade in class after 0.5 sec
	setTimeout( () => current.classList.remove('fade-in'),500);
	
	//changing the opacity
     e.target.style.opacity  = opacity;	
	
}