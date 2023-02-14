function DoublyLinkedList(){
	let root = null;
	let pointer = null;

	function Node(n){
		let next;
		let name;
		constructor(n);

		function constructor(n){
			next = null;
			name = n;
		}

		function getNext(){
			return next;
		}

		function setNext(node){
			next = node;
		}

		function getName(){
			return name;
		}

		function setName(n){
			name = n;
		}

		return{
			getNext,
			getName,
			setNext,
			setName
		}
	}

	function push(name){
		if(root == null){
			root = Node(name);
			pointer = root;
		} else {
			pointer.setNext(Node(name));
			pointer = pointer.getNext();
		}
	}

	function pop(id){
		if(root == null) return;
		pointer = root;
		while(true){
			if(!pointer.getName() == id) continue;
			else{
				console.log(pointer.getName());
				break;
			}

		}
	}

	function getSize(){
		let counter = 0;
		if(root == null) return counter;
		pointer = root;
		while(true){
			counter++;
			if(pointer.getNext() == null) break;
			pointer = pointer.getNext();
		}
		return counter;
	}

	function getRoot(){
		return root;
	}

	function getPointer(){
		return pointer;
	}

	return{
		push,
		getRoot,
		getPointer,
		getSize,
		pop
	}
}