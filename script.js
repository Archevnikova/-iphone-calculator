let currentValue = "";
let operation = "";

function addListenersToDigits() {

	for(let i = 1; i < 10; i++) {
		const selector = `${i}`;

		const button = document.getElementById(selector);

		button.addEventListener("click", function() {
			const cvInput = document.querySelector("#result");
			const valInput = cvInput.value;
			const result = `${valInput}${i}`;
			cvInput.value = result;
		});
	}
}

addListenersToDigits();


const acElement = document.getElementById("ac");

acElement.addEventListener("click", function() {
	const cvInput = document.querySelector("#result");
	cvInput.value = "";
})