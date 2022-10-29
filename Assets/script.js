let highScoresBtn = document.getElementById('viewHighscoresBtn');
let startBtn = document.getElementById('startBtn');
let subHighScoreBtn = document.getElementById('submitHighscoreBtn');
let backBtn = document.getElementById('goBackBtn');
let clearHighScoreBtn = document.getElementById('clearHighscoreBtn');
let time = document.getElementById('timerTag'); 

 

 function startQuiz() {
   const questions = document.createElement("div");
    questions.className = "questionBox";
}
startBtn.addEventListener('click', startQuiz)


const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<script>", "<js>", "<scirpt>", "<javascript>"], 
        correctAns: "<script>"
    },

    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<script>", "<js>", "<scirpt>", "<javascript>"], 
        correctAns: "<script>"
    },

    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<script>", "<js>", "<scirpt>", "<javascript>"], 
        correctAns: "<script>"
    },

    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<script>", "<js>", "<scirpt>", "<javascript>"], 
        correctAns: "<script>"
    },

    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<script>", "<js>", "<scirpt>", "<javascript>"], 
        correctAns: "<script>"
    }
 ]
 
 