//5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

// a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console


let operação = 'multiplicação'
let num1 = 28
let num2 = 5

switch(operação){
    case 'soma':
        console.log(`o resultado da sua soma é: ${num1 + num2}`)
        break
        case 'multiplicação':
            console.log(`o resultado da sua multiplicação é: ${num1 * num2}`)
            break
            case 'divisão':
                console.log(`o resuldado da sua divisão é: ${num1 / num2}`)
                break
                case 'subtração':
                    console.log(`o resultado da sua subtração é: ${num1 - num2}`)
                    break
                    default:
                
                    console.log('Faça uma operação válida')
                }