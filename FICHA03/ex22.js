// Sistema de alerta hospitalar
let idade = 15;
let temperatura = 39;
let frequencia = 100;
if (temperatura > 38.5 || frequencia > 120) {
    console.log("Alerta");
} else {
    console.log("Sem alerta imediato");
}
if (idade < 18) {
    console.log("Paciente pediátrico");
}
