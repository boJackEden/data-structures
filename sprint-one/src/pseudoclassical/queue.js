var Queue = function() {
  this._size = 0;
};

Queue.prototype.size = function() {
  return this._size;
};
Queue.prototype.enqueue = function(value){
  this[this._size] = value;
  this._size++;
};
Queue.prototype.dequeue = function(){
  var result = this[0];
  delete this[0];
  if(this._size > 0){
     this._size--;
  }
  this[this._size-1] = this[this._size];
  return result;
}


