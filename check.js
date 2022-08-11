 let must=["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
 let age=[32, 30, 26, 28, 44];

 let arr=[];
for(i=0; i<=must.length-1; i++){
  let obj={};
 obj["name"]=must[i];
  obj["age"]=age[i];
  arr.push(obj);
}
 console.log(arr);

 
for(i=0; i<=arr.length-1; i++){
  if(arr[i]["age"]>30){
  console.log(arr[i]["name"]);
  }
}