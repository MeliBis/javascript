var name= 'Melissa';
var lastname= 'Barrios Lecona';
var userName='string';
var age= 32 //number
var email='string@gmail.com';
var comingAge= true //boolean
var savedMoney=29000;
var debts=25000;
var fullName=name + lastname;
var realMoney= savedMoney - debts;
console.log(fullName);
console.log(realMoney);

////////
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

//////
var tipoDeSuscripcion="ExpertPlus"

if(tipoDeSuscripcion=== 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if("Free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if("Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

var suma= prompt('cuanto es 2+2')
var resultado=4
var alert=