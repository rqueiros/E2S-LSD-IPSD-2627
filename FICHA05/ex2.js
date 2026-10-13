// Ficha 05 — Exercício 2: filmes
let filme1 = {
    titulo: "O Senhor dos Anéis",
    realizador: "Peter Jackson",
    ano: 2001,
    duracao: 178
};

let filme2 = {
    titulo: "Matrix",
    realizador: "Lana Wachowski, Lilly Wachowski",
    ano: 1999,
    duracao: 136
};

let filme3 = {
    titulo: "Inception",
    realizador: "Christopher Nolan",
    ano: 2010,
    duracao: 148
};

// a) Apresentar os títulos dos filmes do novo milénio (a partir de 2001).
console.log("Filmes do novo milénio:");
if (filme1.ano >= 2001) {
    console.log(filme1.titulo);
}
if (filme2.ano >= 2001) {
    console.log(filme2.titulo);
}
if (filme3.ano >= 2001) {
    console.log(filme3.titulo);
}

// b) Apresentar os títulos dos filmes com mais de 120 minutos.
console.log("Filmes com mais de 2 horas de duração:");
if (filme1.duracao > 120) {
    console.log(filme1.titulo);
}
if (filme2.duracao > 120) {
    console.log(filme2.titulo);
}
if (filme3.duracao > 120) {
    console.log(filme3.titulo);
}

// c) Apresentar a média de duração dos três filmes, em minutos.
let mediaDuracao = (filme1.duracao + filme2.duracao + filme3.duracao) / 3;
console.log("Média de duração dos filmes: " + mediaDuracao + " minutos");
