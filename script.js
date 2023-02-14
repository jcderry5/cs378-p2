function increment(inputId, price) {
	document.getElementById(inputId).stepUp();
	var currSubtotal = document.getElementById("subtotal").innerHTML;
	currSubtotal = parseInt(currSubtotal) + parseInt(price)
	document.getElementById("subtotal").innerHTML = currSubtotal
}
function decrement(inputId, price) {
	var currInputValue = document.getElementById(inputId).value
	if (currInputValue > 0) {
		document.getElementById(inputId).stepDown();
		var currSubtotal = document.getElementById("subtotal").innerHTML;
		currSubtotal = parseInt(currSubtotal) - parseInt(price)
		document.getElementById("subtotal").innerHTML = currSubtotal
	}
}

function clearValues() {
	document.getElementById("subtotal").innerHTML = 0
	document.getElementById('macInput').value = 0
	document.getElementById('pastaInput').value = 0
	document.getElementById('tacoInput').value = 0
	document.getElementById('enchiladaInput').value = 0
}

function order() {
	popup();
	var items = document.querySelectorAll("input")
	console.log(items)
	var output = "<p>"
	for (let i = 0; i < items.length; i++){
		var val = parseInt(items[i].value)
		if (val > 0) {
			output +=  val + " " + items[i].name + "<br>"
		}
	}
	if (output == "<p>") {
		output += "No items in cart."
	}
	output += "</p>"
	document.getElementById("items-ordered").innerHTML = output
}

function popup() {
	document.getElementById("popup").style.display = "initial"
}

function dismissPopUp() {
	document.getElementById("popup").style.display = "none"
}