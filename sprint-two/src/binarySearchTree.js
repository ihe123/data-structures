var BinarySearchTree = function(value) {
	var tree = Object.create(treePrototype);
	tree.value = value;
	tree.left = null;
	tree.right = null;
	return tree;
}

var treePrototype= {};

treePrototype.insert = function(value){
	if (value < this.value){
		if (this.left === null){
			this.left = BinarySearchTree(value);
		} else {
			this.left.insert(value);	
		}
	} else if (value > this.value) {
		if (this.right === null){
			this.right = BinarySearchTree(value)
		} else {
			this.right.insert(value);
		}
	}
};

	treePrototype.contains = function(value){
		if (value === this.value){
			return true;
		} else if(value < this.value){
			return !!(this.left && this.left.contains(value));
		} else if(value > this.value){
			return !!(this.right && this.right.contains(value));
		}

	};

	treePrototype.depthFirstLog = function(func){
		func(this.value);
			if (this.left){
				this.left.depthFirstLog(func);
			}
			if (this.right){
				this.right.depthFirstLog(func);
			}
		}
	
		// Left, Root, Right
		//  if tree.l exists.. tree.l becomes the new tree
	
	
		//pass the tree into the function again (recursive part)

		//  else take root ;
		// 
		// after ^ check if tree.r exists and invoke above functions again			

// var binaryTree = function(value) {
//   var node = {};

//   node.value = value;
//   node.l = null;
//   node.r = null;
//   return node;
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */
