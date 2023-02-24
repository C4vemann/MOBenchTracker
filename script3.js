function MyDataMap(x){
	let map;
	constructor();

	function constructor(){
		map = new Map();
		map.set(x,init(x));
	}

	function init(x){
		let div = document.createElement("div");
		div.append(createText(x).getElement());
		return div;
	}

	function getMap(){
		return map;
	}

	return{
		getMap
	}
}

function MyDataArray(value){
	let arr;
	let top;
	let maxLength;
	let pointer;

	let button;
	let body;
	let element;
	constructor(value);

	function constructor(value){
		arr = []
		top = 0;
		pointer = 0;
		maxLength = 24;
		button = createButton(value);
		body = createBody();
		element = init(button,body);
	}

	function init(button,body){
		let wrapper = createBody();
		wrapper.getElement().append(button.getElement(),body.getElement());
		return wrapper;
	}

	function push(value){
		if(top == maxLength) return;
		arr[top] = value;
		top++;
		pointer++;
		body.getElement().append(createText(value).getElement());
	}


	function get(index){
		if(top == 0){
			console.log("nothing in array");
			return false;
		}
		let temp = arr[index];
		if(temp == null || temp == undefined){
			console.log("value not defined");
			return false;
		}
		return temp;
	}

	function pop(index){
		if(!get(index)){
			console.log("cannot find index");
			return;
		}
		let temp = arr[index];
		arr[index] = null;
		body.getElement().childNodes[index].remove();
		return temp;
	}

	function getElement(){
		return element.getElement();
	}
	return{
		push,
		get,
		pop,
		arr,
		top,
		pointer,
		maxLength,
		getElement
	}
}

function MyMainMap(){
	let map;
	let element;
	constructor();

	function constructor(){
		map = new Map();
		map.set("A", MyDataArray("A"));
		map.set("B", MyDataArray("B"));
		map.set("C", MyDataArray("C"));
		map.set("D", MyDataArray("D"));
		map.set("E", MyDataArray("E"));
		map.set("F", MyDataArray("F"));
		map.set("G", MyDataArray("G"));
		element = init();
	}

	function init(){
		let body = createBody();
		map.forEach((bench) => {
			body.getElement().append(bench.getElement());
		});
		return body;
	}

	function get(key){
		return map.get(key);
	}

	function getElement(){
		return element.getElement();
	}

	return{
		get,
		getElement,
		element
	}
}