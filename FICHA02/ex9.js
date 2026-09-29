  // Ex 9 - Ano bissexto
  // Divisível por 4 e não por 100, a não ser que também seja divisível por 400
 
  let year = 2024;
 
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("SIM");
  } else {
    console.log("NÃO");
  }
