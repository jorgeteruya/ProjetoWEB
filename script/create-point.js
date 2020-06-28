
function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    //.then( (resposta) => {return resposta.json()} )
    .then(resposta => resposta.json())

    .then( estados =>{

        for(const state of estados){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()

function getCidade(event){
    const cidadeSelect = document.querySelector("select[name=cidade]")
    const ufInput = document.querySelector("input[name=estado]")

    const ufValue = event.target.value

    // const indexOfSelectedState = event.target.selectedIndex
    // stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios`

    fetch(url)
    .then(resposta => resposta.json())

    .then( cidades =>{

        for(const city of cidades){
            cidadeSelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
        }

        cidadeSelect.disabled = false   
    })

}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCidade)
