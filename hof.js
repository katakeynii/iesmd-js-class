// Higher Order Function
// DRY = Do Not Repeat Yourself 


//  PARTIE 1 : Passer en parametre une fonction
// function somme(a, b){
// 	return a + b;
// }
// function multiple(a, b){
// 	return a * b;
// }

// function operer(nb, fn){
// 	for (var i = 0; i < nb; i++) {
// 		result = fn(i, 1000)
// 		console.log(result)
// 	}
// }

// operer(10, somme)
// operer(10, multiple)

// operer(10, function(a, b ){
// 	return a - b 
// })

// function ajout(nb, fn){
// 	// parcourir nb de 1 jusqu'à nb on fait i + 1000
// 	for (var i = 0; i < nb; i++) {
// 		result = i + 1000
// 		console.log(result)
// 	}
// } 

// function multiple(nb, fn){
// 	// parcourir nb de 1 jusqu'à nb on fait i + 1000
// 	for (var i = 0; i < nb; i++) {
// 		result = i * 1000
// 		console.log(result)
// 	}
// } 

// ajout(10, function(){})
// multiple(10, function(){})