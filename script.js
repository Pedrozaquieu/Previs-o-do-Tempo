

const key = "134e471f41793181bb644a47788adaf3"

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".clima").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".i-tempo").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
   
    colocarDadosNaTela(dados)

}

function clkButton() {
    const cidade = document.querySelector(".cdd-input").value

    buscarCidade(cidade)
}