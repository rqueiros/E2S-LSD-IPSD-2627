// Ficha 04 — Introdução aos Objetos
// Resolução das alíneas a) a i).

let utente = {
    primeiroNome: "Ana",
    ultimoNome: "Silva",
    idade: 25,
    ativo: true,
    apresentar() {
        return "Sou " + this.primeiroNome + " " + this.ultimoNome
            + " e a minha profissão é " + this.profissao + ".";
    }
};

// a) Apresentar o primeiro e o último nome.
console.log(utente.primeiroNome + " " + utente.ultimoNome);

// b) Apresentar a idade apenas se a ficha estiver ativa.
if (utente.ativo) {
    console.log("Idade: " + utente.idade);
} else {
    console.log("Ficha da utente desativada");
}

// c) Desativar a ficha.
utente.ativo = false;

// d) Adicionar a profissão.
utente.profissao = "Professor";

// e) Remover a idade.
delete utente.idade;

// f) Mostrar o objeto depois das alterações.
console.log(utente);

// g) Mostrar cada chave e o respetivo valor.
for (let chave in utente) {
    console.log(chave + ": " + utente[chave]);
}


// i) Chamar o método e apresentar a mensagem devolvida.
console.log(utente.apresentar());
