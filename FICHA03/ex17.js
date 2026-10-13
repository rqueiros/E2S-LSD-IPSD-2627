// Contagem de batimentos — 10 valores inteiros entre 1 e 150 bpm
let elevadas = 0;
for (let medicao = 1; medicao <= 10; medicao++) {
    let frequencia = Math.floor(Math.random() * 150) + 1;
    if (frequencia < 60) {
        console.log("Medição " + medicao + ": " + frequencia + " bpm - baixa");
    } else if (frequencia <= 100) {
        console.log("Medição " + medicao + ": " + frequencia + " bpm - normal");
    } else {
        console.log("Medição " + medicao + ": " + frequencia + " bpm - elevada");
        elevadas++;
    }
}
console.log("Medições elevadas: " + elevadas);
