var guessingGame = true;
var points = 0;


 	//1
        
        var question1 = prompt("Q1:Are you a human(Y) or bot(N)?");
        question1 = question1.toLowerCase();
        if (question1 === 'yes' || question1 === 'y'){
            alert('Right ON!');
            points++;
        } 
        else if(question1 ==="no"|| question1==='n'){
            alert("Bot is not welcome here!");
        }

        else {
            alert('Invalid!');
        };
    //2
        var question2 = prompt("Q2:Are you a Vegan?(Y) or Carnivoir?(N)");
        question2 = question2.toLowerCase();
        if (question2 === 'yes' || question2 === 'y') {
            alert('Right on!');
            points++;
        }else if (question2 ==='no'|| question2 ==='n'){
            alert('I LUV meat!');
        }
        else {
            alert('Invalid!');
        };
    //3   
        var question3 = prompt("Q3:Do you support Public Transportation? (Y) or (N)");
        question3 = question3.toLowerCase();
        if (question3 === 'yes' || question3 === 'y') {
            alert('YES!');
            points++;
        } else if (question3 ==='no'|| question3 ==='n'){
            alert('Soooo --- wrong.');
        
        } else {
            alert('Then what?');
        };
    //4

        var question4 = prompt("Q4:Have you been in Seattle more than 5 years? (Y) or (N)");
        question4 = question4.toLowerCase();
        if (question4 === 'yes' || question3 === 'y') {
            alert('YES!');
            points++;
        } else if(question4 ==='no'|| question4 ==='n'){
            alert('Welcome to Seattle');
        } else {
            alert('???')
        };

        
    //5
        var question5 = prompt("Q5:Do you like Pasta(Y) or No(N)?");
        question5 = question5.toLowerCase();
        if (question3 === 'yes' || question3 === 'y') {
            alert('YES!');
            points++;
        } else if (question5 ==='no'|| question5 ==='n'){
            alert('Why NOT?');
        } else {
            alert('Not hungry?');

        };
    //6
        var question6 = prompt("Q6:Do you think I'm a dog-person?");
        question6 = question6.toLowerCase();
        if (question3 === 'yes' || question3 === 'y') {
            alert('YES!');
            points++;
            
            var totalPoints = document.getElementById('points');
            totalPoints.innerHTML('points') = points;

        } else if (question6 ==='no'|| question6 ==='n'){
            alert('Soooo --- wrong.');
            
            var totalPoints = document.getElementById('points');
            totalPoints.innerHTML('points') = points;
        } else {
            alert("D'ya hate me?");
}
function totalPoints(points){
    return points;
    alert("You've earned: " + points +" Congratulations!")

};
