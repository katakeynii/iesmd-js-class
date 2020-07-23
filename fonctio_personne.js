function Personne(prenom, nom, age, sexe){
   this.prenom = prenom;
   this.nom = nom ;
   this.age = age;
   this.genre = sexe;

   this.parler = function(){
    console.log("Hello ! ")
   }

   this.majeur = function (){
     return this.age > 18
   }
   this.tester = function(){
     if(genre == "M"){
         console.log("Je regarde mon match")
     }else{
        console.log("Je me maquille !!! ")
     }
   }
   this.marcher = function(){
        if(this.genre == "M"){
            console.log("Je marche tout le temps ")
        }else{
            console.log("Je marche seuleemnt si c'est la seule solution")
        }
   } 
   
  this.manger = function (){
       if(sexe == "M"){
         console.log("Bah ! je laisse rien passer ")
       }else{
            console.log("Je garde la ligne ")
       }
  }
 
}