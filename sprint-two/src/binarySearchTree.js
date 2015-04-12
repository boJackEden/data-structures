
var BinarySearchTree = function(value){
	var binarySearchTree = {};

	binarySearchTree.value = value;
	binarySearchTree.left = null;
	binarySearchTree.right = null;

	binarySearchTree.insert = function(value){
		if(value > this.value){
		//if value is larger than this.value then check property right.
			if(this.right === null){
				this.right = BinarySearchTree(value);
				return;
			}
				this.right.insert(value);
		} else {
		//if value is less than this.value then check property left.
			if(this.left === null){
				this.left = BinarySearchTree(value);
				return;
			}
			this.left.insert(value);
		}
	};

	binarySearchTree.contains = function(value){

		if(this.value === value) {
			return true;
		}
		if(this.value > value) {
			if(this.left === null){
				return false;
			}
			return this.left.contains(value);
		} else {
			if(this.right === null){
				return false;
			}
			return this.right.contains(value);
		}
		
	};
	
	binarySearchTree.depthFirstLog = function(func){
		func(this.value);

		if(this.left){
			this.left.depthFirstLog(func);
		}
		if(this.right){
			this.right.depthFirstLog(func);
		} 
	};
	return binarySearchTree;
};








/*
 * Complexity: What is the time complexity of the above functions?
 */
