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
  document.getElementById("options").style.display = "none";

  title.innerHTML = subjects[countStatement].title;
  statement.innerHTML = subjects[countStatement].statement;

  if(answers.length == 0){
    for (let i = 0; i < subjects.length; i++) {
      answers[i]= new antwoord(null, 1);
    }
  }
  console.log(countStatement);

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

  if(countStatement < subjects.length) {
    title.innerHTML = subjects[countStatement].title; 
    statement.innerHTML = subjects[countStatement].statement;
  }else{
    countResult();
  }
}

//Function disagree button
function buttonOneensClicked(){
  buttonOneens.style.backgroundColor = "rgb(0, 174, 255)";

  answers[countStatement].answer = "contra";
  countStatement++;

  if(countStatement < subjects.length) {
    title.innerHTML = subjects[countStatement].title; 
    statement.innerHTML = subjects[countStatement].statement;
  }else{
    countResult();
  }
}

//Function none button
function buttonNoneClicked(){
  buttonNone.style.backgroundColor = "rgb(0, 174, 255)";

  answers[countStatement].answer = "none";
  countStatement++;

  if(countStatement < subjects.length) {
    title.innerHTML = subjects[countStatement].title; 
    statement.innerHTML = subjects[countStatement].statement;
  }else{
    countResult();
  }
}

//Function skip button
function buttonSkipClicked(){
  countStatement++;
  if(countStatement < subjects.length) {
    title.innerHTML = subjects[countStatement].title; 
    statement.innerHTML = subjects[countStatement].statement;
  }else{
    countResult();
  }
}

//Function back button
function buttonBackClicked(){
  if(countStatement > 0){
    countStatement--;
    title.innerHTML = subjects[countStatement].title; 
    statement.innerHTML = subjects[countStatement].statement;
  }
}

//Function result
function countResult(){
  var sameparties = [];

  for(let i = 0; i < subjects.length; i++){
    for(let j = 0; j < subjects[i].parties.length; j++){
      for(let o = 0; o < answers[i].weight; o++){
        if(subjects[i].parties[j].position == answers[i].answer){
          sameparties.push(subjects[i].parties[j]);
        }
      }
    }
  }

  var result = findOcc(sameparties, 'name');
  const size = 5; 
  var selectedOption = document.getElementById("partijen").options[document.getElementById("partijen").selectedIndex].value;
  
  result.sort(function(a, b) {
    return b.occurrence - a.occurrence;
  });

  if(selectedOption == "Grote"){
    result = result.filter(currentParty => {
      var partyInfo = parties.find(party => party.name == currentParty.name);
      return partyInfo.size >= size;
    });
    Voltooien(result);
  // }else if(selectedOption == "Kleine"){
  //   result = result.filter(currentParty => {
  //     var partyInfo = parties.find(party => party.name == currentParty.name);
  //     return partyInfo.size < size;
  //   });
  //   Voltooien(result);
  }else if(selectedOption == "Seculieren"){
    result = result.filter(currentParty => {
      var partyInfo = parties.find(party => party.name == currentParty.name);
      return partyInfo.secular == true;
    });
    Voltooien(result);
  }else if(selectedOption == "Alle"){  
    Voltooien(result);
  }
}

//Function to get the end name
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

//Function finished
function Voltooien(endAnswer){
  document.getElementById("group2").style.display = "inline";
  document.getElementById("btnEens").style.display = "none";
  document.getElementById("btnOneens").style.display = "none";
  document.getElementById("btnNone").style.display = "none";
  document.getElementById("btnSkip").style.display = "none";
  document.getElementById("btnBack").style.display = "none";

  if(endAnswer.length == 0){
    document.getElementById("group2").style.display = "none";

    title.innerHTML = "Resultaat"; 
    statement.innerHTML = "Geen partijen gevonden die overeen komen met uw keuzes."; 
  }else{
    title.innerHTML = "Resultaat"; 
    statement.innerHTML = "De partij die het best bij uw voorkeur past is: " + endAnswer[0].name + ", u heeft " + endAnswer[0].occurrence + "keer eens gestemd"; 

    document.getElementById("result").textContent = "";

    for(let i = 1; i < endAnswer.length; i++){
      const html = document.createElement("li");
      html.innerText = endAnswer[i].name + ", u heeft " + endAnswer[i].occurrence + "keer eens gestemd";
      html.id = "lijstElement_" + i;
      document.getElementById("result").appendChild(html);
    }
  }
}

function findOcc(arr, key){
  let arr2 = [];

  arr.forEach((x)=>{
    if(arr2.some((val)=>{ return val[key] == x[key] })){
      arr2.forEach((k)=>{
      if(k[key] === x[key]){
        k["occurrence"]++
      }
    })
    }else{
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

//Add options
function options(){
  document.getElementById("titleOption").style.display = "block";
  document.getElementById("optionBtn").style.display = "none";

  for(let i = 0; i < subjects.length; i++){
    answers[i]= new antwoord(null, 1);

    var ul = document.getElementById('option');
    var li = document.createElement('li');

    li.id = "extraVoorkeur" + i;

    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + i;
    checkbox.onchange = function() {
      if(this.checked){
        answers[i].weight = 2;
      }else{
        answers[i].weight = 1;
      }
      console.log(answers[i].weight);
    };
    
    li.appendChild(checkbox);
    
    var text = subjects[i].title;
    li.appendChild(document.createTextNode(text));
    ul.appendChild(li); 
  }
}
