// Análise de glicemia — valores inteiros entre 40 e 200
let baixas = 0;
let normais = 0;
let elevadas = 0;
let muitoElevadas = 0;
for (let medicao = 1; medicao <= 10; medicao++) {
    let glicemia = Math.floor(Math.random() * 161) + 40;
    if (glicemia < 70) {
        console.log("Medição " + medicao + ": " + glicemia + " - Glicemia baixa");
        baixas++;
    } else if (glicemia <= 99) {
        console.log("Medição " + medicao + ": " + glicemia + " - Glicemia normal");
        normais++;
    } else if (glicemia <= 125) {
        console.log("Medição " + medicao + ": " + glicemia + " - Glicemia elevada");
        elevadas++;
    } else {
        console.log("Medição " + medicao + ": " + glicemia + " - Glicemia muito elevada");
        muitoElevadas++;
    }
}
console.log("Baixas: " + baixas);
console.log("Normais: " + normais);
console.log("Elevadas: " + elevadas);
console.log("Muito elevadas: " + muitoElevadas);
