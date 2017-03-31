var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value); //new node is created with the value that is passed in
    if(list.tail !== null){ // if list.tail exists, enter the if block
      var currentTail = list.tail; //store that tail into currentTail
      currentTail.next = node; //the node that the currentTail is pointing to is now the new node
    }
    list.tail = node; //assign the current tail to the new node
    if(list.head === null){ // if list is empty
        list.head = node; //assign the list.head to the new node
    }
    
  };

  list.removeHead = function() {
    var oldHead = list.head.value; //the value of list.head is stored in variable called oldHead
    var newHead = list.head.next; //the node following the list.head is assigned to variable called newHead
      list.head = newHead; //assign list.head to the newHead
      return oldHead; //return the oldHead
  };

  list.contains = function(target) {
    var currentNode = list.head; //set current head to variable currentnode

    while(currentNode.next !== null){ //if the 

      if (currentNode.value === target){
        return true;
      } else {
        currentNode = currentNode.next;
      }

    }
     if (currentNode.value === target){
        return true;
      } 
    
    return false;
  };
  console.log(list)
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
