function prime(num){

  let factor=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            factor++;
        }
    }
  if(factor==2){
    return true;
  }
    return false;
}
let ans=prime(13);
if(ans==true){
  console.log("Prime Number");
}else{
  console.log("Not Prime");
}