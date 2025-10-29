//Funcionalidade do site quando selecionada bandeira BR
function relogioBR(){
// variáveis do relógio.
var data = new Date()
var hora = parseInt(data.getHours())
var minuto = parseInt(data.getMinutes())
var segundo = parseInt(data.getSeconds())

//conferindo tempo no terminal.
console.log(`Agora são ${hora}:${minuto}:${segundo}`)

//mostrando tempo na pág web.
window.document.querySelector('.quadro_menor').innerHTML = `<h2>Agora são ${hora}:${minuto}:${segundo}<h2>`

// configurando imagens respectivas ao horário
if (hora >= 5 && hora < 6){
    window.document.querySelector('.imagem').innerHTML = `<img src="" alt="">`
} else if (hora >= 6 && hora < 12){
    window.document.querySelector('.imagem').innerHTML = `<img src="" alt="">`
} else if (hora >= 12 && hora < 14){
    window.document.querySelector('.imagem').innerHTML = `<img src="" alt="">`
} else if (hora >= 14 && hora < 18){
    window.document.querySelector('.imagem').innerHTML = `<img src="" alt="">`
} else if (hora >= 18 && hora < 0){
    window.document.querySelector('.imagem').innerHTML = `<img src="" alt="">`
} else {
    window.document.querySelector('.imagem').innerHTML = `<img src="" alt="">`
}
}

//colocando o tempo para rodar em tempo real.
setInterval(relogioBR, 1000)
relogioBR()
//adicionar aqui dps um "addEventListener" caso escolhido a função americana e tb colocar outro para quando quiserem voltar para a opção brasileira.