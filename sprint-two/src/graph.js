

// Instantiate a new graph
var Graph = function(value) {
	// var node = this;
	this.nodeList = [];
	this.edgeList = [];
	// this.value = value;

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	// creates new Node with value passed
	 // var newNode = new Node(node);
	 this.nodeList.push(node);

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	for (var i = 0; i<this.nodeList.length; i++){
	 if (this.nodeList[i] === node){
		 return true;
	 }
	 
	}
	return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	var thing = this.edgeList;
	for (var i = 0; i< this.nodeList.length; i++){
	  if (this.nodeList[i] === node){	
	    this.nodeList.splice(i,1);
	}
	}
	// search edgelist with for loop, apply indexOf and check if it doesnt equal -1; 
		// if found, splice out tuple;
	for (var i = 0; i < thing.length; i++){
		if (thing[i] !== -1){
			thing.splice(i,1)
		}
	}	
	// console.log(this.edgeList)
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	// iterate thru edgelist and match up tuple [value , value] to fromNode nad toNode value
	var result = false;

	 this.edgeList.forEach(function(source){
	 	// console.log("here")
		 source.forEach(function(){
			if (source[0] === fromNode  && source[1] === toNode){
				result = true;
			}
			if (source[0] === toNode  && source[1] === fromNode){
				result = true;
			}
		})
	})
	return result;
	
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.edgeList.push([fromNode, toNode]);
	// console.log(this.edgeList);
		// this.edgelist push [fromNode, toNode]
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	// console.log(this.edgeList); 
	var thing = this.edgeList;
	this.edgeList.forEach(function(source, index){
		var index = index
		source.forEach(function(value, index){

			if (source[0] === fromNode  && source[1] === toNode){
				console.log("here");
				console.log(this.edgeList)
				thing.splice(index, 1);
			}
		})
	})
	// iterate thru nodeList and match values to fromNode and toNode
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	var thing = this.nodeList;
	 thing.forEach(function(info){
		cb(info)
	})
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 // var Node = function(value) {
 //  var node = {};

 //  node.value = value;
 //  node.next = null;

//   return node;
// };


