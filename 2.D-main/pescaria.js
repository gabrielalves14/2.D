const frm = document.querySelector("form")
const resp = document.querySelector("h4")

frm.addEventListener("sumbit", (e) =>{
    e.preventDefault()

    const pessoas = Number(frm.inNumero.value)
    const peixe = Number(frm.inpeixe.value)
    let resultado
    if(peixe > pessoas) {
        resultado = (pessoas * 20) + ((peixe - pessoas) * 12)
    } else {
        resultado = pessoas * 20
    }
    resp.innerText = `N° de pessoas:: ${pessoas}\n
                      N° de peixes: ${peixes}\n
                      Pagar: R$ ${resultado.toFixed(2)}`
})