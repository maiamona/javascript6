// funções fabrica ou Factory function

function criaPessoa(nome, sobrenome, a, p) {//funções dentro de um objeto chama-se metodo
    return {
        nome,
         sobrenome,
        get nomeCompleto(){
return `${this.nome} ${this.sobrenome}`
         }, 
         set nomeCompleto(valor){//Setter, o 'set nomeCompleto(valor) => p1.nomeCompleto = 'Lucy Garcia';' valor abaixo
valor = valor.split(' ');// transforma o 'valor' em um array ex. [ 'Lucy', 'Garcia' ]
this.nome = valor.shift();
this.sobrenome = valor.join(' ');
// console.log(valor);
         },
        fala(assunto = 'nadando'){
        //    return `${nome} esta ${assunto} e pesa ${this.peso}.` 
           return `${this.nome} esta ${assunto} e pesa ${this.peso}.` 
        },
        peso: 80,
        altura: a,
        peso2: p,
        get imc(){// utilizandon o get antes da função ela finge que afunção é um atributo da classe (finge ser uma string)
         const indece = this.peso2 / (this.altura ** 2); 
         return indece.toFixed(2);
        },
        imc2(){// utilizandon o get (Getter) antes da função ela finge que afunção é um atributo da classe (finge ser uma string)
         const indece = this.peso2 / (this.altura ** 2); 
         return indece.toFixed(2);
        }
    };
}

const p1 = criaPessoa('mona', 'garcia', 1.8, 90);
p1.nomeCompleto = 'Lucy Cazevo Garcia';
console.log(p1.imc);
console.log(p1.imc2());
console.log(p1.fala('falando sobre Js'));
console.log(p1.fala());
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);