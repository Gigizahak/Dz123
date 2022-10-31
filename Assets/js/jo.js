
// for (let number = 0; number < 101; number++) {
//     console.log(number)
// }
// 
    // for (let number = 11; number < 34; number++) {
    //     console.log(number)
    // }
        // for (let number = 0; number < 101; number+=2) {
        //     console.log(number)
        // }
// let sum = 0
// for (let number = 0; number < 101; number++) {
//     sum +=number
// } 
// console.log(sum)
    // let alley =  [1, 2, 3, 4, 5];
    // for (let length = 0; length< alley.length; length++) {
    //     console.log(alley[length])
    // }
// let result = 0
// let alley = [1, 2, 3, 4, 5];
// for (let length = 0; length< alley.length; length++) {
//     result += alley[length]
// }
// console.log(result)
    // var object = {green : 'Зелёный', reg : 'красный', blue: 'голубой'}
    text = ''
    // for (let i in object) {
        text += object[i]
    //     console.log(`${i} :${object[i]}`)
    // }
        // var object = {'Коля' : 100 , 'Вася' : 200, 'Петя' : 300}
        text = ''
        // for (let i in object) {
            text += object[i]
        //     console.log(`${i} - зарплата ${object[i]} долларов`)
        // }
var allay = [2, 5, 9, 15, 0, 4]
for (let x of allay) {
    if (x > 3 && x < 10) {
        console.log(x)
    }
}
    var allay = [1, 2, 5, 9, 4, 13, 4, 10] ;
    for (let x of allay) {
        if (x==4) {
            console.log('Есть')
            break
        }
    }
// var allay = [10, 20, 30, 50, 235, 3000];
// for (let x of allay) {
//     y = String(x);
//     if (y[0]==1 || y[0]==2 || y[0]==5) {
//         console.log(x)
//     }
// }
    // var allay = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // let str = '-';
    //  for (var i = 0; i < allay.length; i++){
    //     str += allay[i]+'-' ;
    //  }
    // console.log(str);
// let list = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
// for (var x of list) {
//     if (x == 'суббота'|| x == 'воскресенье') {
//         var result = x.toUpperCase()
//         console.log(result)
//     } else {
//         console.log(x)
//     }
// }

    // let list = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
    // let date = new Date
    // for (var x of list) {
    //     if (x == list[date.getDay()]) {
    //         console.log(x.italics())
    //     } else {
    //         console.log(x) 
    //     }
    // } 
let result = 0;
let num =0
for (let n=1000; n > 30; n/=2) {
    num++;
    result= n
}
console.log(result);
console.log(num);
