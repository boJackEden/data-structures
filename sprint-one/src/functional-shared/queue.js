var extend = function(to, from) {
  for (var k in from) {
    to[k] = from[k];
  };
}

var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    _size: 0,
    storage: {}
  };

  extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this._size] = value;
    this._size++;
  },

  dequeue: function() {
    var result = this.storage[0];
    if (this._size === 0) {
      return undefined;
    }
    delete this.storage[0];
    this._size--;
    this.storage[this._size-1] = this.storage[this._size];
    return result;
  },

  size : function() {
    return this._size;
  }

};



