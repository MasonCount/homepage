function printTime(){
	var date = new Date();
	var hour = date.getHours();

	if (hour >= 5 && hour <= 11){
		document.write("Good morning!");
	}

	else if (hour >= 12 && hour <= 16){
		document.write("Good afternoon!");
	}

	else if (hour >= 17 && hour <= 20){
		document.write("Good evening!");
	}

	else{
		document.write("Good night!");
	}
}
