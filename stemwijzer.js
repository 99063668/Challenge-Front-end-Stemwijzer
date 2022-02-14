//Variables buttons
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
  document.getElementById("group2").style.display = "none";
  title.innerHTML = subjects[countStatement].title;
  statement.innerHTML = subjects[countStatement].statement;

  //Buttons
  buttonEens.onclick = buttonEensClicked;
  buttonOneens.onclick = buttonOneensClicked;
  buttonNone.onclick = buttonNoneClicked;
  buttonSkip.onclick = buttonSkipClicked;
  buttonBack.onclick = buttonBackClicked;

  document.getElementById("partijen").onchange = getSelect;
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
  title.innerHTML = ("Resultaat"); 
  statement.innerHTML = ("De partij die het best bij uw voorkeur past is: " + endAnswer); 

  for(let i = 0; i < endAnswer2.length; i++){
    const html = document.createElement("li");
    html.innerText = endAnswer2[i];
    document.getElementById("result").appendChild(html);
  }
}

//Function to choose which parties are shown
// getSelect();
function getSelect(){
  var indexValue = document.getElementById("partijen").options[document.getElementById("partijen").selectedIndex].value;
  console.log(indexValue);

  if(indexValue == "Grote"){
    const size = parties.size; 
    size >= 5;
    return size;
  }else if(indexValue == "Kleine"){
    const size = parties.size; 
    size < 5;
    return size;
  }else if(indexValue == "Seculieren"){
    const secular = parties.secular; 
    secular == true;
    return secular;
  }else if(indexValue == "Alle"){
    const all = parties;
    return all;
  }
}

// 1. instellen welke partijen getoond worden
// 2. extra gewicht geven aan gekozen categorie
