var LinkedList = function(){

  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.tail === null){
      list.tail = newNode;
      list.head = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;

  };

  list.removeHead = function(){
    var currentHead = this.head;
    this.head = this.head.next;

    return currentHead.value;
  };

  list.contains = function(target){
    var search = function(nextNode){
      if(nextNode.value === target){
        return true;
      }
      if(nextNode.next === null){
        return false;
      }
      return search(nextNode.next);
    }
    return search(this.head);
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
