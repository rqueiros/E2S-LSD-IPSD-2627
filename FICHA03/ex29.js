// Relatório semanal de saúde
let diasSaudaveis = 0;
let diasMelhorar = 0;
for (let dia = 1; dia <= 7; dia++) {
    let passos = Math.floor(Math.random() * 20001); // 0 a 20000 passos
    let horasSono = Math.floor(Math.random() * 13); // 0 a 12 horas
    let litrosAgua = Math.floor(Math.random() * 41) / 10; // 0 a 4 litros
    console.log("Dia " + dia + ": " + passos + " passos, " + horasSono + " horas de sono, " + litrosAgua + " litros de água");
    if (passos >= 8000 && horasSono >= 7 && litrosAgua >= 1.5) {
        console.log("Dia saudável");
        diasSaudaveis++;
    } else {
        console.log("Dia a melhorar");
        diasMelhorar++;
    }
}
let percentagem = diasSaudaveis / 7 * 100;
console.log("Dias saudáveis: " + diasSaudaveis);
console.log("Dias a melhorar: " + diasMelhorar);
console.log("Percentagem de dias saudáveis: " + percentagem.toFixed(2) + "%");
