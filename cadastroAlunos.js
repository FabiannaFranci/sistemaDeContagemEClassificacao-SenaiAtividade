// •	se o número for par, escreva 'par' e o número correspondente.
// •	se o número for ímpar, escreva 'ímpar' e o número correspondente.
// •	se o número for zero, escreva 'zero' e o número correspondente.  
let cont = 0;
while(cont < 10){
    let nomeDoAluno = window.prompt('Nome do aluno: ')
    if(cont == 0){
    alert('O aluno ' + nomeDoAluno + ' na posição ' + cont + ', é zero');
    }
    if(cont % 2 == 0 && cont != 0){
    alert('O aluno ' + nomeDoAluno + ' na posição ' + cont + ', é par');
    }
    if(cont % 2 == 1 && cont != 0){
    alert('O aluno ' + nomeDoAluno + ' na posição ' + cont + ', é impar');
    }
    cont ++;
}