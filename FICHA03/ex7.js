// Classificação do IMC
let imc = 24.9;

// Os intervalos são contínuos: 18.5 até menos de 25 e 25 até menos de 30.
if (imc < 18.5) {
    console.log("Baixo peso");
} else if (imc < 25) {
    console.log("Peso normal");
} else if (imc < 30) {
    console.log("Excesso de peso");
} else {
    console.log("Obesidade");
}
