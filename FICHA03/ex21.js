// Monitorização de uma semana — frequências entre 1 e 150 bpm
let diasBaixa = 0;
let soma = 0;
let maior = 0;
for (let dia = 1; dia <= 7; dia++) {
    let frequencia = Math.floor(Math.random() * 150) + 1;
    soma += frequencia;
    if (frequencia > maior) {
        maior = frequencia;
    }
    if (frequencia < 60) {
        console.log("Dia " + dia + ": " + frequencia + " bpm - Frequência baixa");
        diasBaixa++;
    } else if (frequencia <= 100) {
        console.log("Dia " + dia + ": " + frequencia + " bpm - Frequência normal");
    } else {
        console.log("Dia " + dia + ": " + frequencia + " bpm - Frequência elevada");
    }
}
let media = soma / 7;
console.log("Dias com frequência baixa: " + diasBaixa);
console.log("Média: " + media.toFixed(2) + " bpm");
console.log("Frequência mais elevada: " + maior + " bpm");
