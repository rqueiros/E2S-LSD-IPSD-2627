// Ex 10 - Classificação de notas
 
  let grade = -5;
 
  if (grade >= 10 && grade <= 20) {        // [10,20]
    console.log("Nota positiva");
  } else if (grade >= 7 && grade < 10) {   // [7,10[
    console.log("Nota a ir a oral");
  } else if (grade >= 0 && grade < 7) {    // [0,7[
    console.log("Nota negativa");
  } else {                               // qualquer outro valor
    console.log("Nota inválida");
  }
