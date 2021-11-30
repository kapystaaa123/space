// do{
//     var b = +prompt('Быстрее введи число')
// }
// for (let i = 0;)


// do {
//     var metro = prompt('Обязательно введи степень')
// }

do{
    var fly = +prompt('Enter a number 💪 (•︡益︠•) 👊')
} while (isNaN(fly) || fly == 0){
   console.log(fly);
}
 
 var life = +prompt('Enter the degree (👍 ͡❛ ͜ʖ͡❛ )👍')
if(isNaN(life) || life == 0){
    console.log(2);
}

// }else(!isNaN())

var space = 1;
for( let i = 0; i < life ; i++){
    space=space*fly
}
console.log(space);


