Olá, esse é um exercício básico para treinar meus conhecimentos em JS native, HTML e CSS.

O site exibe a hora atual do sistema (em tempo real) e muda o plano de fundo/imagem automaticamente com base no horário. Você pode conferir os códigos nos arquivos do projeto ou ver o projeto funcionando clicando aqui.

Como funciona: 

1. HTML: Local onde foi feita a organização do projeto. (1º) Título, (2º) div's e (3º) marcação pessoal.

  As div's consistem na principal, chamada de "quadro_menor", onde aparecerá o relógio contando as horas em tempo real e a imagem que representa aquele momento do dia. Dentro da principal, temos outras 2 div's, uma div somente para o relógio em tempo real e outra div para a imagem e essa separação foi necessária, pois o relógio é atualizado a cada 1s, e se a imagem ficasse junto com o relógio, ela acabaria sendo atualizada constantemente e não conseguiriamos vê-la.

2. CSS: Foi utilizado para organizar as cores, estrutura e responsividade do site, exceto as cores e sombras que mudam conforme o período do dia (essa parte é feita no JS)

3. JS: É aqui em que fiz o relógio funcionar em tempo real e ainda alterei as imagens e plano de fundo de acordo com o período do dia.

3.1. Alterar em tempo real: primeiro criei uma função relógio para mostrar na tela as horas, minutos e segundos, porém ele era estático, ou seja, só atualizava o horário quando a página era atualizada, ficando o relógio parado na última atualização de página até ocorrer uma nova atualização. Para resolver isso, coloquei setInterval() para "setar" um intervalo de repetição de ação a cada 1 segundo e logo abaixo chamei a função relógio, desse modo, a cada 1 segundo relógio seria atualizado mesmo sem atualizar a página.

3.2. Troca de imagens: estabeleci uma função que analisa o intervalo de horas de um período do dia e devolve uma imagem e troca a cor de fundo para tornar o site mais imersivo e interativo. 
Ex: if (hora >= 6 && hora <12) {
tag que mostra uma imagem do dia pela manhã;
mudança da cor de plano de fundo para uma cor que lembra a manhã;
}

4. Um pouco sobre o que aprendi neste projeto: Novas tags em JS, como, por exemplo, newDate(), padStart(), setInterval().

Obrigado pela visita! 🚀 Até o próximo projeto!
