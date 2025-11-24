const array1 = [1, 2, 3]; //database
const array2 = [4, 2, 3, 1, 5, 6, 7, 8, 9]; //form
let x = [];

if (array2.length > array1.length) {
    array2.sort(function (a, b) { return a - b });
    array1.sort(function (a, b) { return a - b });

    // for (let i = 0; i < array2.length; i++) {
    //     console.log(array2.find(() => {
    //         if (!array1.includes(array2[i])) {
    //             console.log("not included: " + array2[i])
    //             return array2[i];
    //         }
    //         console.log("included");
    //     }));
    // }

    // array2.forEach((num) => {
    //     array2.find(() => {
    //         if (!array1.includes(num)) {
    //             console.log("not included: " + num);
    //             return num;
    //         }
    //         console.log("included" + num);
    //     });
    // });

    array2.find((num) => {
        if (!array1.includes(num)) {
            console.log("not included: " + num);
            x.push(num);
        } else { console.log("included " + num); }
        
    });

    console.log(x);
}

// const array1 = [1, 2, 3]; //database
// const array2 = [4, 2, 3, 1, 5]; //form
// let x = [];

// if (array2.length > array1.length) {
//     array2.sort(function (a, b) { return a - b });
//     array1.sort(function (a, b) { return a - b });

//     for (let i = 0; i < array2.length; i++) {
//         console.log(array2.find(() => {
//             if (!array2.includes(array1[i])) {
//                 console.log(false)
//                 //return array1[i];
//             }
//         }));
//     }
// }