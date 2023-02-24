let body = document.getElementsByTagName("body")[0];
let map = new Map();
map.set("A", createElement("A"));
map.set("B", createElement("B"));
map.set("C", createElement("C"));
map.set("D", createElement("D"));
map.set("E", createElement("E"));
map.set("F", createElement("F"));
map.set("G", createElement("G"));

map.forEach((bench) => {
	body.append(bench.getElement());
});

function createElement(x){
	let list = new Set();
	let button = createButton(x);
	let body = createBody();
	let element = init(button,body);

	function init(button,body){
		let wrapper = document.createElement("div");
		wrapper.append(button.getElement(),body.getElement());
		return wrapper;
	}
	
	function add(x){
		if(list.has(x)){return;}
		list.add(x);
		body.getElement().append(createText(x).getElement());
	}

	function remove(x){
		if(list.has(x)){
			list.delete(x);
		}
	}

	function getElement(){
		return element;
	}

	function getButton(){
		return button;
	}

	function getBody(){
		return body;
	}

	function getSet(){
		return list;
	}

	return{
		getElement,
		getButton,
		getBody,
		getSet,
		add,
		remove
	}
}



