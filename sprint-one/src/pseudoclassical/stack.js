var Stack = function() {
  this._size = 0;
};

Stack.prototype.size = function(){
  return this._size;
};

Stack.prototype.push = function(value) {
  this[this._size] = value;
  this._size++;
}

Stack.prototype.pop = function(){
  if(this._size === 0) {
    return undefined;
  }
  var result = this[this._size-1];
  delete this[this._size-1];
  this._size--;
  return result;
}



