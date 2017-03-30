var Stack = function() {
	var obj = Object.create(stackMethods);
	 obj.count = 0;
	 // obj.storage = {};
	return obj

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
	size : function (){
		return this.count;
	}, 
	push: function (info){
		this[this.count]=info
		this.count++;
	},
	pop: function (){
		if (this.count>0){
			var fun = this[this.count-1];
			delete fun;
			this.count--;
			

		}
		return fun;

	}
};
// var stackMethods = {


// }
