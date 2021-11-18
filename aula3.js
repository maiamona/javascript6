const nome = 'Mona';

function falaNome() {
    console.log(nome);
}

// falaNome();

function usaFalaNome() {
    falaNome();  
}

usaFalaNome();
// escopo global
function retornaFuncao() {
    const nome = 'Luiz';
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao);
console.dir(funcao);
console.log(funcao());
console.dir(funcao());