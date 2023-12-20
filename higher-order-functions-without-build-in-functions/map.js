
const mapNow = (numbers,callback) =>{
    const res=[]
    for(let i=0;i<numbers.length;i++){
       res.push(callback(numbers[i]));
    }
    console.log(res);
}

const callback = (element) =>{
  return element+2;
}




const numbers = [1,2,3,4,5]
mapNow(numbers,callback);