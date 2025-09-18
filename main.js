// Tarjetas
const contenedor = document.querySelector("#contenedor");
const filas = document.createElement("div")

let columna = document.createElement("div");
columna.classList.add("col-4");

let card = document.createElement("div");
card.classList.add("card");

let imagen = document.createElement("img");
imagen.src = "https://www.google.com/imgres?q=get%20rich%20or%20die%20tryin&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F9%2F9d%2FGet_Rich_Or_Die_Tryin%2527.JPG&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGet_Rich_or_Die_Tryin%2527&docid=lNHoQ7GIMnr-YM&tbnid=2Bg1ilVJqJwRRM&vet=12ahUKEwiNoMOPs9uPAxXfILkGHX8JI74QM3oECB0QAA..i&w=300&h=300&hcb=2&ved=2ahUKEwiNoMOPs9uPAxXfILkGHX8JI74QM3oECB0QAA"
imagen.alt = "Album Get Rich Or Die Tryin - 50 Cent";
imagen.classList.add("card-img-top");
card.appendChild(imagen);

let cardBody = document.createElement("div");
cardBody.classList.add("card-body");

let titulo = document.createElement("h5");
titulo.textContent = "si";
titulo.classList.add("card-title");
titulo.appendChild(titulo);

let p = document.createElement("p");
p.classList.add("card-text");
p.textContent = "descripción";
cardBody.appendChild(p);

let p1 = document.createElement("p")
p1.classList.add("card-text");
p1.textContent = "Precio";
cardBody.appendChild(p1);

card.appendChild(cardBody);
columna.appendChild(card);
filas.appendChild(columna);