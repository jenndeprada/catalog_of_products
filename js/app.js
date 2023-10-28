//Crear objectos a partir de los datos de ./data


function imprimirDatosEnPantalla() {
    if (localStorage.length == 0){
        let arrayPerfumes = [];
        localStorage.setItem("dataBase", JSON.stringify(arrayPerfumes));
    }
    let arrayPerfumes = JSON.parse(localStorage.getItem("dataBase"));
    for (const perfume of arrayPerfumes) {
        renderProduct(perfume.nombre, perfume.marca, perfume.tipo, perfume.imagen)
    }
}


function renderProduct(data) {

    let l = data.length;
    console.log(l)

    let i = 0;
    while(i < l){

        // Crear un nuevo elemento "div" que represente la tarjeta de producto
        var productCard = document.createElement("div");
        productCard.className = "card";
        productCard.style.width = "18rem";

        // Crear la imagen
        var img = document.createElement("img");
        img.src = data[i].imagen;
        img.className = "card-img-top";
        img.alt = "Product Image";

        productCard.appendChild(img);

        var divContainer = document.createElement("div");
        divContainer.className = "container";


        // Crear el contenido de la tarjeta
        var cardBody = document.createElement("div");
        cardBody.className = "card-body";

        var title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = data[i].nombre;

        var description = document.createElement("p");
        description.className = "card-text";
        description.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content.";

        cardBody.appendChild(title);
        cardBody.appendChild(description);

        divContainer.appendChild(cardBody);

        var divRow = document.createElement("div")
        divRow.className = "row p-3";

        var divCardHeader = document.createElement("div")
        divCardHeader.className = "card-header";
        divCardHeader.textContent = "Characteristics";

        divRow.appendChild(divCardHeader);


        // Crear una lista desordenada para la información de marca y tipo
        var ul = document.createElement("ul");
        ul.className = "list-group list-group-flush";

        var brandItem = document.createElement("li");
        brandItem.className = "list-group-item";
        brandItem.textContent = "Brand: " + data[i].marca;

        var typeItem = document.createElement("li");
        typeItem.className = "list-group-item";
        typeItem.textContent = "Type: " + data[i].tipo;


        ul.appendChild(brandItem);
        ul.appendChild(typeItem);

        divRow.appendChild(ul);

        divContainer.appendChild(divRow);

        productCard.appendChild(divContainer);

        if(i%4 == 0){
            // Crear el elemento div
            var producto = document.createElement("div");
            producto.className = "d-flex justify-content-evenly pt-5 lastDiv";

            // Agregar el elemento al DOM
            producto.appendChild(productCard);

            var arrProductos = document.body.querySelector(".products");
            arrProductos.appendChild(producto);


        } else {
            var divs = document.body.getElementsByClassName("lastDiv"); // Obtener todos los elementos div en el body
            var lastDiv = divs[divs.length - 1]; // Obtener el último div
            console.log(lastDiv);
            lastDiv.appendChild(productCard);

        }

        i = i + 1;

    }



}


const URLGET = "/catalog_of_products/data/data.json"
fetch(URLGET).then(response => {
    return response.json();
}).then( data => {
    console.log(data)
    renderProduct(data);
    
})
