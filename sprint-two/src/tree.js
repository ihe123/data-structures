var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value) {
	var thing = Tree(value);
	this.children[this.children.length] = thing;

	// if addChild invoked, assign newTree.children = result of addChild()

};

treeMethods.contains = function(target) {
	
		if (this.value === target){
			return true;
		} else {
			for (var i = 0; i<this.children.length; i++){
				this.contains(this.children[i]);
			}
		}
	
	
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

