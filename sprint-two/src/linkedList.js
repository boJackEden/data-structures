var LinkedList = function(){
  var count = 0;
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    count++;
    list[count] = Node(value);
    list.tail = Node(value);
  };

  list.removeHead = function(){
    delete list.head;
    list.head = list.tail;
  };

  list.contains = function(target){
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
