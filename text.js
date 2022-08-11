function smallestAndLargestOfAll(n, arr){
    //write code here
    let max=Infinity;
    for(i=0; i<=arr.length-1; i++){
        if(arr[i]<max){
        max=arr[i];
    }
    }
    console.log(max);
    
    let max2=-Infinity;
    for(i=0; i<=arr.length-1; i++){
        if(arr[i]>max2){
        max2=arr[i];
    }
    }
    console.log(max2);
}
