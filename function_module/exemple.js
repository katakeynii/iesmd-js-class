(function salut(){
  console.log("Salut !!!! ")
})()

function sommer(nb){
  var somme = 0;
  for(var i = 1 ; i <= nb ; i++){
    somme += i
  }
  console.log(somme)
}

sommer(10)
// 10
// 10 + rs(9)
// 10 + 9 + rs(8)
// 10 + 9 + 8 + rs(7)
// ...
// 10 + 9 + 8 + 7 + 6 + 5 + 4 + rs(3)
// 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + rs(2)
// 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + rs(1)
// 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1
function recursiv_somme(nb){
  if(nb == 1){
    return 1;
  }else{
    return nb + recursiv_somme(nb - 1)
  }
}
var result = recursiv_somme(10);
console.log("Recursive SOMME ",result)


// factt 4 = 4 * 3 * 2 * 1
// = 4 * fac(3)
// = 4 * 3 * fac(2)
function fac(nb){
  if(nb == 1){
   return 1;
  }
  return nb * fac(nb - 1)
}
console.log("--".repeat(30))
console.log("Calcul de factoriel")
console.log(fac(4))
