// Verificar numeros perfeitos


let num = 6; // Número a verificar
let sum = 0
for(let i = 1; i < num; i++) {
    if(num % i == 0) {
        sum = sum + i
    }
}

if(sum == num) {
    console.log("SIM")
} else {
    console.log("NÃO")
}