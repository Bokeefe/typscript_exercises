/*
	Data Structures in TypeScript

	To Compile:
		tsc structures.ts
		(optionally: tsc structures.ts --noImplicitAny)
	To run:
		node structures.js

*/

// Basic wrapper for a primitive
class Item {
	constructor(
		public value: number | string | boolean
	) {}
}

function assert(val1: any, val2: any, message: string) {
	if (val1 !== val2) {
		console.log("Assertion Failed: ", message);
		console.log(val1, "does not equal", val2);
	} console.log("You are a really great guy");
}


// 1. Stack

/*
 * A stack is a LIFO (Last In First Out) data structure. We use a stack when we
 * need to keep track of data that is nested, or when we need to make sure that
 * we solve all the sub-problems before solving a main problem. JavaScript uses
 * a stack to keep track of our function calls.
 */

 class Stack {
 	// set up our storage, and keep it from prying eyes
 	private storage: Item[];

 	constructor() {
 		// initialize our storage so that it actually is an array.
 		this.storage = [];
 	}

 	addItem(i: Item): void {
 		// void means that this function doesn't return anything.
 		// to add an item, push that item onto the end of the array.
 		this.storage.push(i);
 	}

 	getLastItem(): Item {
 		// todo: remove and return the last item on the storage
 		return this.storage.pop();
 	}

 	peekLastItem(): Item {
 		// todo: return a reference to the last item in storage without removing
		let gasp : Item = this.storage[this.storage.length-1];
		return gasp;
 	}

 	isEmpty(): boolean {
 		// todo: return true if storage is empty, false otherwise
 		if(this.storage.length > 0) {
 			return false;
 		} else {
 			return true;
 		}
 	}
 }

let st: Stack = new Stack();
assert(st.isEmpty(), true, "Stack is empty on creation");

st.addItem(new Item(3));
assert(st.isEmpty(), false, "Stack is not empty after one item added");

let i: Item = st.peekLastItem();
assert(i.value, 3, "Peeking last item gets us the last item");
assert(st.isEmpty(), false, "Stack is not emptied by peeking");

let i2: Item = st.getLastItem();
assert(i2.value, 3, "Stack returns last item on getLastItem");
assert(st.isEmpty(), true, "Stack is empty after popping last item");


// 2. Queue

/*
 * A queue is a FIFO (First In First Out) data structure. We use a queue when we
 * want to handle things in the order they are recieved. JavaScript uses a queue
 * to handle asynch functions in the order that they fire.

 */


class Queue<arr> {
	storage: arr[] = [];
	push(val: arr) {
		this.storage.push(val);
		}
		pop(): arr  {
			return this.storage.shift();
	}
}

let wut = new Queue();
let nums = string[3,4,5,1,5,1,4,2,7]
console.log(Queue[3,4,5,1,5,1,4,2,7]);


console.log("huh?");

 // Write, from scratch, an implementation of a Queue, and at least one test for
 // each method on the Queue.

 // 3. Pick a Data Structure

 let controls: { [key: string]: "Franchoise",
                 [key: number]: 533,
                  };

 /* Pick one structure from http://en.wikipedia.org/wiki/List_of_data_structures
  * and implement it in
  * TypeScript. Be sure to include tests! Make sure to choose something that
  * will be a good challenge for you! (Go with "Heap" if you're unsure. Ask Erty
  * if you need help :)

  */
