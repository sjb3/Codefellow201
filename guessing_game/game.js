
var points = 0;
var question1 = "Q1:Are you a human(Y) or bot(N)?";
var question2 = "Q2:Are you a Vegan?(Y) or Carnivoir?(N)";
var question3 = "Q3:Do you support Public Transportation? (Y) or (N)";
var question4 = "Q4:Have you been in Seattle more than 5 years? (Y) or (N)";
var question5 = "Q5:Do you like Pasta(Y) or No(N)?";
var question6 = "Q6:Do you think I'm a dog-person?";
var element = document.getElementById('points');
// var img1 = "robot_and_human.jpg";
// var img2 = 'veggies.jpeg';
// var img3 = 'metro.jpeg';
// var img4 = 'wto_seattle.jpg';
// var img5 = 'pasta.jpeg';
// var img6 = 'catsdogs.jpg';
// var img = ["robot_and_human.jpg",'veggies.jpeg','metro.jpeg','wto_seattle.jpg','pasta.jpeg','catsdogs.jpg'] 
var img1 = 'thumb1.jpg'
var img2 = 'thumb2.jpg'
// var img = [];
//     for (var i=0; i<2; i++);
//         img[i] = document.getElementById('thumb'+(i+1)).style;

function newGame(question,answer,img){
    

    //element = prompt(question);
    //var element = document.getElementById('reply');
    var element = prompt(question);
    //guess = guess.toLowerCase();
    var elementTxt1 = 'Yes, Good answer';
    var elementtxt2 = "No, I don't like that idea";
    var elementTxt3 = 'Invalid response!';

    if (element === 'yes'|| element ==='y'){
        // var element = document.getElementById('reply');
        
        var element = prompt(elementTxt1);
        var answer = elementTxt1;

        element.innerHTML = elementTxt1;
        
        //document.getElementById('thumb1').src = 'img/thumb1.jpg';

        // var img = document.getElementById('yes');
        // img.style.visibility='visible';
        
        points++

    }else if (element ==='no'|| element ==='n'){
        // var element = document.getElementById('reply');
         
        var element = prompt(elementTxt2);
        var answer = elementTxt2;
        element.innerHTML = elementTxt2;

        // var img = document.getElementById('no');
        // img.style.visibility='visible';
        
        //document.getElementById('thumb2').src = 'img/thumb1.jpg';

    }else {
        // var element = document.getElementById('reply');
        
        var element = prompt(elementTxt3);
        var answer = elementTxt3;
        element.innerHTML = elementTxt3;

        
    }
    };

 

var element = document.getElementById('points');

function showMePoints(){
    console.log(points);
    
    elementTxt4 = "You've earned: " + points + " Congratulations!";
    element.innerHTML = elementTxt4;
    document.getElementById('points').innerHTML=elementTxt4; 

// function totalPoints(points){
    
//     console.log(points);
//     alert("You've earned: " + points +"." +" Congratulations!")


};

newGame(question1,'y');
newGame(question2,'y');
newGame(question3,'y');
newGame(question4,'y');
newGame(question5,'y');
newGame(question6,'y');
showMePoints();
