// JavaScript Quiz af Simple Steps Code https://simplestepscode.com/javascript-quiz-tutorial/

var myQuestions = [
    {
        question: "Hvad gør man i dag, for at undgå borene bliver for varme?",
        answers: {
            a: 'Tandplejeren hælder koldt vand i det område, som der bliver boret i', 
            b: 'Tandlægen puster ind i munden på patienten',
            c: 'Det er ikke noget problem i dag, derfor gør man ikke noget'
        },
        correctAnswer: 'a'
    },
    {
        question: "Hvorfor har man ikke længere gulvtæpper ved tandlægen?",
        answers: {
            a: 'Af hygienjske årsager',
            b: 'For at patienter ikke føler sig hjemme',
            c: 'Fordi stolene har fået glidsikre fødder derfor behøver man ikke længere tæppet'
        },
        correctAnswer: 'a'
    },    
    {
        question: "I hvilken alder, fik folk i 40'erne typisk gebis?",
        answers: {
            a: 'Konfirmationsalderen',
            b: '30erne',
            c: 'Pensionsalderen'
        },
        correctAnswer: 'b'
    }
];



var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' ud af ' + questions.length + ' korrekte ';
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}