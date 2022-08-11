function averageOfAll(n, arr){
    //write code here
    let count=0;
    let sum=0;
    for(let i=0; i<=arr.length-1; i++){
        sum=sum+arr[i];
        count++;
    }
    console.log(sum/count);
}
