function encriptarTexto(texto) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        switch (caracter) {
            case 'a':
                resultado += 'ai';
                break;
            case 'e':
                resultado += 'enter';
                break;
            case 'i':
                resultado += 'imes';
                break;
            case 'o':
                resultado += 'ober';
                break;
            case 'u':
                resultado += 'ufat';
                break;
            default:
                resultado += caracter;
                break;
        }
    }
    return resultado;
}


// Función para desencriptar el texto
function desencriptarTexto(texto) {
    let resultado = texto;
    resultado = resultado.replace(/ai/g, 'a');
    resultado = resultado.replace(/enter/g, 'e');
    resultado = resultado.replace(/imes/g, 'i');
    resultado = resultado.replace(/ober/g, 'o');
    resultado = resultado.replace(/ufat/g, 'u');
    return resultado;
}

// Función para cambiar el texto del elemento
function cambiarTextoElemento(texto, elemento) {
    const textoPlano = document.getElementById('textoPlano').value;
    const mensajeAlerta = document.getElementById('mensajeAlerta');
    const ocultarMuñeco = document.getElementById("muñeco");
    let resultado;

    if (texto === 'encriptar') {
        resultado = encriptarTexto(textoPlano);
        ocultarMuñeco.style.display = "none";
    } else if (texto === 'desencriptar') {
        resultado = desencriptarTexto(textoPlano);
        ocultarMuñeco.style.display = "none";
    }

    if (resultado) {
        document.getElementById('estadoMensaje1').textContent = resultado;
        document.getElementById('estadoMensaje2').textContent = '';
        ocultarMuñeco.style.display = "none";
        mensajeAlerta.style.display = 'none';
    } else {
        
        document.getElementById('estadoMensaje1').textContent = 'Error al procesar el texto';
        document.getElementById('estadoMensaje2').textContent = '';
        ocultarMuñeco.style.display = "none";
        mensajeAlerta.style.display = 'block';
    }
}

// Event listeners para los botones
document.getElementById('encriptar').addEventListener('click', function() {
    cambiarTextoElemento('encriptar');
});

document.getElementById('desencriptar').addEventListener('click', function() {
    cambiarTextoElemento('desencriptar');
});