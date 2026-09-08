const formulario = document.querySelector(
    "#formulario");
    formulario.addEventListener("submit", function(event){
    event.preventDefault()
    alert("Solicitação enviada!")
});
