// $(document).ready(function () {

    // Variables
    var counter = 30;

    var correct = 0; 

    var incorrect = 0; 

    var intervalId;

    // gameStart button function
    $("#start").click(function() {

        $("#start").css("display", "none");
        $("#gameStart").css("display", "unset");

        // timerStart function
        function countdown() {
            counter--;
            $("#timer").html("Time remaining: " + counter + "s");
            if (counter === 0) {
                clearInterval(intervalId);
                endGame ();
            }
        }

        intervalId = setInterval(countdown, 1000);    
        
    });    


    // Check answers functions:
    // 1. Get value from radio input
    // 2. if/else win and lose statements

    function endGame () {
        var questionOne = $("input[name='questionOne']:checked").val();
        var questionTwo = $("input[name='questionTwo']:checked").val();
        var questionThree = $("input[name='questionThree']:checked").val();
        var questionFour = $("input[name='questionFour']:checked").val();
        var questionFive = $("input[name='questionFive']:checked").val();

        if (questionOne == "guyFieri") {
            correct++;
            console.log(questionOne);
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            
        } else { 
            incorrect++;
            console.log(questionOne);
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
        }

        if (questionTwo == "dory") {
            correct++;
            console.log(questionTwo);
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            
        } else { 
            incorrect++;
            console.log(questionTwo);
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
        }

        if (questionThree == "12M") {
            correct++;
            console.log(questionThree);
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            
        } else { 
            incorrect++;
            console.log(questionThree);
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
        }

        if (questionFour == "jTravolta") {
            correct++;
            console.log(questionFour);
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            
        } else { 
            incorrect++;
            console.log(questionFour);
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
        }

        if (questionFive == "amazon" || questionFive == "facebook") {
            correct++;
            console.log(questionFive);
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            
        } else { 
            incorrect++;
            console.log(questionFive);
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
        }

        // Display results
        $("#gameStart").css("display", "none");
        if (correct > incorrect) {
            $("header").html("<h1>You Won!</h1>");
        } else if (incorrect > correct || correct == incorrect) {
            $("header").html("<h1>You Lost!</h1>");
        } 
        $("#correct").html("Correct answers: " + correct);
        $("#incorrect").html("Incorrect answers: " + incorrect);
    }

// });