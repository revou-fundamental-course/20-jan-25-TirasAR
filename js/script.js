console.log("Hello World");
function calculateBMI() {
	let weight = document.getElementById("berat_badan").value;
	let height = document.getElementById("tinggi_badan").value;
	let age = document.getElementById("usia").value;
	// let gender = document.getElementById("pria").value;
	let bmi = weight / (height * height);

	console.log(weight);
	console.log(height);
	console.log(age);
	// console.log(gender);
	document.getElementById("bmi").value = bmi;

	if (weight != "" && height != "" && age != "") {
		alert("Please fill in all fields");
	} else {
		alert("Please enter a valid number");
	}
}
