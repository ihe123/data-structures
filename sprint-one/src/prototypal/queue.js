var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
	 obj.count = 0;
	 obj.storage = {};
	return obj

};

var queueMethods = {
	'size' : function(){
		return this.count;
	},
	'enqueue': function(info){
		this.storage[this.count] = info;
		this.count++;
		
	},
	'dequeue': function(){
	if (this.count > 0){
		var first = this.storage[0];
		// var sec = this.storage[1];
		delete first;
		// this.storage[0] = sec;

		for (var key in this.storage){
			this.storage[key] = this.storage[key+1];
		}
		this.count--;
	}
	return first;
	}
		// if (this.count > 0){
		// var popped = this[this.count];
		// delete popped;
		// this.count--;
		// return this[this.count];
		// }
	}



