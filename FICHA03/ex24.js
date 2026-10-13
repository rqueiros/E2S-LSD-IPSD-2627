// Análise do sono — horas inteiras entre 0 e 12
let totalHoras = 0;
let noitesMenos6 = 0;
let noitesAdequadas = 0;
for (let noite = 1; noite <= 7; noite++) {
    let horas = Math.floor(Math.random() * 13);
    totalHoras += horas;
    if (horas < 6) {
        console.log("Noite " + noite + ": " + horas + " horas - Sono insuficiente");
        noitesMenos6++;
    } else if (horas <= 8) {
        console.log("Noite " + noite + ": " + horas + " horas - Sono adequado");
        noitesAdequadas++;
    } else {
        console.log("Noite " + noite + ": " + horas + " horas - Sono prolongado");
    }
}
let media = totalHoras / 7;
console.log("Média de horas dormidas: " + media.toFixed(2));
console.log("Noites com menos de 6 horas: " + noitesMenos6);
// Critério adotado: todas as sete noites devem ter entre 6 e 8 horas.
if (noitesAdequadas === 7) {
    console.log("Semana com sono adequado");
} else {
    console.log("Semana sem sono adequado em todas as noites");
}
