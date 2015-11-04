
//Default shall be considered negation!

/// #1
var guessing = prompt("Are you a human(Y) or bot(N)?");
guessing = guessing.toUpperCase();

if (guessing === 'Y'|| guessing === 'y'|| guessing === 'Yes') {
				
	alert("YES!!! Hello Human!");
	console.log("YES!!! Hello Human");
} else {
	alert('NAW! Bot is not welcome here!');
	console.log('NAW! Go away!');

}

/// #2	
var vegan = prompt("Are you a vegan?(Y) or Carnival?(N)");
vegan = vegan.toUpperCase();

if (vegan === 'Y'|| vegan === 'y'|| vegan === 'Yes') {

	alert("Yah, How boring!");
	console.log("Yah, I know!");
}

else {
	alert("Nah, What's your drug of choice?");
	console.log("Do you dream of Bacon?");
}

/// # 3	
var car = prompt("Do you support Public Transportation? (Y) or (N)");
car = car.toUpperCase();

if (car === 'Y'|| car === 'y'|| car === "Yes") {

	alert('Yes, Welcome to Seattle!');
 	console.log("Sort-a.");

}
else {
 	alert('NAW. Go back to LA!');
 	console.log ('Better Metro PLZ!');

}

/// #4
var seattleLiving = prompt(' How many years have you been in Seattle?')
seattleLiving = parseInt(seattleLiving);
 
if (seattleLiving <parseInt(2)) {

	alert('OK!');
	console.log("You've got lots to learn, then");
}

else if(seattleLiving <=parseInt(10)){


	alert("How're you doing?");
	console.log("Are you enjoying Seattle to the fullest? I mean FULLEST");
}
else {

	alert("Don't ya think u've lived in Seatle enough?");
	console.log("Let's move to MARS!, Yes to MARS!");
} 

/// #5
var Pasta = prompt("Do you like Pasta(Y) or No(N)?");
Pasta = Pasta.toUpperCase();

if (Pasta === "Y" || Pasta === "y"|| Pasta ==="Yes"){

	alert("YUM!");
	console.log("Arrabbiata!");
}
else {
	alert("What's for dinner, then?");
	console.log("HungWeeeeey!");
}

/// #6

var number = 9;
var guess = Number(prompt("Wanna guess my fav number?"));

	if (number === guess) {

		alert("OMG!");
		console.log("Your guess is sooooooo R.I.G.H.T!");
}
	else {

		alert("Guess again :)");
		console.log("This is your last chance!");
}
	
	