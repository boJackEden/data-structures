var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k,v];

  if (this._storage.get(i) === undefined) {
    var bucket = [];
    this._storage.set(i,bucket);
  }

  for (var j = 0; j<bucket.length; j++) {
    if(bucket[j][0] === k) {
      bucket[j][1] = v;
    } else {
      bucket.push(tuple);
    }
  };
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

};

HashTable.prototype.remove = function(k){

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
