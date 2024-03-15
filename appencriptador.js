const textArea=document.querySelector(".text-area");
const mensaje=document.querySelector(".mensaje");
const text1= document.querySelector(".Text_1");
const text2= document.querySelector(".Text_2");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//Función Encriptar

function btnEncriptar(){

    const textoEncriptado =encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value="";
    mensaje.style.backgroundImage= "none";
    text1.textContent="";
    text2.textContent="";
    
}

//Remover caracteres especiales

function removerCaracteresEspeciales(texto) {
    
    var textoSinAcentos = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    return textoSinAcentos.toLowerCase().replace(/[^a-záéíóúü\s]/g, function(char) {
        switch (char) {
            case 'á':
                return 'a';
            case 'é':
                return 'e';
            case 'í':
                return 'i';
            case 'ó':
                return 'o';
            case 'ú':
                return 'u';
            case 'ü':
                return 'u'; // En algunos casos, 'ü' se reemplaza con 'u'
            default:
                return char;
        }
    });
}

function encriptar(stringEncriptada){    
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada= removerCaracteresEspeciales(stringEncriptada);


    for(let i=0;i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }

    return stringEncriptada

}     


// Función Desencriptar

function btnDesencriptar(){
    const textoDesencriptado =desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value="";
    mensaje.style.backgroundImage= "none";
    text1.textContent="";
    text2.textContent="";
    
}



function desencriptar(stringDesencriptada){    
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada= stringDesencriptada.toLowerCase()


    for(let i=0;i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }

    return stringDesencriptada

}     


//Función Copiar


function copiartexto(){

    mensaje.select();
    document.execCommand("copy");
    window.getSelection();
    window.getSelection().removeAllRanges();
    textArea.value="";
    mensaje.value="";
                      
    alert("¡Texto encriptado copiado!");

    text1.textContent="";
    text2.textContent="";

}