var extend = function(to, from){
  for(var k in from){
    to[k] = from[k];
  }
};

var Tree = function(value){
  var newTree = {};
  extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newNode = Tree(value);
  this.children.push(newNode);
};

treeMethods.contains = function(target){
  var result = false;


  var search = function(currentNode) {

    if(currentNode.value === target) {
      result = true;
      return result;
    }
    for (var i = 0; i<currentNode.children.length; i++) {
      if(currentNode.children[i].value === target) {
        result = true;
        return result;
      } else {
        if(currentNode.children[i].children.length > 0){
          search(currentNode.children[i]);
        }
      }
    }
  }
    search(this);
    return result;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
