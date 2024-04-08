let arr = 5
let arr1 = 5
console.log(arr + arr1);

let x = (a = '12') => {
    let num = +a
    let type = typeof num
    return num + type
}

console.log(x());

function randomSon() {

    let randomSoni = Math.floor(Math.random() * 101);

    console.log("Random son:", randomSoni);

    if (randomSoni % 2 === 0) {
        console.log("Juft son");
    } else {
        console.log("Toq son");
    }
}
randomSon();

function sozniTekshir() {
    let soz = prompt("soz kiriting:");

    if (soz === "Mars") {
        alert("Mars");
    } else {
        alert("Mars IT school");
    }
}
sozniTekshir();



let arr11 = ["Nurik", "Odi", "bugun", "Behruz", "krasavchik"];

let uzunSoz = [];

for (let i = 0; i < arr11.length; i++) {
    if (arr11[i].length > 5) {
        uzunSoz.push(arr11[i]);
    }
    if (arr11[i].length === 5) {
        uzunSoz.push(arr11[i]);
    }
}

console.log("5 dan kattalari:", uzunSoz);


let juftSonlar = [];
let toqSonlar = [];

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        juftSonlar.push(i);
    } else {
        toqSonlar.push(i);
    }
}

console.log("Juft sonlar:", juftSonlar);
console.log("Toq sonlar:", toqSonlar);

