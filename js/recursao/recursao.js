// function somaNumeros (arr, target) {
//     let primeiroNumero = arr[0];
//     if (arr.length > 0){
//         for (let i = 1; i < arr.length; i++){
//             let soma = primeiroNumero + arr[i];
//             if (soma == target){
//                 return [0, i];
//             }
//         }
//         arr.splice(0,1);
//         somaNumeros(arr, target);
//     } else {
//         return;
//     }
// }

// let arr = [3,2,4];
// let target = 6;

// somaNumeros(arr, target);

function twoSum(arr, target) {
    if (arr.length > 0){
        let y;
        let soma;
        for (let i = 0; i < arr.length; i++){
            y = i++;
            soma = arr[i] + arr[y];
            if (soma == target){
                console.log(i);
                return [i, y];
            }
        }
        arr.splice(0,1);
        twoSum(arr, target);
    } else {
        return;
    }
}

let arr = [3,2,4];
let target = 6;

twoSum(arr, target);