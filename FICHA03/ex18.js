// Contagem de passos — valores entre 0 e 20000
let diasObjetivo = 0;
for (let dia = 1; dia <= 7; dia++) {
    let passos = Math.floor(Math.random() * 20001);
    if (passos >= 10000) {
        console.log("Dia " + dia + ": " + passos + " passos - Objetivo atingido");
        diasObjetivo++;
    } else {
        console.log("Dia " + dia + ": " + passos + " passos - Objetivo não atingido");
    }
}
console.log("Dias com o objetivo atingido: " + diasObjetivo);
