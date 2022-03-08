
let readlineSync = require("readline-sync");

let començament = "Es una aventura per trobar el meu amic que s'ha amagat";
let pista = "Vam trobar la empremta a la porta, i quan miras desde la porta del amari es veu unes pijades de fang que van cap la cuina";
let pista1 = "Vam trobar un cabell del meu amic,pero despres vam anar al meu cuarto";
let pista2 = "Vam olora la seva colonia";
let pista3 = "Hem trobat el meu amic";

const historia = [{
    "text" :"Es una aventura per trobar el meu amic que s'ha amagat",
    "si" : 1,
    "no" : 2,
},{
    "text" : 'Vam trobar la empremta a la porta, i quan miras desde la porta del amari es veu unes pijades de fang que van cap la cuina',
    "si" : 2,
    "no" : 3,
},{
    "text" : 'Vam trobar un cabell del meu amic,pero despres vam anar al meu cuarto',
    "si" : 3,
    "no" : 4,
},{
    "text" : "Vam olora la seva colonia",
    "si" : 4,
    "no" : 5,
},{
    "text" : "Hem trobat el meu amic",
    "si" : 5,
    "no" : 6,
}];

let numerodePagina = 0;
let indexdePagina=0;
while (numerodePagina >=0){
    let pagina = historia[indexdePagina];
    console.log(pagina.text);
    amicperdut();
    si : pagina = pagina.si;
}
 



cometdius();
amicperdut();



function amicperdut(){
    let perdut = false;
    let res = readlineSync.question("Vols buscar el meu amic 'S/N' ?");
if (res === "S") {
  console.log(començament);
  while (!perdut) {
    let res1 = readlineSync.question("Trobem algu en el armari?");
    if (res1 === "S") {
      console.log(pista);
        perdut = true;
    let res2 = readlineSync.question("Trobem algu a la cuina?");
     if(res2 ==='S'){
        console.log(pista1);
        perdut=true;
        let res3 = readlineSync.question("Trobem algu a la meva Habitacio?");
        if(res3==='S'){
            console.log(pista2);
            perdut=true;
            let res4 = readlineSync.question("Trobarem alu a baix del meu llit?");
            if(res4==='S'){
                console.log(pista3);
                perdut=true;
                console.log("Moltes gracies")
               
            }else{
                console.log("T'has equivocat")
                perdut=false;
            }
        }else{
            console.log("T'has equivocat")
            perdut=false;
        }
    }else{
        console.log("T'has equivocat")
        perdut=false;
    }
    } else {
      console.log("Casi");
      perdut = false;
    
    }
  }
} else {
  console.log("Moltes gracies per res");
}

}
function cometdius(){
    let nom = readlineSync.question("Com et dius? ");

    console.log("Hola " + nom);
    
}