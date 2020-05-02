$(document).ready(function (){
    
    let correctAnswers = 0;
    let inCorrectAnswers = 0;
    let rightAnswer; 
    let unAnsweredQuestions = 0;
    let timeLeft = 17;
    let answered = false; //will be used to stop timer/reset if user answered 
    let intervalID;
    let indexTrivia = 0; //index of all in triviaQuesions array
    let triviaQuestions = [{ //trivia questions 
        question: "The show takes place in Pawnee, which state is Pawnee located?",
        answers: ["California", "Ohio", "Indiana", "Pennsylvania"],
        rightAnswer: "2",
        image: ("/assets/images/pawneeSign.jfif")
    }, {
        question: "Who is the youngest member in the office?",
        answers: ["Tom Haverford", "Andy Dwyer", "Lesie Knope", "April Ludgate"],
        rightAnswer: "3",
        image: ("/assets/images/april.png")
    }, {
        question: "What slogan does Tom and Donna use on a special day of the year?",
        answers: ["Treat Yo Self", "Wine is crying juice", "Party Time", "We are outta here"],
        rightAnswer: "0",
        image: ("/assets/images/treatSelf.jpg")
    },{
        question: "What is Ron Swanson's favorite meal to eat?",
        answers: ["Steak, the biggest they have", "All the bacon and eggs", "Bacon Burgers", "All of the above"],
        rightAnswer: "3",
        image: ("/assets/images/ron1.jpg")
    },{
        question: "Who is Donna Meagle's cousin?",
        answers: ["Lil John", "Snoop Dog", "Ginuwine", "Tom Haverford"],
        rightAnswer: "2",
        image: ("/assets/images/donna.png")
    },{
        question: "Who is Lesie Knopes biggest crush?",
        answers: ["Barack Obama", "Joe Biden", "Ron Swanon", "Bernie Sanders"],
        rightAnswer: "1",
        image: ("/assets/images/biden.jpg")
    },{
        question: "What are the names of both Ron's ex-wives and his mother?",
        answers: ["Alison", "Tammy", "Sarah", "Julie"],
        rightAnswer: "1",
        image: ("/assets/images/tammys.webp")
    },{
        question: "Who is Lesie Knope's number one best friend?",
        answers: ["Ron Swanson", "Andy Dwyer", "Ann Perkins", "Jerry Gergich"],
        rightAnswer: "2",
        image: ("/assets/images/ann.jpg")
    }];


    function answeredCorrect () { //function for when correct answer is chosen 
        correctAnswers++;
        $('.timeRemaining').text('WOW! Look at you, you are a fan after all.').css({
            'color': '#68764A'
        });
        reset();
    }

    function answeredIncorrect () { //function when incorrect answer is chosen 
        inCorrectAnswers++;
        $('.timeRemaining').text('Well... I guess you are not a fan of the show..').css({
            'color': '#68764A'
        });
        reset();
    }

    function notAnswered () {
        unAnsweredQuestions++;
        $('.timeRemaining').text('I seemed to have stumped you there').css({
            'color': '#68764A'
        });
        reset();
    }


    function startGame () { //function to start game when user clicks button 
        console.log('game started')
        $('.startButton').remove();
        correctAnswers = 0;
        inCorrectAnswers = 0;
        unAnsweredQuestions = 0;
        nextQuestion();
    }

    function timer () { //countdown timer for each question answered or not
        if (timeLeft === 0) {
            answered = true;
            clearInterval(intervalID);
            $('.question').text("The Correct Answer Is: " + triviaQuestions[indexTrivia].answer[rightAnswer]);
            notAnswered();
        } else if (answered = true) {
            clearInterval(intervalID);
        } else {
            timeLeft--;
            $('.timeRemaining').text("You Have " + timeLeft + " Seconds Left To Answer This Question");
        }
    }

    function nextQuestion () { //function to call next question with no user input 
       console.log(triviaQuestions)
       //console.log(intervalID)
        answered = false;
        timeLeft = 17;
        intervalID = setInterval(timer, 1000);
        if (answered === false) {
            timer();
        }
        let rightAnswer = triviaQuestions[indexTrivia].rightAnswer;
        let question = triviaQuestions[indexTrivia].question;
        $('.question').html(question)
        console.log(rightAnswer)
        console.log(triviaQuestions[indexTrivia].answers)
        for (let i = 0; i < 8; i++) {
            let answer = triviaQuestions[indexTrivia].answers[i];
            $('.answers').append('<h4 class= "answerChoices id=' + i + '>' + answer + '</h4>');
        } 
        $("h4").click(function () {
            let id = $(this).attr('id');
            if (id === rightAnswer) {
                answered = true;
                $('.question').text("The Answer Is: " + triviaQuestions[indexTrivia].answers[rightAnswer]);
                answeredCorrect();
            } else {
                answered = true; 
                $('.questions').text("You Chose: " + triviaQuestions[indexTrivia].answers[id] + "But The Answer Is Actually: " + triviaQuestions[indexTrivia].answers[rightAnswer]);
                answeredIncorrect();
            }

        });
    }

    function reset () { //function to reset game after time runs out or all questions answered 
        $('.answerChoices').remove();
        $('.answers').append('<img class=answerImage width="160" heigth= "170" src="' + triviaQuestions[indexTrivia].image + '">');
        indexTrivia++;
        if (indexTrivia < triviaQuestions.length) {
            setTimeout(function () {
                nextQuestion();
                $('.answerImage').remove();
            }, 5000);
        } else {
            setTimeout (function () {
                $('.question').remove();
                $('.timeRemaining').remove();
                $('.answerImage').remove();
                $('.answers').append('<h4 class= answerChoices end> Correct Answers: ' + correctAnswers + '</h4>');
                $('.answers').append('<h4 class= answerChoices end> Incorrect Answers: ' + inCorrectAnswers + '</h4>');
                $('.answers').append('<h4 class= answerChoices end> unanswered Questions: ' + unAnseredQuestions + '</h4>');
                setTimeout( function () {
                    location.reload();
                }, 8000);
        
            }, 5000);
        }
    }

    $('.startButton').on("click", function () {
        $('.startButton');
        startGame();

    });





});