function modifyArray(nums) {
    let arr1 =  [];
    for(let i=0;i<nums.length;i++) {
        if(nums[i]%2==0){
            nums[i] = nums[i] * 2;
            arr1.push(nums[i])
        }else{
            nums[i] = nums[i] * 3;
            arr1.push(nums[i]);
        }
    }
    return arr1
}
answer = modifyArray([1,2,3,4,5]);
console.log(answer)