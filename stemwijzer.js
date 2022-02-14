//Variables
var buttonEens = document.getElementById("btnEens");
var buttonOneens = document.getElementById("btnOneens");
var buttonNone = document.getElementById("btnNone");
var buttonSkip = document.getElementById("btnSkip");
var buttonBack = document.getElementById("btnBack");

var countStatement = 0;
var answers = [];

//Onload function
start();

function start(){
  title.innerHTML = subjects[countStatement].title;
  statement.innerHTML = subjects[countStatement].statement;

  //Buttons
  buttonEens.onclick = buttonEensClicked;
  buttonOneens.onclick = buttonOneensClicked;
  buttonNone.onclick = buttonNoneClicked;
  buttonSkip.onclick = buttonSkipClicked;
  buttonBack.onclick = buttonBackClicked;
}

//Function agree button
function buttonEensClicked(){  
  buttonEens.style.backgroundColor = "rgb(0, 174, 255)";

  for(let i = 0; i <= subjects[countStatement].parties.length-1; i++){
    if(subjects[countStatement].parties[i].position == "pro"){
      var eens = subjects[countStatement].parties[i].name;
      answers.push(eens);
    }
  }

  countStatement++;

  countResult(countStatement);
  title.innerHTML = subjects[countStatement].title;
  statement.innerHTML = subjects[countStatement].statement;
}

//Function disagree button
function buttonOneensClicked(){
  buttonOneens.style.backgroundColor = "rgb(0, 174, 255)"

  for(let i = 0; i <= subjects[countStatement].parties.length-1; i++){
    if(subjects[countStatement].parties[i].position == "contra"){
      var oneens = subjects[countStatement].parties[i].name;
      answers.push(oneens);
    }
  }

  countStatement++;

  countResult(countStatement);
  title.innerHTML = subjects[countStatement].title;
  statement.innerHTML = subjects[countStatement].statement;
}

//Function none button
function buttonNoneClicked(){
  buttonNone.style.backgroundColor = "rgb(0, 174, 255)";

  countStatement++;
  countResult(countStatement);
  title.innerHTML = subjects[countStatement].title;
  statement.innerHTML = subjects[countStatement].statement;
}

//Function skip button
function buttonSkipClicked(){
  title.innerHTML = subjects[countStatement++].title;
  statement.innerHTML = subjects[countStatement++].statement;
}

//Function back button
function buttonBackClicked(){
  title.innerHTML = subjects[countStatement--].title;
  statement.innerHTML = subjects[countStatement--].statement;
}

//Function result
function countResult(countStatement){
  if(countStatement >= subjects.length){
    const result = answers.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});

    const sortable = Object.fromEntries(
      Object.entries(result).sort(([,a],[,b]) => b-a)
    );

    var sort = sortable[Object.keys(sortable)[0]];
    var partij = [parties[sort].name,
                  /*parties[sort].long*/];

    const keys = Object.keys(sortable);
    delete keys[0]; 
    console.log(keys);

    const endAnswer = partij;
    const endAnswer2 = keys;

    Voltooien(endAnswer, endAnswer2);
  }
}

//Function finished
function Voltooien(endAnswer, endAnswer2){
  title.innerHTML = ("Resultaat"); 
  statement.innerHTML = ("De partij die het best bij uw voorkeur past is: " + endAnswer); 
  party.innerHTML = ("Overige partijen: " + endAnswer2); 
}

// 1. overige partijen ophalen (behalve endAnswer)
// 2. instellen alleen grote / kleine / seculiere partijen tonen
// 3. extra gewicht geven aan gekozen categorie
// 4. styling terugzetten bij gegeven antwoord
