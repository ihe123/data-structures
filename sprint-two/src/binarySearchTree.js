var BinarySearchTree = function(value) {
	var tree = binaryTree(value);

	tree.left = function(){
		return tree.l;

	};

	tree.right = function(){
		return tree.r;
	};

	tree.insert = function(value){
		var root =BinarySearchTree(value);
		var thing = Object.assign(root, thing)
		// console.log(root);
		// var obj = Object.assign(root,  );
		// console.log(root);
		// console.log(tree)
		// var t = tree.value;
		if (tree.value > value){
			
			if (tree.l === null && tree.r === null){

				thing.insert(value);
				console.log(thing);

				
			} else {
				root = Object.assign(root, tree.insert(value));
				// console.log(root);
				// compare = tree.l;
				tree.l = binaryTree(value);
				tree.l.insert(tree.l.value);
				
			}
		} else {
			if (this.l === null && this.r === null){
				this.r = binaryTree(value);
			} else {
				// tree = tree.r;
				// value = tree.r.value;
				this.r.insert(value);
			}
		}
		
	

	};

	tree.contains = function(){

	};

	tree.depthFirstLog = function(func){
		
		// Left, Root, Right
		//  if tree.l exists.. tree.l becomes the new tree
	
	
		//pass the tree into the function again (recursive part)

		//  else take root ;
		// 
		// after ^ check if tree.r exists and invoke above functions again			
	};
	return tree;

};

var binaryTree = function(value) {
  var node = {};

  node.value = value;
  node.l = null;
  node.r = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
