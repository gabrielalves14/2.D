alert("testando")
//Cria referência ao form e elementos de resposta do programa
const form = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")
 
 //cria um ouvinte
  form.addEventListener("submit") , (e) =>{
    e.preventDefault()
    const nome = form.inNome.value
    const nota1
  }