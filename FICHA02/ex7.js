  // Ex 7 - Calculadora simples
 
  let n1 = 7;
  let n2 = 3;
  let operator = "!";     // "+", "-", "*" ou "/"
  let result;

  if (operator == "+") {
    result = n1 + n2;
  } else if (operator == "-") {
    result = n1 - n2;
  } else if (operator == "*") {
    result = n1 * n2;
  } else if (operator == "/") {
    result = n1 / n2;
  } else {
    result = "Operação inválida";
  }

  console.log(n1 + " " + operator + " " + n2 + " = " + result);
