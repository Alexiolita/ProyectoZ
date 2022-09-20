let nuevoCaptcha = document.querySelector('#captcha');
let ingresoTexto = document.querySelector('#ingresoCaptcha');
let verificaCaptcha = document.querySelector('#textoVerificaCaptcha');
let textoResultadoFormulario = document.querySelector('#textoResultadoFormulario')
let botonComprobar = document.querySelector('#botonCaptcha'); 
botonComprobar.addEventListener("click", validarCaptcha);

let array = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];
//la funcion generaCaptcha genera un captcha al azar a partir del array, lo almacena en nuevoCaptcha y lo imprime en el input id="captcha"
function generaCaptcha(){ 
    let texto="";  
    let index = 0;
    for(let i=1; i <= 8; i++){
        index = Math.floor(Math.random()*(63-0+1)+0); 
        let letra = array[index]; 
        texto += letra; 
    }
    nuevoCaptcha.value = texto; 
    console.log(texto); 
}
generaCaptcha();

//La funcion reiniciaTexto reinicia el value del input de ingreso de captcha para que pueda volver a intentar otro ingreso distinto con el nuevo captcha
function reiniciaTexto(){ 
    ingresoTexto.value = ingresoTexto.nodeValue;
}

//Cambia el estilo del texto del resultado del test en caso de ser correcto el captcha ingresad
function cambiaResultadoTest(){
    textoVerificado.innerHTML = "Captcha correcto";
    textoResultadoFormulario.innerHTML = "Información importante: En caso de haber seleccionado la opción SI más de 5 veces, lo siento, ya te has contagiado el virus. Por el momento no hay cura, la mejor opción es aislarte.";
    textoResultadoFormulario.classList.add("captchaCorrecto");
    textoResultadoFormulario.classList.remove("captchaIncorrecto");
}

const MAX = 5;
let intento = 0;
//la funcion validarCaptcha comprueba que si el texto no coincide con el captcha te vuelva a reiniciar todo
function validarCaptcha(){
    if (ingresoTexto.value != nuevoCaptcha.value){ 
        if (intento< MAX){ 
            let intentosRestantes=(MAX - intento); 
            intento++; 
            verificaCaptcha.innerHTML = "Captcha ingresado de manera incorrecta. Restan " + intentosRestantes + " intentos.";
            generaCaptcha(); 
            reiniciaTexto();         
        } else{
            verificaCaptcha.innerHTML = "Se acabaron los intentos.";   
        }
    }else{
        cambiaResultadoTest();
    } 
}

