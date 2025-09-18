    //Carrusel//
//Contenedor principal
const container = document.querySelector("#container")
container.classList.add("carousel")
container.classList.add("slide")
//div contenedor del contenedor del contenedor de imagenes
const divContenedor = document.createElement("div")
//divContenedor.classList.add("carousel-inner")
//contenedor imagen
//const contenedorImg = document.createElement("div")
//contenedorImg.classList.add("carousel-item")
//contenedorImg.classList.add("active")
//Imagen
//const Imagen1 = document.createElement("img")
//Imagen1.classList.add("d-block")
//Imagen1.classList.add("w-100")
//Imagen1.src = "https://i.pinimg.com/originals/24/c7/ac/24c7accae9bf5310c6c2393383718729.jpg"
//Imagen1.alt = "CoquiArgento"
//contenedorImg.appendChild(Imagen1)
//divContenedor.appendChild(contenedorImg)

//codigo imagen 2
const contenedorImg2 = document.createElement("div")
contenedorImg2.classList.add("carousel-item")
//imagen 2
const Imagen2 = document.createElement("img")
Imagen2.src = "https://pbs.twimg.com/media/FRUcAHZWQAMMTgq.jpg"
Imagen2.alt = "sacame la ardilla"
contenedorImg2.appendChild(Imagen2)
divContenedor.appendChild(contenedorImg2)

//codigo imagen 3
const contenedorImg3 = document.createElement("div")
contenedorImg3.classList.add("carousel-item")
//imagen 2
const Imagen3 = document.createElement("img")
Imagen3.src = "https://avatars.steamstatic.com/bf32ee7e7f023daa7564d6d5f54f2d0204ce43d9_full.jpg"
Imagen3.alt = "papuchoooo"
contenedorImg3.appendChild(Imagen3)
divContenedor.appendChild(contenedorImg3)
container.append(divContenedor)
