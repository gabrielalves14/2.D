const form = documente.querySelector("form")
const form = document.querySelector("#outsResp")
const resp1 = document.querySelector("outsResp1")

//ouvinte
form.addEvenListener("submit", (e)=>{
    e.prventDefault()

    const ladoA = Number(form.inLadoA.value)
    const ladoB = Number(form.inLadoA.value)
    const ladoC = Number(form.inLadoA.value)
    if((ladoA > LadoB + ladoC) || (ladoB > ladoA + ladoC) || (ladoC > ladoA + ladoB)){
        alert("essas medias não podem formar um triângulo. Um dos lados não pode ser maior que a soma dos outros dois.")
        form.inLadoA.focus()
        form.inLadoB.focus()
        form.inLadoC.focus()
        return
    }
    resp.innerText = `lados podem formar um triângulo`
    if(ladoA == ladoB && ladoA == ladoC){
    //três lados são iguais
          resp1.innerText = `tipo: Equilátero`

    }
    
})