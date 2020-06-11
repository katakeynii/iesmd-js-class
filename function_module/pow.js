function test(){
  var nom = "GUEYE"
  var prenom = "Mohamed Camara"

  let age = 32

  function hello(){
    console.log(prenom + " a  "+ age + " ans ")
  }

  return {
    hello: hello
  }
}
test().hello()
