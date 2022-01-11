// Use the forEach method to solve these problems! If the function returns an array, it should return a NEW array, without mutating the old array.



// For this first set of functions, assume the input array looks like this:

// const petsArray = [
//     { name: 'spot', type: 'dog' },
//     { name: 'rover', type: 'dog' },
//     { name: 'jumpy', type: 'frog' },
//     { name: 'einstein', type: 'cat' },
// ];

// findByName('jumpy', petsArray)

// OUTPUT: 
// { name: 'jumpy', type: 'frog' }


export function findByName(name, arr) {
    const newArr = arr.find((arrayItem) => {
        if(arrayItem.name === name) return arrayItem ;
    });
    return newArr;
}


/*
OUTPUT: 
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },

]*/

export function getDogs(arr) {
    const newArr = arr.filter((arrayItem) => {
        if(arrayItem.type === 'dog') return arrayItem;
    });
    return newArr;
}

/*
OUTPUT: 
['spot', 'rover']
*/

export function getNamesOfDogs(arr) {
    const newArr = arr.filter((arrayItem) => {
        if(arrayItem.type === 'dog') return arrayItem;
    }).map((arrayItem) => {
        return arrayItem.name;
    });
    return newArr;
}


/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const newArray = arr.map((arrayItem) => {
        return arrayItem.name;
    });
    return newArray;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const revArr = arr.map((arrayItem) => {
        return arrayItem.type;
    });
    return revArr.reverse();
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const newArray = arr.map((arrayItem) => {
        return { nombre: arrayItem.name, tipo: arrayItem.type };
    });
    return newArray;
}

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

// export function makeArrayOfNamesWithMap(arr) {
//     const newArray = arr.map((arrayItem) => {
//         arrayItem.isHungry = true;
//         return arrayItem;
//     });
//     return newArray;
// }

/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

export function makeArrayWithIsHungry(arr) {
    const newArray = arr.map((arrayItem) => {
        const copy = { ...arrayItem };
        copy.isHungry = true;
        return copy;
    });
    return newArray;
}

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    const myNewArray = arr.map((arrayItem) => {
        const copy = { ... arrayItem };
        copy.name = arrayItem.name.toUpperCase();
        return copy;
    });
    return myNewArray;
}


/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    const newArr = arr.map((arrayItem) => {
        return arrayItem.name + arrayItem.type;
    });
    return newArr;
}

/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    const newArr = arr.map((arrayItem) => {
        return [['name', arrayItem.name], ['type', arrayItem.type]];
    });
    return newArr;
}

////////////////////////////////////////////////////////


// For the next set of functions, assume the following input:

const cars = [
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'truck', make: 'ford', model: 'bronco', age: 5 },
    { type: 'truck', make: 'chevy', model: 'silverado', age: 2 },
    { type: 'van', make: 'chevy', model: 'express', age: 1 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },
];


/*

Output: 
[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },    
];
*/

export function getCars(arr) {
    const newArr = arr.filter((arrayItem)=> {
        if(arrayItem.type === 'car') return arrayItem;
    });
    return newArr;
}

/*
Output:
 [
        { type: 'car', make: 'chevy', model: 'malibu' },
        { type: 'car', make: 'chevy', model: 'camero' },
  ] ;

*/

export function getChevyCars(arr) {
    // const newArr = arr.filter((arrayItem)=> {
    //     if(arrayItem.make === 'chevy' && arrayItem.type === 'car') return arrayItem;
    // });
    const newArr = getCars(cars);
    const newerArr = newArr.filter((arrayItem) => {
        console.log(arrayItem.make);
        if(arrayItem.make === 'chevy') return arrayItem;
    });
    return newerArr;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Stretch Goals!

/*
Output:
'taurusmalibubroncosilveradoexpresscamero'
 */

export function makeModelsStringWithReduce(arr) {
    const newString = arr.reduce((acc, arrayItem) => {
        acc += arrayItem.model;
        return acc;
    }, '');
    return newString;
}

/*
(add all ages)

Output: 14 
 */

export function getSumOfAges(arr) {
    const sumOfAges = arr.reduce((acc, arrayItem) => {
        acc += arrayItem.age;
        return acc;
    }, 0);
    return sumOfAges;
}

/*

Output: 
{
    car: 3,
    truck: 2,
    van: 1
}
 */

export function makeCountObject(arr) {
    const newObj = arr.reduce((acc, arrayItem) => {
        if(!acc[arrayItem.type]){
            acc[arrayItem.type] = 1;
        } else {acc[arrayItem.type]++;}
        return acc;
    }, {});
    return newObj;
}


/*

Output: 
(order doesn't matter--but the string must include all keys for the first object in the array)
'typemakemodelage'
 */


export function makeKeysString(arr) {
    const newArr = arr.map((arrayItem) => {
        return Object.keys(arrayItem).join('');
    }).reduce((acc, arrayItem) => {
        console.log(acc);
        return acc += arrayItem;
    }, '');
    return newArr;
}
