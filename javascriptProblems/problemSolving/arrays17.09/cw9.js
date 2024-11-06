numbers=[1,2,3,4,5,6,7,8]
let result=" ";
for(i=0;i<numbers.length;i++){
    if(numbers[i]%2==1){
        result= result + numbers[i]+" ";
        
    }
}
console.log(result)



// nums=[10,11,12,13,14,15,16,17,18]
// let oddnums=nums.filter(
//     function(odd){
//         return odd%2==1;
//     }
// )
// console.log(oddnums)