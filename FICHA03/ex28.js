// Monitorização de um atleta — frequências entre 100 e 200 bpm
let baixas = 0;
let moderadas = 0;
let elevadas = 0;
let muitoElevadas = 0;
let acima180 = 0;
for (let medicao = 1; medicao <= 12; medicao++) {
    let frequencia = Math.floor(Math.random() * 101) + 100;
    if (frequencia < 140) {
        console.log("Medição " + medicao + ": " + frequencia + " bpm - Intensidade baixa");
        baixas++;
    } else if (frequencia <= 159) {
        console.log("Medição " + medicao + ": " + frequencia + " bpm - Intensidade moderada");
        moderadas++;
    } else if (frequencia <= 179) {
        console.log("Medição " + medicao + ": " + frequencia + " bpm - Intensidade elevada");
        elevadas++;
    } else {
        console.log("Medição " + medicao + ": " + frequencia + " bpm - Intensidade muito elevada");
        muitoElevadas++;
    }
    // Ultrapassar 180 é diferente de atingir 180.
    if (frequencia > 180) {
        acima180++;
    }
}
console.log("Intensidade baixa: " + baixas);
console.log("Intensidade moderada: " + moderadas);
console.log("Intensidade elevada: " + elevadas);
console.log("Intensidade muito elevada: " + muitoElevadas);
console.log("Frequência acima de 180 bpm: " + acima180);
