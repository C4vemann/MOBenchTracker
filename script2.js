let body = document.getElementsByTagName("body")[0];

function MyMap(){
	let map = new Map();
	let element = init();
	constructor();

	function constructor(){
		map.set("A", new Set());
		map.set("B", new Set());
		map.set("C", new Set());
		map.set("D", new Set());
		map.set("E", new Set());
		map.set("F", new Set());
		map.set("G", new Set());
	}

	function createMap(x,y){
		function createElement(y){
			let el = document.createElement("div");
			el.innerText = y;
			return el;
		}
		map.get(x).add(new Map());
	}

	function init(){



	}

	return{
		createMap
	}
}

