let k = 0;
let images = [];
let time = 10000;

images[0] = "./billeder/kro.jpg";
images[1] = "./billeder/banner1.jpg";
images[2] = "./billeder/banner2.jpg";

function changeImg(){
	document.getElementById("slide").src = images[k];

	if(k < images.length - 1){
	  k++;
	} else {
		k = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload=changeImg;
