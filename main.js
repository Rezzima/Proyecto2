    //Carrusel//
//Contenedor principal
const container = document.querySelector("#carouselExampleAutoplaying")
container.classList.add("carousel")
container.classList.add("slide")
container.classList.add("mx-3")
//div contenedor del contenedor del contenedor de imagenes
const contenedorImagenes = document.querySelector("#carrusel-inner")
//contenedor imagen
const contenedorImg = document.createElement("div")
contenedorImg.classList.add("carousel-item")
contenedorImagenes.classList.add("w-80")

const Imagen1 = document.createElement("img")
Imagen1.src = "./imagenes/locura.png"
Imagen1.alt = "sacame la ardilla"
contenedorImg.appendChild(Imagen1)

//codigo imagen 2
const contenedorImg2 = document.createElement("div")
contenedorImg2.classList.add("carousel-item")
contenedorImg2.classList.add("w-80")


//imagen 2
const Imagen2 = document.createElement("img")
Imagen2.src = "./imagenes/nada_personal.png"
Imagen2.alt = "sacame la ardilla"
contenedorImg2.appendChild(Imagen2)

contenedorImagenes.append(contenedorImg, contenedorImg2)

//codigo imagen 3
//const contenedorImg3 = document.createElement("div")
//contenedorImg3.classList.add("carousel-item")
//imagen 2
//const Imagen3 = document.createElement("img")
//Imagen3.src = "https://avatars.steamstatic.com/bf32ee7e7f023daa7564d6d5f54f2d0204ce43d9_full.jpg"
//Imagen3.alt = "papuchoooo"
//contenedorImg3.appendChild(Imagen3)
//divContenedor.appendChild(contenedorImg3)
//container.append(divContenedor)
