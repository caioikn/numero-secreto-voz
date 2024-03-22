function onSpeak(e) {
    let chute = e.results[0][0].transcript;

    exibeChute(chute.replace('.', ''));
    validaChute(chute);
    encerraJogo(chute);
}

function exibeChute(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `;
}

const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

recognition.addEventListener('end', () => {
    recognition.start();
});
