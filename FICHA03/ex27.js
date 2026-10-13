// Centro de vacinação
// Altere os valores iniciais para testar outros casos.
let idade = 17;
let temMarcacao = true;
let temContraindicacao = false;
let temAutorizacao = true;

if (temMarcacao && !temContraindicacao && (idade >= 18 || temAutorizacao)) {
    console.log("Pode ser vacinada");
} else {
    console.log("Não pode ser vacinada");
}
