var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  if (this._storage.get(i) === undefined) {
    var bucket = [];
    bucket.push(tuple);
    this._storage.set(i, bucket);
  } else {
    var bucket = this._storage.get(i);
  }
  
  for (var j = 0; j<bucket.length; j++) {
    if(bucket[j][0] === k) {
      bucket[j][1] = v;
    } else {
      bucket.push(tuple);
    }
  };
  // console.log(bucket, i);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket 

  if (this._storage.get(i) === undefined) {
    return null;
  } else {
    bucket = this._storage.get(i);
  }

  for (var j=0; j<bucket.length; j++){
    if(bucket[j][0] === k){
      return bucket[j][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  // console.log(bucket, i);
  for(var j=0; j<bucket.length; j++){
    if(bucket[j][0] === k){
      bucket[j] = null;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
