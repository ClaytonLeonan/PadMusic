function reproduzirSom(idAudioElemento){
    document.querySelector(idAudioElemento).play();
} 

const listaDeTeclas = document.querySelectorAll('.tecla');


for ( let contador = 0; contador < listaDeTeclas.length; contador++){

    const teclas = listaDeTeclas[contador];
    const instrumento = teclas.classList[1];
    const idAudio = `#som_${instrumento}`
    
    teclas.onclick = function(){
        reproduzirSom(idAudio);
    };

    if (teclas.onkeydown){
        teclas.onkeydown = function (){
            teclas.classList.add('ativa');
        }
    } else {
        teclas.classList.remove('ativa')
    }
    

}

