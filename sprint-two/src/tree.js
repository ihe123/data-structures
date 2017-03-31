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
	this.children.push(Tree(value));
	console.log(this);

	// if addChild invoked, assign newTree.children = result of addChild()

};

treeMethods.contains = function(target, tree) {
		tree = tree || this;
		var thing = [];
		// debugger;
		if (tree.value === target){
		 thing.push(true);
		}
		
		for (var i = 0; i<tree.children.length; i++){
		 thing = thing.concat(tree.contains(target, tree.children[i]));
		}
		
		if (thing.indexOf(true)>-1){
			console.log(thing)
		return true;

		} else {
			return false;
		}
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

