//Números Primos: insira um número e determine se ele é um número primo ou não. 
// Apresente na consola “SIM” ou “NÃO”. Nota: Um número primo é divisível apenas por 1 e por ele mesmo


let num = 7;
let cont = 0
for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        cont++
    }
}

if (cont == 2) {
    console.log("SIM")
} else {
    console.log("NÃO")
}