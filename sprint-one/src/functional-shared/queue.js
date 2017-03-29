var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = {'storage':  {},
	'count': 0 };
  _.extend(result, queueMethods);

  return result;
};

var queueMethods = {
	
	'size' : function(){
		return this.count;
	},
	'enqueue': function(info){
		this.storage[this['count']] = info;
		this.count++;
		
	},
	'dequeue': function(){
		if (this.count > 0){
		var first = this.storage[0];
		var sec = this.storage[1];
		delete first;
		this.storage[0] = sec;
		this.count--;
		
	}
	return first;
	}
}


