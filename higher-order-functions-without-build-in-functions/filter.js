
const filterIt = (nums,callback) =>{
    const res =[];
    for(let i=0;i<nums.length;i++){
            if(callback(nums[i])){
                res.push(nums[i]);
            }
    }
return res;
}

const callback = (element) =>{
    
    return element%2==0
}



const nums = [1,2,3,4,5]
const result = filterIt(nums,callback)
console.log(result);
