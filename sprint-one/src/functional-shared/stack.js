var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = {};
  _.extend(result, stackMethods);

  return result;
};

var stackMethods = {
	'count': 0 , 
	'size' : function(){
		return this.count;
	},
	'push': function(info){
		this[this.count] = info;
		this.count++;
		
	},
	'pop': function(){
		if (this.count > 0){
		var popped = this[this.count];
		delete popped;
		this.count--;
		return this[this.count];
	}
	
	}
};

