function escribeMensaje(mensaje){
    contenedor= document.getElementById('Mensajes');
    contenedor.innerHTML= mensaje;
}
function textoAleatorio(largo) {
    let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let texto;
    for (i=0; i<=largo; i++) {
        let index= Math.floor(Math.random()*(letras.length-0)+0);
        let letra= letras[index];
        texto= texto+letra;
    }
    return texto;
}
function escribirTextoAleatorio(){
    let formInput= document.getElementById('CaptchaOrigen');
    formInput.value= textoAleatorio(5);
}
function pocesarCaptcha(event) {
    event.preventDefault();
}