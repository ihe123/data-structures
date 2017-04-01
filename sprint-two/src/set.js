var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	// this[item] = item;
	this._storage[item] = item;
	console.log(this);
};

setPrototype.contains = function(item) {
	var result = false;
	var thing = this._storage;
	if (thing[item]){
		result = true;
	};
	return result;
}
// 	for (var i = 0; i<thing.length; i++){
// 		if (thing[i]===item){
// 			return true;
// 		}
// 	}
// 	return false;
// };

setPrototype.remove = function(item) {

	if (this._storage[item]){
		delete this._storage[item];
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
