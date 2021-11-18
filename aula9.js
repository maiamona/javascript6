// função construtora constroi, retorna objetos
// função fabrica fabrica objetos
// função construtora comesamos com as letras maiusculas

// função construtora não utiliza ',' para separar os elementos
function Pessoa(nome, sobrenome) {// função construtora, esta função não presisa da palavra 'return' ela faz o retorno automaticamente
    const ID = 123456; //variavel (ou metodos ou atributos) privada(os) apenas para a função
    const metodoInterno = function () {
        
    };
    this.nome = nome;// 'this' significa que são atributos ou metodos publicos
    this.sobrenome = sobrenome;
    this.metodo = function () {
        console.log(this.nome + ': sou um metodo');
    }
}

const p5 = new Pessoa('mona', 'garcia');// função construtora, a palavra 'new' cria um objeto vazio e manda o 'this' na variavel 'p1' e ela será o nosso novo objeto 

console.log(p5.nome);
p5.metodo();