// Semana de corrida — distâncias inteiras entre 0 e 15 km
let total = 0;
let diasPeloMenos5 = 0;
let diasSemCorrida = 0;
for (let dia = 1; dia <= 7; dia++) {
    let distancia = Math.floor(Math.random() * 16);
    console.log("Dia " + dia + ": " + distancia + " km");
    total += distancia;
    if (distancia >= 5) {
        diasPeloMenos5++;
    }
    if (distancia === 0) {
        diasSemCorrida++;
    }
}
let media = total / 7;
console.log("Distância total: " + total + " km");
console.log("Dias com pelo menos 5 km: " + diasPeloMenos5);
console.log("Dias sem corrida: " + diasSemCorrida);
console.log("Média diária: " + media.toFixed(2) + " km");
if (media >= 5) {
    console.log("A média foi de pelo menos 5 km por dia");
} else {
    console.log("A média foi inferior a 5 km por dia");
}
