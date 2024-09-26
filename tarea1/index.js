/*
Crea una función en JavaScript llamada SysBsqd que tome un array de números
enteros consecutivos del 1 al n, pero con un número faltante, y retorne el número
que falta.
Requisitos:
• La función debe recibir un array de enteros con los números desordenados,
del 1 al n, excepto uno que falta.
• Debe retornar el número faltante.
Resultado:
SysBsqd ([3, 7, 1, 2, 8, 4, 5]) // Output: 6
SysBsqd ([1, 2, 4, 5, 6]) // Output: 3
*/

const SysBsqd = (array) => {
    const n = array.length+1;
    // Al ser numeros consecutivos se puede calcular la suma de todos ello con la siguiente formula
    const sumN = (n*(n+1)/2);

    //calculo la suma de los numeros dados en el array
    let sumArray = 0
    for(let num of array){
        sumArray += num
    }
    
    //al ser solo un numero que falta
    //obtengo dicho numero con la diferencia de las sumas calculadas anteriormente
    missingNumber = sumN - sumArray
    
    return missingNumber;

}

// const array = [60, 32, 24, 92, 23, 14, 5, 37, 94, 90, 76, 53, 71, 95, 4, 20, 48, 30, 7, 26,
//     68, 61, 39, 79, 45, 47, 85, 75, 64, 2, 72, 6, 49, 27, 19, 15, 93, 99, 58, 87, 
//     22, 44, 74, 34, 66, 63, 46, 88, 59, 84, 40, 36, 52, 21, 57, 86, 80, 55, 56, 8,
//     81, 33, 51, 17, 98, 16, 13, 42, 9, 1, 69, 41, 62, 89, 10, 78, 67, 82, 70, 100, 
//     50, 91, 73, 18, 25, 12, 54, 31, 35, 96, 65, 97, 83, 38, 29, 28, 11, 3, 77]
    
const array = [3, 7, 1, 2, 8, 4, 5];

console.time()
console.log(SysBsqd (array));
console.timeEnd()
