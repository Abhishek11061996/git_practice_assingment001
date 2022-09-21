function prime(num){
    for(let i=1;i<=num;i++){
        if(num%1){
            return true
        }
    }
    return false
}
prime(13)