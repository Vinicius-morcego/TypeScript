var Cliente = /** @class */ (function () {
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.apresentar = function () {
        return "Ol\u00E1, eu sou ".concat(this.nome, " e tenho ").concat(this.idade, " anos");
    };
    return Cliente;
}());
var joao = new Cliente('Joao', 25);
var apresentacao = joao.apresentar();
console.log(apresentacao);
var maria = new Cliente('Maria', 20);
console.log(maria.apresentar());
