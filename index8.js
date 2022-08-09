function vowelAndConsonantCount(N, str) {
    //write code here
    let vowel= "aeiou";
  
    let count=0;
    for(i=0; i<=vowel.length-1; i++){
        for(j=0; j<=str.length-1; j++){
            if(vowel[i]==str[j]){
                  count++;
            }
          
        }
    }
    console.log(count+" "+(str.length-count));
    
    
    
  }
  