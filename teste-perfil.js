function habilitarEdicao() {
    var campo = document.getElementById("campoTexto");
    var input = campo.querySelector("input");
    var texto = campo.querySelector(".texto");
    var btnEditar = campo.querySelector(".editar");
    var btnSalvar = campo.querySelector(".salvar");

    input.value = texto.textContent;
    texto.style.display = "none";
    input.style.display = "inline-block";
    btnEditar.style.display = "none";
    btnSalvar.style.display = "inline-block";
}


function salvarEdicao() {
    var campo = document.getElementById("campoTexto");
    var input = campo.querySelector("input");
    var texto = campo.querySelector(".texto");
    var btnEditar = campo.querySelector(".editar");
    var btnSalvar = campo.querySelector(".salvar");

    texto.textContent = input.value;
    input.style.display = "none";
    texto.style.display = "inline-block";
    btnSalvar.style.display = "none";
    btnEditar.style.display = "inline-block";

    // Armazenar o valor no localStorage
    localStorage.setItem("textoEditado", input.value);
}


function carregarInformacoes() {
    var textoEditado = localStorage.getItem("textoEditado");
    if (textoEditado) {
        var campo = document.getElementById("campoTexto");
        var texto = campo.querySelector(".texto");
        texto.textContent = textoEditado;
    }
}