"use strict";

// 1. ստեղծել սեփական forEach ֆեւնկցիա, որը լրիվ նույն կերպ կաշխատի ինչպես forEach-ը
function foreach(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(`In index ${i} is item ${arr[i]}`);
    }
}

const array = [11, 77, 88, 99, 56, 3, 45];
//foreach(array);



// 2. ստեղծել օբջեքթ ու քոփի անել մեր անցած մեթոդներով
const person = {
    name: "Artur",
    lastName: "Sahakyan",
    age: 28,
    natioanality: "Armenian",
    address: {
        country: "Armenia",
        city: "Yerevan",
        postIndex: 1115,
        street: "Mashtots",
        building: 25,
        appartment: 10
    },
    phone: "+374 77 55 11 22"
};


    //copy 1
const copy1 = Object.assign({}, person);
//console.log(copy1);


    //copy 2
const copy2 = copyObject(person);
function copyObject(personObj) {
    let personObjCopy = {};
    for(let key in personObj) {
        personObjCopy[key] = personObj[key];
    }
    return personObjCopy;
}
// person.name = "James";
// console.log(person);
// console.log(copy2);


    //copy 3
const copy3 = {...person};
// person.name = "Joe";
// console.log(person);
// console.log(copy3);



// 3. ստեղծել զանգված ու քոփի անել մեր անցած մեթոդներով
    //copy 1
const mainArray = [11, 22, 33, 44, 55];
const copyArray1 = [...mainArray];
// mainArray[0] = 123;
// console.log(mainArray);
// console.log(copyArray1);


    //copy 2
 const copyArray2 = mainArray.slice();
//  mainArray[0] = 456;
//  console.log(mainArray);
//  console.log(copyArray2);


    //copy 3
const copyArray3 = copyArr(mainArray);
function copyArr(oldArr) {
    let copyNewArr = [];
    for(let i = 0; i < oldArr.length; i++) {
        copyNewArr[i] = oldArr[i];
    }
    return copyNewArr;
}

//  mainArray[0] = 789;
//  console.log(mainArray);
//  console.log(copyArray3);



// 4. ստեղծել ֆունկցիա, որը կաշխատի split-ի նման (տողը կվերցնի, կկտրի կդարձնի զանգված)

let str = "ստեղծել ֆունկցիա որը կաշխատի split-ի նման տողը կվերցնի կկտրի կդարձնի զանգված";
function likeSplit(str) {
    const arrFromStr = [];
    let a = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== " ") {
            a += str[i];
        } else {
            arrFromStr.push(a);
            a = "";
        }
    }
    if(a !== "") {
        arrFromStr.push(a);
    }
    
    return arrFromStr;
}
//console.log(likeSplit(str));



// 🔥 Ոչ պարտադիր / Բարդ
// 5. ստեղծել ֆունկցիա SORT անունով, որը կաշխատի այնպես ինչպես SORT ալգորիմթը

function sort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let k = 0; k < arr.length - 1; k++) {
            if(arr[k] > arr[k + 1]) {
            //if(arr[k] - arr[k + 1] > 0) {
                let temp = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = temp;
            }
        }        
    }
    return arr;
}

const unsortedArr = [11, 77, 88, 99, 56, 3, 45, 15, 1];
const s = ["abs", "abc", "bac", "dfg", "dac", "klr"];
console.log(sort(s));
console.log(sort(unsortedArr));


