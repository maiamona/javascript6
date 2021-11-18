function criaPessoa(nome3, sobrenome3) {
    return{
        nome3,
        sobrenome3
    };
}

const p1 = criaPessoa('mona', 'garcia');
const p2 = {
    nome3: 'mona',
        sobrenome3: 'garcia'
};

console.log(typeof p1);
console.log(typeof p2);

function falaFrase(comeco) {
    function falaResto(resto) {
        
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('ola');
console.log(olaMundo('mundo'));

function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}

function criaMultiplicador1(multiplicador) {
    function multiplicacao(n) {
       return n * multiplicador; 
    }
    return multiplicacao;// retorna a função que faz a multiplicação
}

function criaMultiplicador2(multiplicador) {
    
    return function(n) {
        return n * multiplicador; 
     }
}

const duplica1 = criaMultiplicador1(2);
const duplica2 = criaMultiplicador2(2);
const triplica1 = criaMultiplicador1(3);
const triplica2 = criaMultiplicador2(3);
const quadriplica1 = criaMultiplicador1(4);
const quadriplica2 = criaMultiplicador2(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
console.log('------------------');
console.log(duplica1(2));
console.log(triplica1(2));
console.log(quadriplica1(2));
console.log('------------------');
console.log(duplica2(2));
console.log(triplica2(2));
console.log(quadriplica2(2));