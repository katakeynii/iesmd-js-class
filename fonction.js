function sommer(nb){
	// Créer la variable somme et l'initilise à zero
  var somme = 0;

  for(var i = 1 ; i <= nb ; i++){
    somme += i
  }
  console.log("La valeur de la somme des nombres de 1 à " + nb + " est egal à : " )
  console.log(somme)
}

sommer(5)
sommer(10)
sommer(15)
sommer(100)
// 1 + 2 + 3 +  4  + 5  + 6  + 7  + 8  + 9 +  10 

function recursive_somme(nb){
	if(nb == 1){
		return 1
	}else{
		return nb + recursive_somme(nb - 1)
	}
}

var total = recursive_somme(100);
console.log("La somme avec la récursivité est : ", total)