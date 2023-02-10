let map = new Map();
map.set("A", new Set([1234,35454,9890]));
map.set("B", new Set([1234]));
map.set("C", new Set([134,4545,6839]));
map.set("D", new Set([12, 58, 20009]));
map.set("E", new Set([099,343,100,53585,102938]));
map.set("F", new Set([1]));
map.set("G", new Set());

let map1 = new Map();
map1.set("A", new Set([]));
map1.set("B", new Set([]));
map1.set("C", new Set([]));
map1.set("D", new Set([]));
map1.set("E", new Set([]));
map1.set("F", new Set([]));
map1.set("G", new Set([]));

function createElement(){
	let button = createButton();
	let body = createBody();
	let el = init();

	function init(button,body){
		let wrapper = document.createElement("div");
		wrapper.append(button.el,body.el);
		return wrapper;
	}
	
	function getEl(){
		return el;
	}

	return{
		el
	}
}

function createButton(){
	let el = init();

	function init(){
		let button = document.createElement("button");
		button.innerText = "";
		return button;
	}

	function getEl(){
		return el;
	}

	return {
		getEl
	}
}

function createBody(){
	let el = init();

	function init(){
		let body = document.createElement("div");
		return body;
	}

	function getEl(){
		return el;
	}
	
	return{
		getEl
	}
}