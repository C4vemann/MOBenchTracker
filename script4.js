function DoublyLinkedList(){
	let root;
	let pointer;
	let length;
	constructor();

	function Node(n){
		let next;
		let id;
		constructor(n);

		function constructor(n){
			next = null;
			id = n;
		}

		function getNext(){
			return next;
		}

		function setNext(node){
			next = node;
		}

		function getId(){
			return id;
		}

		function setId(n){
			id = n;
		}

		return{
			getNext,
			getId,
			setNext,
			setId
		}
	}

	function constructor(){
		root = null;
		pointer = null;
		length = 0;
	}

	//push a node at the end of the list with the value of id
	//returns false if there is no id present
	//returns true if node was successfully inserted
	function push(id){
		if(id === null | id === undefined) return false;
		if(root === null){
			root = Node(id);
			pointer = root;
		} else {
			pointer.setNext(Node(id));
			pointer = pointer.getNext();
		}
		length = length + 1;
		return true;
	}

	//pops a node based off its id
	//returns false if there is no id
	//returns false if there is nothing in the list 
	//returns true if the node was successfully removed
	function pop(id){
		if(id === null | id === undefined) return false;
		if(root === null) return false;
		if(length === 0) return false;

		pointer = root;

		if(pointer.getId() === id) root = pointer.getNext();
		pointer.getNext();

		if(pointer.getId() === id) pointer.setNext(pointer.getNext());

		while(true){
			if(!pointer.getName() == id) continue;
			else{
				console.log(pointer.getName());
				break;
			}

		}
	}

	//finds a node based on its id
	//returns false if there is no id
	//returns false if there is nothing in the list
	//returns false if it did not find the id
	//returns the index of the found id when successful
	function find(id){
		if(id === null | id === undefined) return false;
		if(root === null) return false;
		if(length === 0) return false;

		pointer = root;

		let i;
		for(i = 0; i < length; i++){
			if(pointer.getId() === id) break;
			pointer = pointer.getNext();
		}

		if(i === length) return false;
		return i;
	}



/*	function set(id,position){
		if(root === null) return;
		if(id === null | id === undefined) return;

		let temp = Node(id);
		pointer = root;

		for(let i = 0; i < position; i++){
			pointer = pointer.getNext();
		}
	}*/

	function getLength(){
		return length;
	}

	function getRoot(){
		return root;
	}

	function getPointer(){
		return pointer;
	}

	return{
		push,
		pop,
		find,
		getRoot,
		getPointer,
		getLength,
	}
}