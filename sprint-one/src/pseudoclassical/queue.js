var Queue = function() {
    
}
    Queue.prototype.count = 0;
    Queue.prototype.enqueue = function (val){
        this[this.count] = val; 
        this.count++;
    }
    Queue.prototype.dequeue = function (){
        if (this.count>0)
        {
        var popped = this[0];
        delete popped;
        for (var i = 0; i<this.count; i++ ){
            this[i] = this[i+1];
        }
        this.count--;
        return popped;
        }
    }
    Queue.prototype.size = function (){
        return this.count;
    }
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.



