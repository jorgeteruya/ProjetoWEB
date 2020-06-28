
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
    console.log(event.target.value)
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCidade)
