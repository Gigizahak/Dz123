// a=10
// if (a==10){
//     alert(true)
// }else {
//     alert(false)
// }
//     min= Math.floor(Math.random() *60)
//     let message = (min<15) ? '1':
//         (min <30) ? '2':
//         (min<45) ? '3':
//         (min<59) ? '4':
//         'неверно';
//     alert(message)
// let lang=prompt("lang", "");
// let message= (lang=='ru') ? 'Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье.':
//     (lang=='en') ? 'Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday.':
//     'Неверно'
// alert(message)
//     switch(lang) {
//         case 'ru':
//             alert('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье.')
//             break
    
//         case 'en': 
//             alert('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday.') 
//             break
    
//         default:
//             alert('Неверно')
//             break
//       }
// var array={'ru':['Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье.'],
// 'eu':['Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday.']}
// alert(array[lang])
//  let a=1
//  let b=2
// let message = (a==0) ? 'Верно':
//     'Неверно'
// let message = (a>0) ? 'Верно':
//     'Неверно'
// let message = (a<0) ? 'Верно':
//     'Неверно'
// let message = (a==0) ? 'Верно':
//     'Неверно'
// let message = (a>=0) ? 'Верно':
//     'Неверно'
//  let message = (a<=0) ? 'Верно':
//      'Неверно'
// let message = (a!=0) ? 'Верно':
//     'Неверно'
//  let message = (a=='test') ? 'Верно':
//      'Неверно'
//   let message = (a===String(1)) ? 'Верно':
//       'Неверно'
// let message = (a>0 && a<5) ? 'Верно':
//     'Неверно';
// let message = (a==1 || a==0) ? a+=7:
//      a/=10;
//  let message = (a<=1 || b>=3) ? a+=b:
//        a-=b;
//     let message = (2<a<11) ? 'Верно':
//         (6<=b<14) ? "Верно":
//         'Неверно'
//     alert(message)
// let number=prompt("number", "1");
// switch(number){
//         case '1':
//             alert('Зима')
//             break;
    
//         case '2': 
//             alert('Весна') 
//             break;
//         case '3':
//             alert('Лето')
//             break;
    
//         case '4': 
//             alert('Осень') 
//             break;
//         default:
//             alert('Неверно')
//             break;
// }
// let a = Math.floor(Math.random() *32)
// if (a<10){
//     alert('1')
// }else if (a>10 && a<20) {
//     alert('2')
// }else {
//     alert('3')
// }
//     let mount = prompt("mount", "");
//     if (mount<4){
//         alert('Зима')
//     }else if (mount < 7) {
//         alert('Весна')
//     }else if (mount < 10){
//         alert('Лето')
//     }else{
//         alert('Осень')
//     }
    // let a = prompt("word", "")
    // if (a[0]=='a'){
    //     alert('да')
    // }else {
    //     alert('нет')
    // }
// let number = prompt('number', '')
// if (number[0] == 1 ||number[0] == 2||number[0] == 3) {
//     alert('да')
// }else {
//     alert('нет')
// }
    // let str = prompt('number', '');
    // let sum = 0;
    // for (let char of str) {
    //     sum+=Number(char); 
    // }
    // alert(sum)
let str = '321123';
sum_str1 = 0
sum_str2 = 0
for (let char of str) {
    sum_str1+=Number(char)
}
let a = 0
for (let char of str) {
    a++;
    if (a>(str.length/2)) { 
        break;
    }
    sum_str2+=Number(char)
}
if (sum_str1-(sum_str2*2)==0) {
    alert('Yes')
}else {
    alert('No')
}
for(let i; i < 10; i++){

}