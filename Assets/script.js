let highScoresBtn = document.getElementById('viewHighscoresBtn');
let startBtn = document.getElementById('startBtn');
let subHighScoreBtn = document.getElementById('submitHighscoreBtn');
let backBtn = document.getElementById('goBackBtn');
let clearHighScoreBtn = document.getElementById('clearHighscoreBtn');
let time = document.getElementById('timerTag'); 

 


highScoresBtn.addEventListener('click', myFunction);
 function myFunction() {
    
 }

 const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {"<script>", "<js>", "<scirpt>", "<javascript>"}
        correctAns: "<script>"
    }
 ]
