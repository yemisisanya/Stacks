class Stack { // implementing a stack using javaScript arrays
    constructor () {
        this.data = []; // Creates and initializes an empty array within the class
    }

    Push(record) {
        this.data.push(record); // The push method inserts a record into the array
        }
    
     Pop() {
       return this.data.pop(); // The Pop method removes the last inserted item from the array
    }

    Peek () {
        return this.data[this.data.length-1]; // The Peek method returns the next item to be removed from the array
    }

    isEmpty (){
        return this.data.length===0 ? true : false; // The isEmpty method checks the length of an array and returns a true or false value
    }

    getMin () {
        return  Math.min.apply(null, this.data); // The getMin method returns the minimum value in the array
     }
}

const stackObject = new Stack(); // creates a new stack object

stackObject.Push(4);
stackObject.Push(7);
stackObject.Push(6);
stackObject.Push(1);

stackObject.Pop(); // remove the last item inserted
stackObject.isEmpty(); // returns true or false
stackObject.getMin(); // returns the minimum value in stackObject


console.log(stackObject.isEmpty()); 
console.log(stackObject.getMin()); 

