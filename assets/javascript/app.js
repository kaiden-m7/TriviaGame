$(document).ready(function (){
    
    let correctAnswers = 0;
    let inCorrectAnswers = 0;
    let rightAnswer; 
    let unAnseredQuestions = 0;
    let timeLeft = 20;
    let indexTrivia = 0; //index of all in triviaQuesions array
    let triviaQuestions = [{ //trivia questions 
        question: "The show takes place in Pawnee, which state is Pawnee located?",
        answers: ["California", "Ohio", "Indiana", "Pennsylvania"],
        rightAnswer: "2",
        image: "/assets/images/pawneeSign.jfif"
    }, {
        question: "Who is the youngest member in the office?",
        answers: ["Tom Haverford", "Andy Dwyer", "Lesie Knope", "April Ludgate"],
        rightAnswer: "3",
        image: "/assets/images/april.png",
    }, {
        question: "What slogan does Tom and Donna use on a special day of the year?",
        answers: ["Treat Yo Self", "Wine is crying juice", "Party Time", "We are outta here"],
        rightAnswer: "0",
        image: "/assets/images/treatSelf.jpg",
    },{
        question: "What is Ron Swanson's favorite meal to eat?",
        answers: ["Steak, the biggest they have", "All the bacon and eggs", "Bacon Burgers", "All of the above"],
        rightAnswer: "3",
        image: "/assets/images/ron1.jpg",
    },{
        question: "",
        answers: [""],
        rightAnswer: "",
        image: "",
    },{
        question: "",
        answers: [""],
        rightAnswer: "",
        image: "",
    },{
        question: "",
        answers: [""],
        rightAnswer: "",
        image: "",
    },{
        question: "",
        answers: [""],
        rightAnswer: "",
        image: "",
    }];


    function answeredCorrect () { //function for when correct answer is chosen 

    }

    function answeredIncorrect () { //function when incorrect answer is chosen 

    }


    function startGame () { //function to start game when user clicks button 

    }

    function timer () { //countdown timer for each question

    }

    function nextQuestion () { //function to call next question with no user input 

    }

    function reset () { //function to reset game after time runs out or all questions answered 
        
    }







})