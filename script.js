const startButton = document.getElementById('start-btn');
startButton.addEventListener('click', startQuiz);
const questionQuestion = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerbut = document.getElementById('answer-buttons');
const container = document.getElementById('cont');

const yesbut = document.getElementById('yes');
const nobut = document.getElementById('no');

yesbut.addEventListener('click' , funyes);
nobut.addEventListener('click' , funno);

var indcurques;
var l = [];
var m = [];
var max = 0;
var n = 0;

function startQuiz(){
    indcurques = 0;
    startButton.classList.add('hide');
    //zoneune.classList.add('hide')   //**** */
    questionQuestion.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion(){
    questionElement.innerText = quest[indcurques];
    indcurques ++;


}

function funyes(){
    if (indcurques == 9){
        questionElement.classList.add('hide');
        answerbut.classList.add('hide');
        //restart.classList.remove('hide');
        analysemodel();
    }
    else{
        l.push("y");
        setNextQuestion();

    }

}

function funno() {
    if (indcurques == 9){
        questionElement.classList.add('hide');
        answerbut.classList.remove('hide'); 
        analysemodel();
    }
    else{
        l.push("n");
        setNextQuestion();

    } 
}

function analysemodel(){
    for (var i=0; i<6 ; i++){
        var s=0;
        var k=0;
        for (var j=1; j<10 ; j++){
            if (matrice[i][j]===l[k]){
                s++;
            }
            k++;
        }
        m.push(s);
    } 
    for(var i =0 ; i<6 ; i++){
        if (m[i]>max){
            max=m[i];
            n=i;
        }
    }
    container.innerText = "The suitable model for your project is: " + matrice[n][0];
    //container.innerText = "le model a choisir est " + matrice[n][0];

}

var quest = ["Are the requirements clear?","Is the duration of the project short?",
"Is the project complex?","Is the domain of the project disciplined?",
"Do you need to see a prototype before the implimenetation?",
"Does the system has seperated components?","Do you need an early test?",
"Do you need a costly model?","Do you want to be involved during the process?"]


var matrice = [["waterfall","y","y","n","n","n","n","n","n","n"],
["v-shaped","y","y","n","y","n","n","y","n","n"],
["Iterative","n","n","y","n","n","y","y","y","y"],
["Agile","n","n","y","n","n","n","y","y","y"],
["Spiral","n","n","y","n","n","n","y","y","y"],
["Prototype","n","n","y","n","y","n","y","y","y"]]