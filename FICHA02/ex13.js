// Ex 8 - Calculadora de IMC (Índice de Massa Corporal)
  // IMC = peso (kg) / altura² (m)
 
  let weight = 70;        // kg
  const height = 1.75;   // metros
 
  const imc = weight / (height ** 2);
  console.log("IMC: " + imc.toFixed(1));
 
  if (imc < 18.5) {
    console.log("Baixo peso");
  } else if (imc < 25) {          // 18.5 - 24.9
    console.log("Peso normal");
  } else if (imc < 30) {          // 25 - 29.9
    console.log("Excesso de peso");
  } else if (imc < 35) {          // 30 - 34.9
    console.log("Obesidade");
  } else {                        // >= 35
    console.log("Obesidade extrema");
  }
