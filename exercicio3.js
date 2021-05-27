//3 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function ParOuImpar(numero1 , numero2) {
    if(numero1*numero2%2 ===0){
        return `o numero é par : ${numero1/numero2}`
    }
    
    
}
console.log(ParOuImpar(16,4))
