//Problem 2 : Given a string in lower case convert it to upper case

let str="hawkeye";
let bag="";
let lower= "abcdefghijklmnopqrstuvwxyz";
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(i=0; i<=str.length-1; i++){
for(j=0; j<=lower.length-1; j++){
  if(str[i]==lower[j]){
    bag=bag+upper[j];
  }
}
}
console.log(bag);