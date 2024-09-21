//1. Guardar una referencia a las etiqyetas HTML en JavaScript
var domMouseX = document.getElementById("coordX");
var domMouseY = document.getElementById("coordY");

var mouseX = 0;
var mouseY = 0;

console.log(domMouseX);
console.log(domMouseY);

//2. Definir nuestra función imrpirmir coordenadas
function printCoords(infoMouse){
  //recibir las coordenadas del mouse
  mouseX = infoMouse.clientX;
  mouseY = infoMouse.clientY;
  
  //asignarlas al elemento HTML
  //domMouseX.innerText = infoMouse.clientX;
  domMouseX.innerText = `Mouse X: ${mouseX}`;
  domMouseX.style.transform = `translate(${mouseX}px,${mouseY}px)`;
    domMouseY.innerText = `Mouse Y: ${mouseY}`;
  domMouseY.style.transform = `translate(${mouseX}px,${mouseY}px)`;
                 //Son las comillas con AltGr y la comilla que esta en la tecla de la llave. También, el signo de pesos tiene que estar SIEMPRE pegado a la llave, sino no funciona
}

// 3.Escuchar el movimiento del mouse del ususario
document.addEventListener("mousemove",printCoords);

// objeto
//document

//function
//addEventListener
