var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj._size = 0;

  return obj;
};

var queueMethods = {
  size: function() {
    return this._size;
  },
  enqueue: function(value) {
    this.storage[this._size] = value;
    this._size++;
  },
  dequeue: function() {
    if(this._size === 0) {
      return undefined;
    }
    var result = this.storage[0];
    this._size--;
    delete this.storage[0];
    this.storage[this._size-1] = this.storage[this._size];
    return result;
  }
};


