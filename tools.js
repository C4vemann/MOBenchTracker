function createText(x){
	let element = init(x);

	function init(x){
		let text = document.createElement("p");
		text.innerText = x;
		return text;
	}

	function getElement(){
		return element;
	}

	return{
		getElement
	}
}

function createButton(x){
	let element = init(x);

	function init(x){
		let button = document.createElement("button");
		button.innerText = x;
		return button;
	}

	function getElement(){
		return element;
	}

	return {
		getElement
	}
}

function createBody(){
	let element = init();

	function init(){
		let body = document.createElement("div");
		return body;
	}

	function getElement(){
		return element;
	}

	return{
		getElement
	}
}
