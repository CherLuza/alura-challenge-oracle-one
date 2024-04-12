const textArea = document.querySelector(".text-area");
const textAreaDecrypt = document.querySelector(".text-area-decrypt");


//Para Encriptar//

//procedimento ao clicar o botão de encriptar//
function btnEncriptar() {
 const textoEncriptado = encriptar(textArea.value);
 textAreaDecrypt.value = textoEncriptado;
 textArea.value = "";
}

//realiza a função de encriptar a mensagem//
function encriptar(stringEncriptada) {
 let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
 stringEncriptada = stringEncriptada.toLowerCase(); //coloca em letra minúscula//
 for (let i = 0; i < matrizCodigo.length; i++) {
 if(stringEncriptada.includes(matrizCodigo[i][0])) {
 stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
 }
 }
 return stringEncriptada;
}

//Para Desencriptar//

//invoca a função//
function btnDesencriptar() {
 const textoDesencriptado = desencriptar(textArea.value);
 textAreaDecrypt.value = textoDesencriptado;
 textArea.value = "";
}

//realiza a função de desencriptar a mensagem//
function desencriptar(stringDesencriptada) {
let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
 stringDesencriptada = stringDesencriptada.toLowerCase();

 for (let i = 0; i < matrizCodigo.length; i++) {
 if(stringDesencriptada.includes(matrizCodigo[i][1])) {
 stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
 }
 }
 return stringDesencriptada;
}

function copiar() {
    var textAreaDecrypt = document.querySelector('.textAreaDecrypt');
    textAreaDecrypt.select();
    document.execCommand('copy');
    alert("Mensagem secreta copiada!");
}

//realiza a cópia do texto criptografado//
document.querySelector(".button-copy-text").addEventListener("click", function() {
    copyText();
});

function copyText() {
    const textToCopy = textAreaDecrypt.value;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert("Texto copiado com sucesso!");
        })
        .catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });
}
