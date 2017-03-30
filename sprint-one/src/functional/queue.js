var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values

  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    
    if (count > 0){
      var first = someInstance[0];
      delete first;
      count--;
      for (var i = 0; i < count; i++){
        someInstance[i] = someInstance[i+1];
      }
  }
    return first;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
