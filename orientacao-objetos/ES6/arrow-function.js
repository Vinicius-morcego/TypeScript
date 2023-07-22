const precos = ['10', '23', '19'];

// modelo tradicional no javascript
// const precosEmReais = precos.map(function(preco) {
//     return 'R$ '+preco + ',00';
// });

//arrow funcion exemplo
const precosEmReais = precos.map(preco => 'R$ '+preco + ',00') 
console.log(precosEmReais);
const acimaDeVinte = precos.filter(preco => preco > 20)
//exemplo de template strings ${preco}
.map(preco => `R$ ${preco},00`)   
console.log(acimaDeVinte)
