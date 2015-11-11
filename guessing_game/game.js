//var guessingGame = true;
var points = 0;
var question1 = "Q1:Are you a human(Y) or bot(N)?";
var question2 = "Q2:Are you a Vegan?(Y) or Carnivoir?(N)";
var question3 = "Q3:Do you support Public Transportation? (Y) or (N)";
var question4 = "Q4:Have you been in Seattle more than 5 years? (Y) or (N)";
var question5 = "Q5:Do you like Pasta(Y) or No(N)?";
var question6 = "Q6:Do you think I'm a dog-person?";
//var element = document.getElementById('points');
var img1 = "robot_and_human.jpg";
var img2 = 'veggies.jpeg';
var img3 = 'metro.jpeg';
var img4 = 'wto_seattle.jpg';
var img5 = 'pasta.jpeg';
var img6 = 'catsdogs.jpg';
    
function newGame(question, answer){

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
        points++

    }else if (element ==='no'|| element ==='n'){
        // var element = document.getElementById('reply');
         
        var element = prompt(elementTxt2);
        var element = elementTxt2;
        element.innerHTML = elementntTxt2;

    }else {
        // var element = document.getElementById('reply');
        
        var element = prompt(elementTxt3);
        var element = elementTxt3;
        element.innerHTML = elementTxt3;

    }
    };

 
//     //1     
//         var question1 = prompt("Q1:Are you a human(Y) or bot(N)?");
//         question1 = question1.toLowerCase();
//         if (question1 === 'yes' || question1 === 'y'){
//             alert('Right ON!');
//             points++;
           
//             var img = document.getElementById('q1');
//             //img.innerHTML='robot_and_human.jpg';
//             document.getElementById('q1').style.visibility = 'visible';
//             // img.style.visibility="visible";
//         }
//         else if(question1 ==="no"|| question1==='n'){
//             alert("Bot is not welcome here!");

//              var img = document.getElementById('q1');
//              document.getElementById('q1').style.visibility = 'hidden';
//             // img.style.visibility="hidden";
        
//         }

//         else {
//             alert('Invalid!');

//              var img = document.getElementById('q1');
//              document.getElementById('q1').style.visibility = 'hidden';
//             // img.style.visibility="hidden";
        
//         };
//     //2
//         var question2 = prompt("Q2:Are you a Vegan?(Y) or Carnivoir?(N)");
//         question2 = question2.toLowerCase();
//         if (question2 === 'yes' || question2 === 'y') {
//             alert('Right on!');
//             points++;

//             // var img = document.getElementById('q2');
//             // img.style.visibility="visible";
//         }
//         else if (question2 ==='no'|| question2 ==='n'){
//             alert('I LUV bacon!');
//         }
//         else {
//             alert('Invalid!');
//         };
//     //3   
//         var question3 = prompt("Q3:Do you support Public Transportation? (Y) or (N)");
//         question3 = question3.toLowerCase();
//         if (question3 === 'yes' || question3 === 'y') {
//             alert('YES!');
//             points++;

//             // var img = document.getElementById('q3');
//             // img.style.visibility="visible";
//         }
//          else if (question3 ==='no'|| question3 ==='n'){
//             alert('Soooo --- wrong.');
            
//             // var img = document.getElementById('q3');
//             // img.style.visibility="hidden";
        
//         } else {
//             alert('Then what?');
//         };
//     //4

//         var question4 = prompt("Q4:Have you been in Seattle more than 5 years? (Y) or (N)");
//         question4 = question4.toLowerCase();
//         if (question4 === 'yes' || question3 === 'y') {
//             alert('YES!');
//             points++;

//             var img = document.getElementById('q4');
//             img.style.visibility="visible";
//         }
//         else if(question4 ==='no'|| question4 ==='n'){
//             alert('Welcome to Seattle');
//         } else {
//             alert('???')
//         };

        
//     //5
//         var question5 = prompt("Q5:Do you like Pasta(Y) or No(N)?");
//         question5 = question5.toLowerCase();
//         if (question3 === 'yes' || question3 === 'y') {
//             alert('YES!');
//             points++;

//             var img = document.getElementById('q5');
//             img.style.visibility="visible";
//         }
//         else if (question5 ==='no'|| question5 ==='n'){
//             alert('Why NOT?');
//         } else {
//             alert('Not hungry?');

//         };
//     //6
//         var question6 = prompt("Q6:Do you think I'm a dog-person?");
//         question6 = question6.toLowerCase();
//         if (question3 === 'yes' || question3 === 'y') {
//             alert('YES!');
//             points++;
            
//             var img = document.getElementById('q6');
//             img.style.visibility="visible";
        
//             var totalPoints = document.getElementById('points').innerHTML;
//             totalPoints.innerHTML('points') = points;

//         } else if (question6 ==='no'|| question6 ==='n'){
//             alert('Soooo --- wrong.');
            
//             var totalPoints = document.getElementById('points').innerHTML;
//             totalPoints.innerHTML('points') = points;
//         } else {
//             alert("D'ya hate me?");
  
// }

var element= document.getElementById('showMePoints');
function showMePoints(){
    console.log(points);

    elementTxt4 = "You've earned: " + points + " Congratulations!";
    //element.innerHTML = elementTxt4;
    //document.getElementById('reply');
 }  

// function totalPoints(points){
//     return points;
//     alert("You've earned: " + points +"." +" Congratulations!")

// }
//};

newGame(question1,'y');
newGame(question2,'y');
newGame(question3,'y');
newGame(question4,'y');
newGame(question5,'y');
newGame(question6,'y');
showMePoints();
