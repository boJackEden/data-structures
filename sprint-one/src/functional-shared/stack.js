var extend = function(obj){
  var args = Array.prototype.slice.call(arguments, 1);
  for(var i=0; i<args.length; i++){
    for(var key in args[i]){
      obj[key] = args[i][key];
    }
  }
  return obj;
}

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = {
    _storage: {},
    _size: 0
  };
  extend(obj, stackMethods);
  return obj;
};

var stackMethods = {

  push : function(value) {
    this._storage[this._size] = value;
    this._size++;
  },
  pop: function() {
    if(this._size === 0) {
      return undefined;
    }
    var result = this._storage[this._size-1];
    delete this._storage[this._size-1];
    this._size--;
    return result;
  },
  size : function(){
    return this._size;
  }
};



//first method: add to stack
//second method: remove from stack

//third method: track size of stack



