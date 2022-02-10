//Variables
var buttonEens = document.getElementById("btnEens");
var buttonOneens = document.getElementById("btnOneens");
var buttonNone = document.getElementById("btnNone");
var buttonSkip = document.getElementById("btnSkip");
var buttonBack = document.getElementById("btnBack");

var countStatement = 0;
var answer = [];

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
  buttonOneens.style.backgroundColor = "maroon";
  buttonNone.style.backgroundColor = "maroon";

  for(let i = 0; i <= subjects[countStatement].parties.length -1; i++){
    if(subjects[countStatement].parties[i].position == "pro"){
      var eens = subjects[countStatement].parties[i].name;
      answer.push(eens);
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
  buttonNone.style.backgroundColor = "maroon";
  buttonEens.style.backgroundColor = "maroon";

  for(let i = 0; i <= subjects[countStatement].parties.length -1; i++){
    if(subjects[countStatement].parties[i].position == "contra"){
      console.log(subjects[countStatement].parties[i].name);
      var oneens = subjects[countStatement].parties[i].name;
      answer.push(oneens);
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
  buttonEens.style.backgroundColor = "maroon";
  buttonOneens.style.backgroundColor = "maroon";

  countStatement++;
  countResult(countStatement);
  title.innerHTML = subjects[countStatement].title;
  statement.innerHTML = subjects[countStatement].statement;
}

//Function skip button
function buttonSkipClicked(){
  title.innerHTML = subjects[countStatement+1].title;
  statement.innerHTML = subjects[countStatement+1].statement;
}

//Function back button
function buttonBackClicked(){
  title.innerHTML = subjects[countStatement-1].title;
  statement.innerHTML = subjects[countStatement-1].statement;
}

//Function result
function countResult(countStatement){
  if(countStatement >= subjects.length){
    result = answer;
    resultList = answer;
    Voltooien(result, resultList);
  }
}

//Function finished
function Voltooien(result, resultList){
  title.innerHTML = ("Resultaat"); 
  statement.innerHTML = ("De partij die het best bij uw voorkeur past is: " + result); 
  party.innerHTML = ("Overige partijen: " + resultList); 
}
