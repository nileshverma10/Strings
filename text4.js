function equalTo42(size,arr) {
    //write code here
    let isavv=false;
    for(i=0; i<=arr.length-1; i++){
        if(arr[i]==42){
        isavv=true
        }
    }
    if(isavv){
        console.log("Yes");
    }else{
        console.log("No");
    }
}
