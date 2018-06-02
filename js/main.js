function check(){
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var correct = 0;

		if (question1 == "3") {
			correct++;
		}
		if (question2 == "6") {
			correct++;
		}
		if (question3 == "Buster Sword") {
			correct++;
		}
		if (question4 == "Scotch") {
			correct++;
		}
		if (question5 == "Wolf") {
			correct++;
		}
		if (question6 == "Trunks") {
			correct++;
		}
		if (question7 == "30") {
			correct++;
		}

		var messages = ["You Passed!!", "You Failed..."];
		var pictures = ["img/chuckpass.jpg", "img/chuckfail.jpg"];

		var range;
			if (correct < 4) {
				range = 1;
			}
			if (correct > 3) {
				range = 0;
			}

		// console.log(correct);


	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[range];
}