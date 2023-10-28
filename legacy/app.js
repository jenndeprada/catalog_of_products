class Perfume {
    constructor(nombre, marca, tipo, imagen, descripcion) {
        this.nombre = nombre;         
        this.marca = marca;           
        this.tipo = tipo; 
        this.imagen = imagen;
        this.descripcion = descripcion;             

    }
}


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


function agregar_perfume(nombre,marca,tipo, imagen, descripcion){
    nuevoPerfume = new Perfume(nombre, marca, tipo, imagen, descripcion);
    if(localStorage.length != 0){
        let baseLocal = JSON.parse(localStorage.getItem("dataBase"));
        baseLocal.push(nuevoPerfume); 
        localStorage.setItem("dataBase", JSON.stringify(baseLocal)); 

    } else {
        baseLocal = [];
        baseLocal.push(nuevoPerfume); 
        localStorage.setItem("dataBase", JSON.stringify(baseLocal)); 
    }
    
    renderProduct(nombre, marca, tipo, imagen)

    }
    
function renderProduct(nombre,marca,tipo,imagen){
    $(".row_productos").append(
        `
            <div class="pt-3 col-xs-12 col-md-6 col-lg-4 d-inline-flex justify-content-center">
            <div class="px-2">
            <div class="card" style="width: 18rem;">
                <img src=${imagen} class="card-img-top" alt="perfume"/>
                <div class="card-body">
                <div class="accordion pb-3" id="accordionExample">
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        ${nombre}
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Marca: ${marca}</li>
                            <li class="list-group-item">Tipo: ${tipo}</li>
                            <li class="list-group-item">Sexo: Femenino</li>
                        </ul>
                        </div>
                        </div>
                    </div>
                </div>
                <p class="card-text">lorem impsum sit amet.</p>
                  <div class="d-flex justify-content-evenly"> 
                        <a href="https://www.google.com/?hl=es" class="btn btn-dark">Ver mas</a>
                        <a href="https://www.google.com/?hl=es" class="btn btn-dark">Borrar</a>
                  </div>
                </div>
            </div>
            </div>
            </div>`
  );
}





//***********************Animacion************************ */

$(".div_info").append(` <p class="info text-white bolder m-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque ullam totam id sit a quibusdam, nisi enim sequi quo quas quod, dicta dolores distinctio maxime velit, adipisci quaerat voluptatem?
Pariatur perspiciatis excepturi hic possimus at, tenetur corporis maiores blanditiis iste ipsum consequatur ut repudiandae repellendus eos sit sed, facere consectetur minus. Optio sapiente eveniet iusto nulla et ullam fugit.</p> `)

$(".informacion").click(() => {
    $(".info").toggle("slow");
})    

//************************Agregar Ajax**************************** */

//meter cada producto del json al local storage

//Declaramos la url que vamos a usar para el GET
const URLGET = "./data.json"
    $.get(URLGET, function (respuesta, estado) {
          if(estado === "success"){
            let misDatos = respuesta;
            for (const dato of misDatos) {
              renderProduct(dato.nombre, dato.marca, dato.tipo, dato.imagen)
            }  
          }
    });



let form = document.getElementById("form");
form.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    let formulario = e.target
    let userInputName = formulario.children[0].children[1].value;
    let userInputBrand = formulario.children[1].children[1].value;  
    let userInputtype = formulario.children[2].children[1].value; 
    let userInputImage = formulario.children[3].children[1].value; 
    agregar_perfume(userInputName, userInputBrand, userInputtype, userInputImage);
}



imprimirDatosEnPantalla();