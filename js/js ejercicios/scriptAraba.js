function changeImage(event) {
    var image = document.getElementById('mapa');
    if (event.type === 'mouseover') {
        if (image.src.match("araba")) {
            image.src = "../../../imagenes/imagenes ejercicios/Ejercicio 4 Dreamweaver/virgen.jpg";
        } else {
            image.src = "../../../imagenes/imagenes ejercicios/Ejercicio 4 Dreamweaver/araba.jpg";
        }
    } else if (event.type === 'mouseout') {
        if (image.src.match("virgen")) {
            image.src = "../../../imagenes/imagenes ejercicios/Ejercicio 4 Dreamweaver/araba.jpg";
        } else {
            image.src = "../../../imagenes/imagenes ejercicios/Ejercicio 4 Dreamweaver/virgen.jpg";
        }
    }
}

document.getElementById('mapa').addEventListener('mouseover', changeImage);
document.getElementById('mapa').addEventListener('mouseout', changeImage);