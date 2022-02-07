//Partijen / stellingen
var parties = [
    {
       name: "PVV",
       secular: true,
       size: 20,
       long: "Partij voor de Vrijheid"
     },
     {
       name: "D66",
       secular: true,
       size: 19,
       long: "Democratie 66"
     },
     {
       name: "CU",
       secular: false,
       size: 6,
       long: 'Christen Unie'
     },
     {
       name: "SP",
       secular: true,
       size: 14,
       long: "Socialistische Partij"
     }
   ];
   
   var subjects = [{
       "title": "Bindend referendum",
       "statement": "Er moet een bindend referendum komen, waarmee burgers door het parlement aangenomen wetten kunnen tegenhouden.",
       "parties": [
         {
           "name": "PVV",
           "position": "contra",
           "opinion": "Geen toelichting gegeven"
         },
         {
           "name": "SP",
           "position": "pro",
           "opinion": "Directe inspraak en zeggenschap van mensen maakt onze democratie sterker en de besluiten beter. In plaats van een raadgevend referendum willen we zo snel mogelijk een correctief referendum, zodat de bevolking ook tussen de verkiezingen door de gekozen vertegenwoordigers kan corrigeren, zowel bij lokale, nationale als Europese onderwerpen."
         },
         {
           "name": "D66",
           "position": "pro",
           "opinion": "D66 wil de democratische controle moderniseren. Daarom wil D66 kiezers een noodrem geven met de mogelijkheid om via een correctief bindend referendum wetsvoorstellen tegen te houden, nadat het parlement deze heeft aangenomen. Dit correctief bindend referendum omvat geen internationale verdragen."
         },
         {
           "name": "CU",
           "position": "pro",
           "opinion": "Wij willen experimenteren met nieuwe vormen van directe democratie. Wij werken daarom aan alternatieve modellen om burgers te betrekken en hechten vooral aan het uitwisselen van argumenten en samen zoeken naar oplossingen. Tot dan steunen wij het referendum om burgers meer invloed te geven."
         }
       ]
     },
     {
       "title": "Maatschappelijke dienstplicht",
       "statement": "Er moet een maatschappelijke dienstplicht voor jongeren komen. Zij kunnen dan dienen in het leger, bij de politie of in de zorg.",
       "parties": [
         {
           "name": "PVV",
           "position": "pro",
           "opinion": "Geen toelichting gegeven"
         },
         {
           "name": "SP",
           "position": "contra",
           "opinion": "De SP is voorstander van een maatschappelijke stage voor jongeren binnen het onderwijs om kennis te maken met de maatschappij, bijvoorbeeld in zorg of onderwijs. Een maatschappelijke dienstplicht voor langere tijd buiten het onderwijs gaat echter veel te ver, zal veel kosten en weinig opleveren. Belangrijke maatschappelijke taken moeten worden verricht door mensen die daar gemotiveerd en goed opgeleid voor zijn,"
         },
         {
           "name": "D66",
           "position": "contra",
           "opinion": "Natuurlijk is het mooi als jongeren zich willen inzetten voor de maatschappij, maar dat is het juist als zij er zÃ©lf voor kiezen. Daarom wil D66 dit niet verplicht stellen. Scholen kunnen kiezen voor het aanbieden van een maatschappelijke stage, maar dat moet niet door de overheid worden opgelegd."
         },
         {
           "name": "CU",
           "position": "pro",
           "opinion": "Mensen nemen op allerlei manieren deel aan de samenleving: door te werken, te leren, vrijwilligerswerk te doen, buren of familie te helpen. Een maatschappelijke dienstplicht doet geen recht aan de verschillende manieren waarop mensen participeren en beperkt de individuele vrijheid te veel."
         }
       ]
     },
     {
       "title": "Anoniem solliciteren",
       "statement": "Om discriminatie op basis van de naam te voorkomen, moet anoniem solliciteren bij de overheid en bij openbare instellingen de regel worden.",
       "parties": [
         {
           "name": "D66",
           "position": "pro",
           "opinion": "Nederlanders met een niet-westerse achtergrond zijn drie keer vaker werkloos dan Nederlanders met een westerse achtergrond. D66 wil dit verschil terugdringen. EÃ©n van de maatregelen die D66 wil nemen is het opzetten van experimenten met neutrale sollicitatie- en promotieprocedures."
         },
         {
           "name": "CU",
           "position": "pro",
           "opinion": "Waar het gaat om vacatures van de overheid wordt anoniem solliciteren de norm. GroenLinks wil dat de overheid een goede afspiegeling vormt van de samenleving, zeker bij publieke topfuncties. "
         },
         {
           "name": "PVV",
           "position": "contra",
           "opinion": "Geen toelichting gegeven"
         },
         {
           "name": "SP",
           "position": "contra",
           "opinion": "Discriminatie  moet fel bestreden worden in alle delen van de maatschappij. Experimenten met anoniem solliciteren uitbreiden is daarom een goed idee. Dit algeheel doorvoeren gaat nu echter een stap te ver. Bovendien zit anoniem solliciteren ook een actief diversiteitsbeleid juist in de weg."
         }
       ]
     },
     {
       "title": "Groepsbelediging",
       "statement": "Belediging van groepen op grond van ras, godsdienst of geaardheid moet niet langer strafbaar zijn.",
       "parties": [
         {
           "name": "PVV",
           "position": "pro",
           "opinion": "Geen toelichting gegeven"
         },
         {
           "name": "SP",
           "position": "contra",
           "opinion": "De strafbaarheid op belediging van groepen blijkt in de praktijk een nuttig middel om bijvoorbeeld antisemitisme of religieuze haatoproepen tegen homoseksuelen tegen te gaan."
         },
         {
           "name": "D66",
           "position": "contra",
           "opinion": "D66 is voor vrije meningsuiting maar vindt dat het opzettelijk beledigen, discrimineren en haat zaaien tegen mensen vanwege het behoren tot een bepaalde bevolkingsgroep, niet past in onze samenleving."
         },
         {
           "name": "CU",
           "position": "contra",
           "opinion": "Onze samenleving is de afgelopen vijftien jaar verruwd. Respectloos gedrag lijkt normaal te zijn geworden. GroenLinks stelt een harde grens: we pakken racisme en discriminatie keihard aan, zeker als het gekoppeld wordt aan geweld of het oproepen tot geweld, intimidatie en bedreigingen."
         }
       ]
     }
   ];

