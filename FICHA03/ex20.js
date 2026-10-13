// Contagem de pessoas — idades inteiras entre 0 e 100 anos
let criancasAdolescentes = 0;
let adultos = 0;
let idosos = 0;
for (let pessoa = 1; pessoa <= 10; pessoa++) {
    let idade = Math.floor(Math.random() * 101);
    if (idade < 18) {
        console.log("Pessoa " + pessoa + ": " + idade + " anos - Criança/adolescente");
        criancasAdolescentes++;
    } else if (idade <= 64) {
        console.log("Pessoa " + pessoa + ": " + idade + " anos - Adulto");
        adultos++;
    } else {
        console.log("Pessoa " + pessoa + ": " + idade + " anos - Idoso");
        idosos++;
    }
}
console.log("Crianças/adolescentes: " + criancasAdolescentes);
console.log("Adultos: " + adultos);
console.log("Idosos: " + idosos);
