// Evolucio 1

let readlineSync = require("readline-sync");

let nom = readlineSync.question("Com et dius Aventure? ");

console.log("Hola " + nom + ", te explicare una Historia");

conte();

let opcio = readlineSync.question("Vols continua la historia? 'S/N' ");

if(opcio==='s'){
 diusi();
}else{
console.log("Adeu")
}


function diusi(opcio){
    console.log("Gegant: -a veure qui guanya!- El Gegant a la Castanya!.I cauen una, dues, tres, quatre i cinc castanyes.");
    console.log("El gegant sacseja un altre castanyer.Gegant: -a veure qui guanya!- El Gegant a la Castanya!.I tornen a caure una, dues, tres, quatre i cinc castanyes.");
    console.log("I així un darrere l’altre va anar sacsejant tots els castanyers. Gegant: -a veure qui guanya!- El Gegant a la Castanya!I cauen les últimes una, dues, tres, quatre i cinc castanyes.");
    console.log("Ara la castanyera ja pot omplir el cistell de castanyes i marxa contenta cap a la plaça de la ciutat on hi té la seva paradeta. I torra les castanyes amb el gat marrameu que li fa companyia i crida: -Castanyes torrades calentes i fumades! Qui en vol?- ");
    console.log("I fan tanta bona olor que la gent que passeja no se’n pot estar de comprar-les i s’acaben totes, totes. I si te n’ha fet venir ganes de menjar, hauràs de fer com la Castanyera i anar-ne a buscar, perquè aquest conte que tenia un gat, ja s’ha acabat!");
}
function conte(){

console.log("Ja ha arribat la tardor! Les fulles cauen dels arbres, surten els bolets i les castanyes.");
console.log("Com cada any la Castanyera es desperta de bon matí per anar a la muntanya a collir castanyes.");
console.log("Primer es posa la camisa que li va petita,després la faldilla que li fa campana, finalment les sabates que fan cloc-cloc i surt de casa contenta.");
console.log("Quan arriba el bosc veu els arbres carregats de castanyes, però a terra no n’hi ha ni una. Intenta sacsejar els arbres perquè caiguin,");
console.log("però no ho aconsegueix. Després crida el seu amic, el Gegant del Castanyer, que és molt alt i forçut.");
}