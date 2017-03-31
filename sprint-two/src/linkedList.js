var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value); //new node is created with the value that is passed in
    if(list.tail !== null){ // if list.tail exists, enter the if block
      var currentTail = list.tail; //store that tail into currentTail
      currentTail.next = node; //
    }
    list.tail = node;
    if(list.head === null){
        list.head = node;
    }
    
  };

  list.removeHead = function() {
    var oldHead = list.head.value; 
    var newHead = list.head.next;
      list.head = newHead;
      return oldHead;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while(currentNode.next !== null){

      if (currentNode.value === target){
        return true;
      } else {
        currentNode = currentNode.next;
      }
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
