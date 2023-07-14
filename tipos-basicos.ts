let notas: number[] = [1, 2];

// tuple
let alunos: [string, number, string] = ['Jose', 10, 'Matematica'];

enum Cor{Azul, Amarelo, Branco, Preto, Verde};
let corFundoBandeira: Cor = Cor.Verde;

// Any
let algumValor: any = 4;
algumValor = 'Algum é uma string';
algumValor = true;

// void - nao retorna nada
function alerta(): void {
    // alert('Operação não permitida')
}

//null e undefined -> Não faz muito sentido!
let u: undefined = undefined;
let n: null = null;
