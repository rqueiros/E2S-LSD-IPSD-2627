  // Ex 7 - Calculadora simples
 
  let n1 = 10;
  let n2 = 5;
  let operator = "/";     // "+", "-", "*" ou "/"
  let result;

  if (operator == "+") {
    result = n1 + n2;
  } else if (operator == "-") {
    result = n1 - n2;
  } else if (operator == "*") {
    result = n1 * n2;
  } else if (operator == "/") {
    // Evitar divisão por zero
    result = n1 / n2;
  } else {
    result = "Operação inválida";
  }

  console.log(n1 + " " + operator + " " + n2 + " = " + result);
