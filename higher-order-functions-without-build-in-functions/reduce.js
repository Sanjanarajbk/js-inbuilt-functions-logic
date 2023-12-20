
const reduceIt = (numbers,callback) =>{
    let accumulator=1;
    for(let i =0 ;i<numbers.length;i++){
       accumulator= callback(numbers[i],accumulator);
    }

 console.log(accumulator);
}

const callback = (element,total) =>{
return total*=element
}

const numbers =[2,3,4]
reduceIt(numbers,callback)