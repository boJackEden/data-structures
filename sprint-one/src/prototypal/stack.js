var Stack = function() {
  var obj = Object.create(stackMethods);
  obj._size = 0;
  obj.storage = {};
  return obj;
};

var stackMethods = {
  push: function(value) {
    this.storage[this._size] = value;
    this._size++;
  },
  pop: function(){
    var result = this.storage[this._size-1];
    delete this.storage[this._size-1];
    if(this._size>0){
      this._size--;
    }
    return result;
  },
  size: function() {
    return this._size;
  }
};