//Variabelen
var buttonEens = document.getElementById("btnEens");
var buttonOneens = document.getElementById("btnOneens");
var buttonNone = document.getElementById("btnNone");
var buttonSkip = document.getElementById("btnSkip");

var Count = 0;


console.log("$$$$$$ " + parties[0].name);
console.log("$$$$$$ " + parties[0].long);
console.log("-----------------------------------------");
console.log(Object.values(subjects))

//Onload function
window.onload= AllFunctions();

//All functions
function AllFunctions(){

    //Common settings
    buttonEens.onclick= buttonEensClicked;
    buttonOneens.onclick= buttonOneensClicked;
    buttonNone.onclick = buttonNoneClicked;
    buttonSkip.onclick = buttonSkipClicked;

    //Stelling 1
    function buttonEensClicked(){
      Count++;
      console.log(Count);

      buttonSkip.style.display = "inline";
      if(buttonEensClicked){
        buttonEens.style.backgroundColor = "green";
        buttonOneens.style.backgroundColor = "red";
        buttonNone.style.backgroundColor = "red";
      }
    }

    function buttonOneensClicked(){
      buttonSkip.style.display = "inline";
      if(buttonOneensClicked){
        buttonOneens.style.backgroundColor = "green"
        buttonNone.style.backgroundColor = "red";
        buttonEens.style.backgroundColor = "red"
      }
    }

    function buttonNoneClicked(){
      buttonSkip.style.display = "inline";
      if(buttonNoneClicked){
        buttonNone.style.backgroundColor = "green"
        buttonEens.style.backgroundColor = "red"
        buttonOneens.style.backgroundColor = "red";
      }
    }

    function buttonSkipClicked() {
      
    }


    // //Stelling2
    // function Stelling2(){
    //     stelling.innerHTML = stellingen[1];

    //     buttonVolgende.style.display = "none";
    //     buttonOneens.style.backgroundColor = "white"
    //     buttonEens.style.backgroundColor = "white"

    //     if(buttonEensClicked){
    //         buttonVolgende.onclick= Stelling2Antwoord;

    //         buttonEens.style.backgroundColor = "white";       
    //     }
    //     if(buttonOneensClicked){
    //         buttonVolgende.onclick= Stelling2Antwoord;

    //         buttonOneens.style.backgroundColor = "white";
    //     }
    // }


    // //Stelling2 antwoord
    // function Stelling2Antwoord(){
    //     stelling.innerHTML = stellingen[2];

    //     buttonVolgende.style.display = "none";
    //     buttonOneens.style.backgroundColor = "white"
    //     buttonEens.style.backgroundColor = "white"

    //     if(buttonEensClicked){
    //         buttonVolgende.onclick = Stelling3;

    //         buttonEens.style.backgroundColor = "white";   
    //     }
    //     if(buttonOneensClicked){
    //         buttonVolgende.onclick = Stelling3;
            
    //         buttonOneens.style.backgroundColor = "white";
    //     }
    // }

//     //Voltooid
//     function Voltooien(){
//         if(Count >= 8){
//             stelling.innerHTML=("U heeft " + Count + " keer EENS gestemd. De partij die het best bij uw voorkeur past is D66"); 
//         }
//         else if(Count >= 5){
//         stelling.innerHTML=("U heeft " + Count + " keer EENS gestemd. De partij die het best bij uw voorkeur past is PvdA");
//         }
//         else if(Count >= 2){
//             stelling.innerHTML=("U heeft " + Count + " keer EENS gestemd. De partij die het best bij uw voorkeur past is VVD");
//         }
//         else{
//             stelling.innerHTML=("U heeft " + Count + " keer EENS gestemd. De partij die het best bij uw voorkeur past is CDA");
//         }

//     }
}