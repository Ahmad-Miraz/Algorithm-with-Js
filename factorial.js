function factorialOf(n){
  let fact=1;
  for(let i=n; i>0;i--){
    fact=fact*i; 
  }
  return fact;
}

console.log(factorialOf(4));

//big O(n)