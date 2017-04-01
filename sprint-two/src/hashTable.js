

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log(this);
  
  this._storage.set(index, v);
   console.log(this);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
	console.log(k);
  var index = getIndexBelowMaxForKey(k, this._limit);
  console.log(index)
  console.log(this._storage);
  console.log(this)
  
  // var arrayOfKeys = Object.keys(this._storage)
 
  this._storage.each(function(val){
  	if (val[index] === k){
  		delete val[index];
  	}
  });
  // for (var i = 0; i<arrayOfKeys.length; i++){
  // 	if(this[arrayOfKeys[i]] === k){

  // 	 	delete this._storage[arrayOfKeys[i]];
  //   }
  // }
  // this._storage.splice(index, 1);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


