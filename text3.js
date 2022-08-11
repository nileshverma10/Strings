function battleOfOddAndEven(n, arr){
    //write code here
   let sum1=0;
   let sum2=0;
   for(i=0; i<=arr.length-1; i++){
       if(arr[i]%2==0){
           sum1=sum1+arr[i];
           
       }else if(arr[i]%2!=0){
           sum2=sum2+arr[i];
       }
   }
   if(sum2>sum1){
       console.log("Odd");
   }else{
       console.log("Even");
   }
   
}
