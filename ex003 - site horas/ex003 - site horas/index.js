//Funcionalidade do site quando selecionada bandeira BR
function relogioBR(){
// variáveis do relógio.
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
var segundo = data.getSeconds()
// variável feita somente para alterar boxshadow do quadro branco do centro do site.
let quadro = document.querySelector('.quadro_menor');

//conferindo tempo no terminal.
console.log(`Agora são ${String(hora).padStart(2, '0')}:${String(minuto).padStart(2, '0')}:${String(segundo).padStart(2, '0')}`)

//mostrando tempo na pág web.
window.document.querySelector('#hora-display').innerHTML = `<h2>Agora são ${String(hora).padStart(2, '0')}:${String(minuto).padStart(2, '0')}:${String(segundo).padStart(2, '0')}</h2>`;

// configurando imagens respectivas ao horário
var imagem = window.document.querySelector('#imagemDoDia')
if (hora >= 5 && hora < 6){
    imagem.src = 'manhazinha.png'
    document.body.style.backgroundColor = '#f7af5dff';
} else if (hora >= 6 && hora < 12){
    imagem.src = 'manha.png'
    document.body.style.backgroundColor = '#e9cb1fc2';
} else if (hora >= 12 && hora < 14){
    imagem.src = 'almoço.png'
    document.body.style.backgroundColor = '#cc3232ff';
} else if (hora >= 14 && hora < 16){
    imagem.src = 'tarde.png'
    document.body.style.backgroundColor = '#5bb9d8ff';
} else if (hora >= 16 && hora < 18){
    imagem.src = 'tardezinha.png'
    document.body.style.backgroundColor = '#f5882fff';
} else if (hora >= 18 && hora <= 23){
    imagem.src = 'noite.png'
    document.body.style.backgroundColor = '#18191aff';
    quadro.style.boxShadow = '1pt 1pt 15pt hsla(0, 0%, 100%, 0.11)';
} else {
   var img = imagem.src = 'madrugada.png';
   document.body.style.backgroundColor = '#070707ff';
   quadro.style.boxShadow = '1pt 1pt 15pt hsla(0, 0%, 100%, 0.11)';
}
}

//colocando o tempo para rodar em tempo real.
setInterval(relogioBR, 1000)
relogioBR()

//adicionar aqui dps um "addEventListener" caso escolhido a função americana e tb colocar outro para quando quiserem voltar para a opção brasileira.