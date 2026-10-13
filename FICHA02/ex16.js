//Soma de Números Pares: Defina um número e, em seguida, somar todos os números pares de 1 até o número
//inserido e exibir o resultado na consola.

let num = 10;
let sum = 0;

for (let i = 1; i <= num; i++) {
    if(i % 2 == 0) {
        sum = sum + i
    }
}
console.log(sum);