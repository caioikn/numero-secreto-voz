function encerraJogo(chute) {
    const chuteFormatado = chute.replace('.', '');

    if (chuteFormatado === 'Game Over') {
        document.body.innerHTML = `
            <h2>GAME OVER!</h2>
            <h3>O número secreto era ${numeroSecreto}.</h3>
            
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;

        document.body.classList.add('final-jogo');
    }
}
