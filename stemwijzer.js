//Variables buttons
var buttonEens = document.getElementById("btnEens");
var buttonOneens = document.getElementById("btnOneens");
var buttonNone = document.getElementById("btnNone");
var buttonSkip = document.getElementById("btnSkip");
var buttonBack = document.getElementById("btnBack");

var countStatement = 0;
var answers = [];

function start(){
  document.getElementById("start").style.display = "none";
  document.getElementById("questions").style.display = "block";
  document.getElementById("group2").style.display = "none";

  title.innerHTML = subjects[countStatement].title;
  statement.innerHTML = subjects[countStatement].statement;

  for (let i = 0; i < subjects.length; i++) {
    answers[i]= new antwoord(null, 1);
  }

  //Buttons
  buttonEens.onclick = buttonEensClicked;
  buttonOneens.onclick = buttonOneensClicked;
  buttonNone.onclick = buttonNoneClicked;
  buttonSkip.onclick = buttonSkipClicked;
  buttonBack.onclick = buttonBackClicked;

  document.getElementById("partijen").onchange = function() {countResult();};
}
//Function agree button
function buttonEensClicked(){  
  buttonEens.style.backgroundColor = "rgb(0, 174, 255)";

  answers[countStatement].answer = "pro";
  countStatement++;

  countResult();
  title.innerHTML = subjects[countStatement].title;
  statement.innerHTML = subjects[countStatement].statement;
}

//Function disagree button
function buttonOneensClicked(){
  buttonOneens.style.backgroundColor = "rgb(0, 174, 255)";

  answers[countStatement].answer = "contra";
  countStatement++;

  countResult();
  title.innerHTML = subjects[countStatement].title;
  statement.innerHTML = subjects[countStatement].statement;
}

//Function none button
function buttonNoneClicked(){
  buttonNone.style.backgroundColor = "rgb(0, 174, 255)";

  answers[countStatement].answer = "none";

  countStatement++;
  countResult();
  title.innerHTML = subjects[countStatement].title;
  statement.innerHTML = subjects[countStatement].statement;
}

//Function skip button
function buttonSkipClicked(){
  countStatement++;
  title.innerHTML = subjects[countStatement].title;
  statement.innerHTML = subjects[countStatement].statement;
}

//Function back button
function buttonBackClicked(){
  countStatement--;
  title.innerHTML = subjects[countStatement].title;
  statement.innerHTML = subjects[countStatement].statement;
}

//Function result
function countResult(){
  if(countStatement >= subjects.length){

    var sameparties = [];

    for(let i = 0; i < subjects.length; i++){
      for(let j = 0; j < subjects[i].parties.length; j++){
        console.log(subjects[i].parties[j].position);
        if(subjects[i].parties[j].position == answers[i].answer){
          sameparties.push(subjects[i].parties[j]);
        }
      }
    }

    var result = findOcc(sameparties, 'name');
    const size = 5; 
    var selectedOption = document.getElementById("partijen").options[document.getElementById("partijen").selectedIndex].value;
    
    console.log(result);
    console.log(selectedOption);
    if(selectedOption == "Grote"){
      result = Object.values(result).filter(currentParty => {
        console.log(currentParty);
        var partyInfo = parties.find(party => party.name == currentParty);
        return partyInfo.size >= size;
      });

      var result2 = Object.values(result).filter(party => {
        console.log(currentParty);
        var partyInfo = parties.find(party => party.name == currentParty);
        return partyInfo.size >= size;
      });
      Voltooien(result, result2);
    }
    // else if(selectedOption == "Kleine"){
    //   const result = Object.values(result).filter(party => party.size < size);
    //   const result2 = Object.values(result).filter(party => party.size < size);
    //     Voltooien(result, result2);
    // }else if(selectedOption == "Seculieren"){
    //   const result = Object.values(result).filter(party => party.secular == true);
    //   const result2 = Object.values(result).filter(party => party.secular == true);
    //     Voltooien(result, result2);
    // }else if(selectedOption == "Alle"){
    //   Voltooien(result, result2);
    // }

    const sortable = Object.fromEntries(
      Object.entries(result).sort(([,a],[,b]) => b-a)
    );

    const keys = Object.keys(sortable).splice(1, Object.keys(sortable).length);

    const endAnswer =  getKeyByValue(sortable, sortable[Object.keys(sortable)[0]]);
    const endAnswer2 = keys;

    Voltooien(endAnswer, endAnswer2);
  }
}

//Function to get the end name
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

//Function finished
function Voltooien(endAnswer, endAnswer2){
  document.getElementById("group2").style.display = "inline";
  document.getElementById("btnEens").style.display = "none";
  document.getElementById("btnOneens").style.display = "none";
  document.getElementById("btnNone").style.display = "none";
  document.getElementById("btnSkip").style.display = "none";
  document.getElementById("btnBack").style.display = "none";

  title.innerHTML = ("Resultaat"); 
  statement.innerHTML = ("De partij die het best bij uw voorkeur past is: " + endAnswer); 

  for(let i = 0; i < endAnswer2.length; i++){
    const html = document.createElement("li");
    console.log(endAnswer2[i]);
    html.innerText = endAnswer2[i].name;
    document.getElementById("result").appendChild(html);
  }
}

function findOcc(arr, key){
  let arr2 = [];

  arr.forEach((x)=>{
    // check of er een object in de array zit met dezelfde key value
     if(arr2.some((val)=>{ return val[key] == x[key] })){
       arr2.forEach((k)=>{
         if(k[key] === x[key]){
          k["occurrence"]++
         }
      })

     }else{
      //create object with key and occurrence = 1
      let a = {}
      a[key] = x[key]
      a["occurrence"] = 1
      arr2.push(a);
     }
  })
  return arr2
}

class antwoord {
  answer = null; 
  weight = 1;

  constructor(answer, weight){
    this.answer = answer;
    this.weight = weight;
  }
}

// 1. instellen welke partijen getoond worden
// 2. extra gewicht geven aan gekozen categorie + dynamisch aanmaken
