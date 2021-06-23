function doubleValues(arr){
    const newArr = [];
    arr.forEach(val => {
        newArr.push(val * 2);
    });
    return newArr;
}

function onlyEvenValues(arr){
    const newArr = [];
    arr.forEach(val => {
        if (!(val % 2)) newArr.push(val);
    });
    return newArr;
}

function showFirstAndLast(arr){
    const newArr = [];
    arr.forEach(val => {
        let str = val[0];
        str += val[val.length - 1];
        newArr.push(str);
    });
    return newArr;
}

function addKeyAndValue(arr,key,value){
    const newArr = [];
    arr.forEach(val => {
        val[key] = value;
        newArr.push(val);
    });
    return newArr;
}

function vowelCount(str){
   const newObj = {};
   let text = str.toLowerCase();
   const vowels = "aeiou";
   [...text].forEach(char => {
       if (vowels.indexOf(char) !== -1) {
           if (newObj[char]) {
               newObj[char]++;
           } else {
               newObj[char] = 1;
           }
       }
   });
   return newObj;
}

function doubleValuesWithMap(arr) {
    return arr.map(val => val * 2);
}

function valTimesIndex(arr){
    return arr.map((val, i) => val * i);
}

function extractKey(arr, key){
    return arr.map(val => val[key]);
}

function extractFullName(arr){
    return arr.map(val => `${val.first} ${val.last}`);
}

function filterByValue(arr, key) {
    return arr.filter(val => val[key]);
}

function find(arr, searchValue) {
    return arr.filter(val => val === searchValue)[0];
}

function findInObj(arr, key, searchValue) {
    return arr.filter(val => val[key] === searchValue)[0];
}

function removeVowels(str) {
    const vowels = "aeiou";
    let arr = str.toLowerCase().split("");
    return arr.filter(char => {
        return !(vowels.indexOf(char) !== -1);
    }).join("");
}

function doubleOddNumbers(arr) {
    return arr.filter(num => num % 2).map(num => num * 2);
}
