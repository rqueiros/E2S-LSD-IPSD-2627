// Ficha 05 — Exercício 1: escolas
let escola = {
    nome: "E2S",
    local: "Porto",
    nAlunos: 2000
};

let escola2 = {
    nome: "FMAD",
    local: "Vila do Conde",
    nAlunos: 1500
};

// a) Apresentar o local da escola E2S.
console.log("Local da escola E2S: " + escola.local);

// b) Apresentar o nome da escola com mais alunos.
if (escola.nAlunos > escola2.nAlunos) {
    console.log("Escola com mais alunos: " + escola.nome);
} else if (escola2.nAlunos > escola.nAlunos) {
    console.log("Escola com mais alunos: " + escola2.nome);
} else {
    console.log("As escolas " + escola.nome + " e " + escola2.nome
        + " têm o mesmo número de alunos.");
}

// c) Apresentar a média de alunos das duas escolas.
let mediaAlunos = (escola.nAlunos + escola2.nAlunos) / 2;
console.log("Média de alunos das escolas: " + mediaAlunos);
