var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    
    if (count > 0){
    var first = someInstance[0];
    var sec = someInstance[1];
    delete first;
    someInstance[0] = sec;
    count--
  }
    return first;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
