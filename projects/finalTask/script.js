var username = prompt('Please enter your name:');
var age = prompt('Please enter your age:');
alert('The Following Questions to Determine Your Level.');
var mathOperation;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var score = 0;
var levelScore = 0;
var level;
for (let i = 1; i <= 5; i++) {
    var firstNumber = getRandomInt(10);
    var secondNumber = getRandomInt(10) + 1;
    var realAnswer;
    switch (getRandomInt(4) + 1) {
        case 1:
            mathOperation = '+';
            realAnswer = firstNumber + secondNumber;
            break;
        case 2:
            mathOperation = '-';
            realAnswer = firstNumber - secondNumber;
            break;
        case 3:
            mathOperation = '*';
            realAnswer = firstNumber * secondNumber;
            break;
        case 4:
            mathOperation = '/';
            realAnswer = firstNumber / secondNumber;
            break;
    }

    var userAnswer = prompt('Q' + i + ' )  ' + firstNumber + ' ' + mathOperation + ' ' + secondNumber + '\nPlease enter the answer:');

    if (realAnswer == userAnswer) {
        score += 2;
    }

}//loop end
if (score >= 7) {
    level = "Hard level";
}
else if (score < 7 && score >= 5) {
    level = "Intermediate level";
}
else {
    level = "Easy level";
}

document.getElementById("name").textContent = 'Name: ' + username;
document.getElementById("age").textContent = 'Age: ' + age;
document.getElementById("level").textContent = 'Level: ' + level;

//LEVEL DESIGN
function addQuestions(quseionNumber) {
    
    for (let q = 1; q <= quseionNumber; q++) {
        var firstNumber = getRandomInt(10);
    var secondNumber = getRandomInt(10) + 1;
    var realAnswer;
    switch (getRandomInt(4) + 1) {
        case 1:
            mathOperation = '+';
            realAnswer = firstNumber + secondNumber;
            break;
        case 2:
            mathOperation = '-';
            realAnswer = firstNumber - secondNumber;
            break;
        case 3:
            mathOperation = '*';
            realAnswer = firstNumber * secondNumber;
            break;
        case 4:
            mathOperation = '/';
            realAnswer = firstNumber / secondNumber;
            break;
    }

        let quesion = document.createElement("div");
        quesion.innerHTML = '<div class="m-2"><label class="form-label">Q' + q + ')  ' +firstNumber+' '+mathOperation+' '+secondNumber+'</label><input type="text"class="form-control" name="answer" id="' + q + '" placeholder="put your answer here"></div>';
        quesionsForm.appendChild(quesion);
    }    
    let btn = document.createElement("div");
    btn.innerHTML='<button onClick="checkGrade()" type="submit" class="m-3 p-2 btn btn-success">Submit Answers</button>';
    quesionsForm.appendChild(btn);
   
}
const quesionsForm = document.getElementById("levelQusetions");
// Easy Level
if (level == "Easy level") {
    addQuestions(5);
}
//MID LEVEL
else if (level == "Intermediate level") {
    addQuestions(10);
}
//HARD LEVEL
else if (level == "Hard level") {
    addQuestions(25);
}

function checkGrade() {
    if(levelScore>=7)
    {
        //pass - show animation and play success sound
    }
    else{
        //fails - show animation and play fail sound
    }
}