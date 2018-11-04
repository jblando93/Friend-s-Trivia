


var variableStringQuestion=["What was monica's name on her high school field hockey team?","What Do They Call Ross When he gets angry?","Question3","Question4","Question5","Question6","Question7","Question8","Question9","Question10"]

var variableStringAnswerOne=["Big Fat Goalie","Rizzo"]
var variableStringAnswerTwo=["Dumb Answer","Red Ross"]
var variableStringAnswerThree=["Stupid Answer","Ms.Chanandler Bong"]
var variableStringAnswerFour=["Retarded Answer","Doctor filange"]

var variableIntegerCorrectAnswer=[1,2]
var x = -1

IncreaseTheQuestionNumber()


//Event Handler and function for Answer 1
document.getElementById("HTMLanswerOne").addEventListener("click", 
FunkAnswerOneClicked)

function FunkAnswerOneClicked(){

    console.log('Answer One Was Selected')

    if(variableIntegerCorrectAnswer[x] === 1)
    {
        alert("Answer One is Correct")
    } else{
        alert("Answer One is Wrong")
    }
    IncreaseTheQuestionNumber()
}
//Event Handler and function for Answer 2
document.getElementById("HTMLanswerTwo").addEventListener("click", 
FunkAnswerTwoClicked)

function FunkAnswerTwoClicked(){

    console.log('Answer Two Was Selected')

    if(variableIntegerCorrectAnswer[x] === 2)
    {
        alert("Answer Two is Correct")
    } else{
        alert("Answer Two is Wrong")
    }
    IncreaseTheQuestionNumber()
}

//Event Handler and function for Answer 3
document.getElementById("HTMLanswerThree").addEventListener("click", 
FunkAnswerThreeClicked)

function FunkAnswerThreeClicked(){

    console.log('Answer Three Was Selected')

    if(variableIntegerCorrectAnswer[x] === 3)
    {
        alert("Answer Three is Correct")
    } else{
        alert("Answer Three is Wrong")
    }
    IncreaseTheQuestionNumber()
}

//Event Handler and function for Answer 4
document.getElementById("HTMLanswerFour").addEventListener("click", 
FunkAnswerFourClicked)

function FunkAnswerFourClicked(){

    console.log('Answer Four Was Selected')

    if(variableIntegerCorrectAnswer[x] === 4)
    {
        alert("Answer Four is Correct")
    } else{
        alert("Answer Four is Wrong")
    }
    IncreaseTheQuestionNumber()
}

function IncreaseTheQuestionNumber(){
    x = x+1
    if(x===10){
        endGame()
        
    }else{

    document.getElementById("HTMLquestion").innerText =
variableStringQuestion[x]
document.getElementById("HTMLanswerOne").innerText =
variableStringAnswerOne[x]
document.getElementById("HTMLanswerTwo").innerText =
variableStringAnswerTwo[x]
document.getElementById("HTMLanswerThree").innerText =
variableStringAnswerThree[x]
document.getElementById("HTMLanswerFour").innerText =
variableStringAnswerFour[x]
    }
}

function endGame(){
    alert('Game Over Man')
}






