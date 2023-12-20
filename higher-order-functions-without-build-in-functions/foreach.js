const forEachh =(num,callback) =>{
    for(let i =0 ;i<num.length;i++){
        callback(num[i],i,num);//element,index,list
    }
}

const callback = (element) =>{
console.log(element);
}

const num =[1,2,3,4,5];
forEachh(num,callback);



