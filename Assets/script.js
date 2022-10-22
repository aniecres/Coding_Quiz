// Question/Answers/Correct Answers
const myQuestions = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      answers: {
        1: "<script.js>",
        2: "<js>",
        3: "<script>",
        4: "<javascript>",
      },
      correctAnswer: "<script>",
    },
  
    {
      question:
        "What syntax do you use to declare a data type?",
      answers: {
        1: "typeof",
        2: "datatype",
        3: "data",
        4: "typeData",
      },
      correctAnswer: "typeof",
    },
  
    {
      question: "To make use of an Array, do they have to be the same data type?",
      answers: {
        1: "maybe",
        2: "no",
        3: "yes",
        4: "no idea",
      },
      correctAnswer: "yes",
    },
  
    {
      question:
        "What do you use to string together different data types?",
      answers: {
        1: "Boolean",
        2: "true and false",
        3: "arithmic properties",
        4: "parenthesis",
      },
      correctAnswer: "true and false",
    },
  
    {
      question:
        "Where is the recommended place to connect the pathway for a Javascript link into the HTML?",
      answers: {
        1: "Footer",
        2: "Body",
        3: "Head",
        4: "Body",
      },
      correctAnswer: "Body",
    },
  ];
  
  var startQuizEl = document.getElementById("start-quiz");
  var questions = document.getElementById("questions");
  var answers = document.getElementById("answers");
  var timerEl = document.getElementById("countdown");
  var score = document.getElementById("score");
  var initials = document.getElementById("initials");
  var submit = document.getElementById("submit");
  var highscores = document.getElementById("highscores");
  var activeStepIndex = 1;
  var timeLeft = 40;
  var games = [];
  
  // Using the eventlistener to Start Quiz and start timer
  
  startQuizEl.addEventListener("click", function () {
    countdown();
    renderQuestions(myQuestions[0]);
  });
  
  questions.addEventListener("click", function (event) {
    if (activeStepIndex === 5) {
      answers.textContent = "CONGRATULATIONS!  GAME OVER";
      score.textContent = timeLeft;
    } else if (
      event.target.textContent !== myQuestions[activeStepIndex - 1].correctAnswer
    ) {
      answers.textContent = "Try again.";
      timeLeft -= 5;
    } else {
      answers.textContent = "You are correct!";
      console.log(timeLeft);
      activeStepIndex++;
      renderQuestions(myQuestions[activeStepIndex - 1]);
    }
  });
  
  // Function to start quiz and show next question
  function renderQuestions(activeQuestion) {
    questions.innerHTML = "";
  
    // adds question and answers elements to html
    var questionTitle = document.createElement("p");
    var answerList = document.createElement("ol");
    var answerItem1 = document.createElement("li");
    var answerItem2 = document.createElement("li");
    var answerItem3 = document.createElement("li");
    var answerItem4 = document.createElement("li");
    
  
    questionTitle.textContent = activeQuestion.question;
    answerItem1.textContent = activeQuestion.answers[1];
    answerItem2.textContent = activeQuestion.answers[2];
    answerItem3.textContent = activeQuestion.answers[3];
    answerItem4.textContent = activeQuestion.answers[4];
  
    answerList.append(answerItem1);
    answerList.append(answerItem2);
    answerList.append(answerItem3);
    answerList.append(answerItem4);
    questions.append(questionTitle);
    questions.append(answerList);
  }
  
  // Timer that counts down from 40
  function countdown() {
    var timeInterval = setInterval(function () {
      if (timeLeft > 1 && activeStepIndex !== 5) {
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else {
        clearInterval(timeInterval);
      }
    }, 1000);
  }
  
  // Submit button enters initials and score into local storage
  
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    var game = {
      initials: initials.value.trim(),
      score: timeLeft,
    };
    games.push(game);
    storeGames();
    renderGames();
  });
  
  function renderGames() {
    for (var i = 0; i < games.length; i++) {
      console.log(games[i]);
      var highScore = document.createElement("li");
      highScore.textContent = games[i].initials + " " + games[i].score;
      highscores.append(highScore);
    }
  
 
  
  
  

  display GAME OVER if all questions are answered
  set up array to store score and itials - setItem, getItem, .push to add, .pop to remove
  attach submit button to player initials and score
  */