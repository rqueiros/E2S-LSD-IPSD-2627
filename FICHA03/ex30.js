// Sistema de acompanhamento de pacientes
// Sem arrays: guardar cada medição como três algarismos numa string comum.
// Exemplo: 365 representa 36.5 ºC. As 20 medições ocupam 60 caracteres.
let registo = "";
let somaDecimos = 0;
let maiorDecimos = 350;
let menorDecimos = 400;
let superiores375 = 0;
let inferiores36 = 0;

for (let medicao = 1; medicao <= 20; medicao++) {
    let decimos = Math.floor(Math.random() * 51) + 350;
    registo += decimos;
    somaDecimos += decimos;
    if (decimos > maiorDecimos) {
        maiorDecimos = decimos;
    }
    if (decimos < menorDecimos) {
        menorDecimos = decimos;
    }
    if (decimos > 375) {
        superiores375++;
    }
    if (decimos < 360) {
        inferiores36++;
    }
    console.log("Medição " + medicao + ": " + (decimos / 10).toFixed(1) + " ºC");
}

let mediaDecimos = somaDecimos / 20;
let media = mediaDecimos / 10;
let acimaMedia = 0;
for (let posicao = 0; posicao < registo.length; posicao += 3) {
    let decimos = Number(registo.substring(posicao, posicao + 3));
    if (decimos > mediaDecimos) {
        acimaMedia++;
    }
}

// Contar as ocorrências de cada temperatura possível sem criar um array.
let maiorContagem = 0;
let modas = "";
for (let candidato = 350; candidato <= 400; candidato++) {
    let contagem = 0;
    for (let posicao = 0; posicao < registo.length; posicao += 3) {
        let decimos = Number(registo.substring(posicao, posicao + 3));
        if (decimos === candidato) {
            contagem++;
        }
    }
    if (contagem > maiorContagem) {
        maiorContagem = contagem;
        modas = (candidato / 10).toFixed(1) + " ºC";
    } else if (contagem === maiorContagem && contagem > 0) {
        modas += "; " + (candidato / 10).toFixed(1) + " ºC";
    }
}

let amplitude = (maiorDecimos - menorDecimos) / 10;
let percentagemAcimaMedia = acimaMedia / 20 * 100;
console.log("Média: " + media.toFixed(2) + " ºC");
if (maiorContagem === 1) {
    console.log("Sem moda: todas as temperaturas aparecem apenas uma vez");
} else {
    console.log("Moda(s): " + modas + " - " + maiorContagem + " ocorrências cada");
}
console.log("Temperatura mais alta: " + (maiorDecimos / 10).toFixed(1) + " ºC");
console.log("Temperatura mais baixa: " + (menorDecimos / 10).toFixed(1) + " ºC");
console.log("Temperaturas acima da média: " + acimaMedia);
console.log("Temperaturas superiores a 37.5 ºC: " + superiores375);
console.log("Temperaturas inferiores a 36 ºC: " + inferiores36);
console.log("Amplitude térmica: " + amplitude.toFixed(1) + " ºC");
console.log("Percentagem acima da média: " + percentagemAcimaMedia.toFixed(2) + "%");

// O enunciado não define os limites da classificação geral.
// Critério didático adotado, baseado na média:
// Normal entre 36 e 37.5 ºC; Febre a partir de 38 ºC; Atenção nos restantes casos.
if (media >= 38) {
    console.log("Classificação geral: Febre");
} else if (media >= 36 && media <= 37.5) {
    console.log("Classificação geral: Normal");
} else {
    console.log("Classificação geral: Atenção");
}
