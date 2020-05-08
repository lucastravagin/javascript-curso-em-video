let numeros = [1,25,9,8,2,5,4,4,1,2,9,3] //Auto Atribuicao
let arrayPar = []
let arrayImpar = []

for(i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        //Par
        arrayPar.push(numeros[i])
    }else {
        arrayImpar.push(numeros[i])
    }
}

console.log(`Números pares: ${arrayPar.toString()} \n Números ímpares: ${arrayImpar.toString()}`);

