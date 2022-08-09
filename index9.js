function divisionTask(N) {
    // Write code here
   
    if(N==0){
        console.log(-1);
        return;
    }
     let x= Math.floor(32/N);
     if(x==0){
     console.log("Too Low");
     }else{
         console.log(x);
     }
}
