var extend = function(to, from){
  for(var k in from){
    to[k] = from[k];
  }
};


var BinarySearchTree = function(value){
	var binarySearchTree = {};

	binarySearchTree.value = value;

	extend(binarySearchTree, binarySearchTreeMethods);

	return binarySearchTree;
};



 var binarySearchTreeMethods = {};


binarySearchTreeMethods.insert = function(value){
};

binarySearchTreeMethods.contains = function(){
};

binarySearchTreeMethods.depthFirstlog = function(){
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
