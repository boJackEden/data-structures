var extend = function(to, from){
  for(var k in from){
    to[k] = from[k];
  }
};

var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);
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
    currentNode = currentNode || this;

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
          return search(currentNode.children[i]);
        }
      }
    }
    return result;

  }
    return search(this);

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
