interface Pessoa{
    idade: number;
    sexo?: string; //o interrogação define que não é obrigatorio a propriedade sexo
}

function imprimirPessoa(pessoa: Pessoa){
    console.log(`${pessoa.sexo}, ${pessoa.idade}`);    
}

let joaoMarcos = {nome: 'Joao Marcos', idade: 22, sexo: 'Masculino'};

imprimirPessoa(joaoMarcos);