//Secret Menu Challenge
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/


var restaurant = document.getElementsByClassName("name");

for(i=0;i<restaurant.length;i++){
	restaurant[i].addEventListener("click", showMenu);
}

function showMenu(){
	var getMenu=this.querySelectorAll(".menu")[0];
    if(getMenu.style.display === "none"){
    	getMenu.style.display = "block";
    }else{
    	getMenu.style.display = "none";
    }
}

// target the class and get the element
// see that presents an array
//array means forloops
//