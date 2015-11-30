
var points = 0;
var question1 = "Q1:Are you a human(Y) or bot(N)?";
var question2 = "Q2:Are you a Vegan?(Y) or Carnivoir?(N)";
var question3 = "Q3:Do you support Public Transportation? (Y) or (N)";
var question4 = "Q4:Have you been in Seattle more than 5 years? (Y) or (N)";
var question5 = "Q5:Do you like Pasta(Y) or No(N)?";
var question6 = "Q6:Do you think I'm a dog-person?";
var element = document.getElementById('points');

function newGame(question,answer,img){
    

    var element = prompt(question);
    //guess = guess.toLowerCase();
    var elementTxt1 = 'Yes, Good answer';
    var elementTxt2 = "No, I don't like that idea";
    var elementTxt3 = 'Invalid response!';

    if (element === 'yes'|| element ==='y'){
        
        var element = prompt(elementTxt1);
        var answer = elementTxt1;

        element.innerHTML = elementTxt1;
                
        points++

    }else if (element ==='no'|| element ==='n'){
         
        var element = prompt(elementTxt2);
        var answer = elementTxt2;
        element.innerHTML = elementTxt2;


        
    }else {
        
        var element = prompt(elementTxt3);
        var answer = elementTxt3;
        element.innerHTML = elementTxt3;

        
    }
    };

 


var showMePoints = function(){
var element = document.getElementById('points');
var img1 = 'thumb1.jpg';
var img2 = 'thumb2.jpg';

    // elementTxt4 = "You've earned: " + points + ". Congratulations!";
    // element.innerHTML = elementTxt4;
   
    // elementTxt5 = "Total score: " + points;
    // element.innerHTML = elementTxt5;

var showMeImg = document.createElement('img');


    console.log(points);
   
    if (points >=3){
        
        elementTxt4 = "You've earned: " + "<" + points + ">. " + " Congratulations!";
        element.innerHTML = elementTxt4;
        //document.className.background = 'green';
        showMeImg.src = 'img/thumb1.jpg';
        document.body.appendChild(showMeImg); 
        
    }
    else{
        
        elementTxt5 = "Total score: " + "<" + points + ">. " + " Try harder next time!";
        element.innerHTML = elementTxt5;
        //document.className.background = 'red';

        showMeImg.src = 'img/thumb2.jpg';
        document.body.appendChild(showMeImg); 
        
    };
 
};

newGame(question1,'y');
newGame(question2,'y');
newGame(question3,'y');
newGame(question4,'y');
newGame(question5,'y');
newGame(question6,'y');
showMePoints();
