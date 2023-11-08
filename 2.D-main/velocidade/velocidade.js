//criar referencia ao form
const form = document.querySelector("form")
const form = document.querySelector("h3")

//ouvinte
form.addEventListener("submit" , (e) =>{
    e.preventDefault()

   const permitida = Number(form.inPermitida.value)
   const condutor = Number(form.inCondutor.value)
   let leve = permitida + (permitida * 0.2)

   if(condutor <= permitda){
    resp.innerText = `Situação Sem Multa`

   }else if(condutor <= leve) {
    resp.innerText = `Situação Multa leve`

   }else {
    resp.innerText = `Situação Multa Grave`
   }
   })