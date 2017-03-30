var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
	 // obj.count = 0;
	 // obj.storage = {};
	return obj

};

var queueMethods = {
	'count' : 0, 
	'size' : function(){
		return this.count;
	},
	'enqueue': function(info){
		this[this.count] = info;
		this.count++;
		
	},
	'dequeue': function(){
	if (this.count > 0){
		var first = this[0];
		// var sec = this.storage[1];
		delete first;
		// this.storage[0] = sec;
		for (var i = 0; i<this.count; i++){
			this[i] = this [i+1];
		}
		// for (var key in this){
		// 	console.log(key);
		// 	this[key] = this[key+1];
		// }
		this.count--;
		return first;
	}
	
	}
		// if (this.count > 0){
		// var popped = this[this.count];
		// delete popped;
		// this.count--;
		// return this[this.count];
		// }
	}



