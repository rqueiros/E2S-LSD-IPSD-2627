// Controlo de acesso ao ginásio
// Altere os valores iniciais para testar outros casos.
let idade = 16;
let temMensalidadeValida = true;
let temAutorizacaoMedica = true;

if (idade >= 16 && temMensalidadeValida && temAutorizacaoMedica) {
    console.log("Pode entrar");
} else {
    console.log("Não pode entrar");
}
