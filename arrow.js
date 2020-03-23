// function doubleIt(num){
//     return num*2;
// }
/** 
const doubleIt = function myfun(num){
    return num*2;
}
*/
const doubleIt = num => num*2;
const add=(x,y)=> x+y;

const result = add(50,70);

const give5=()=>5;
const result2 = give5();

const doMatch=(x,y)=>{
    const sum = x+y;
    const diff = x-y;
    const result3=sum*diff;
    return result3;
}
const result3=doMatch(7,5);

//const result = doubleIt(5);
console.log(result);
console.log(result2);
console.log(result3);