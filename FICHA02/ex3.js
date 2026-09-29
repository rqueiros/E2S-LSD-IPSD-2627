  // Ex 3 - Preço da camisola com IVA (23%) e desconto (10%)
 
  const productPrice = 35;                         // preço base (€)
  const iva = 0.23;                                // taxa de IVA
  const discount = 0.10;                           // taxa de desconto
 
  const priceWithVAT = productPrice * (1 + iva);    // 35 * 1.23 = 43.05
  const finalValue = priceWithVAT * (1 - discount); // 43.05 * 0.90 = 38.745
 
  console.log(finalValue);
