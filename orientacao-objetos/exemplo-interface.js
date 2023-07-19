function imprimirPessoa(pessoa) {
    console.log("".concat(pessoa.sexo, ", ").concat(pessoa.idade));
}
var joaoMarcos = { nome: 'Joao Marcos', idade: 22, sexo: 'Masculino' };
imprimirPessoa(joaoMarcos);
