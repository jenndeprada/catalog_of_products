
let form = document.getElementById("form");
console.log(form)

function storeData(user, pass){
    localStorage.setItem("username", user);
    localStorage.setItem("plainPassword", pass);
}


function validarFormulario(e){
    console.log('inside validar form')
    let formulario = e.target
    let userInputName = formulario.children[0].children[0].value;
    let userInputPassword = formulario.children[0].children[1].value; 
    storeData(userInputName,userInputPassword);
}


form.addEventListener("submit", validarFormulario);






