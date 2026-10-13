//Números Primos: insira um número e determine se ele é um número primo ou não. 
// Apresente na consola “SIM” ou “NÃO”. Nota: Um número primo é divisível apenas por 1 e por ele mesmo


let num = 7;
let isPrime = true
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrime = false
    }
}

if (isPrime == true) {
    console.log("SIM")
} else {
    console.log("NÃO")
}