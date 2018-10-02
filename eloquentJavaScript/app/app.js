/**
 * Defining a function (Eloquent JavaScript 3rd Edition)
 */

// Funciton definition: a regular binding where the value of the binding is a function.
// x is the parameter
 const square = function(x){
    return x * x;
};
//console.log(square(12)); 
// No parameters
const makeNoise = function(){
    //console.log("Pling!");
};
makeNoise();
// Multiple parameters
const power = function(base, exponent){
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result *= base;
    };
    return result;
};
//console.log(power(2,10));

// Function Declaration: Function Declarations are hoisted so they are always available lexicaly the use can come before the function.
function square2(x){
    return x * x;
}
//console.log(square2(5));

//console.log("The future says: ", future());
function future(){
    return "You'll never have flying cars";
}

// Arrow Functions: In this notation the keyword "function" is replaced by the arrow oporator =>
// with parameters
const power2 = (base, exponent) => {
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result *= base;
    };
    return result;
};
//console.log(power2(2,15));
// Without parameters
const horn = () => {
    //console.log("Honk");
}
horn();
/**
 * The Call Stack: The stack that holds the function calls. Last in First out
 */
function greet(who){
    //console.log("hello "+ who);
};
greet("Harry");
//console.log("Bye");
/**
 * Recursion: A function can call itself
 */
function power3(base, exponent){
    if(exponent === 0){
        return 1;
    }else{
        return base * power3(base, exponent -1);
    };
};
//console.log("HERE!!!");
//console.log(power(2, 4));
/**
 * Start at 1 and repeatedly either add 5 or multiply by 3 to reach a user given number.
 */
function findSolution(target) {
    function find(current, history) {
      if (current == target) {
        return history;
      } else if (current > target) {
        return null;
      } else {
        return find(current + 5, `(${history} + 5)`) ||
               find(current * 3, `(${history} * 3)`);
      }
    }
    return find(1, "1");
  }
//console.log(findSolution(24));
/**
 * Sample program for practicing functions:
 *      1. Print the number of chickens and cows followed by the word chicken or cow
 *      2. Zeros will pad the begining of the numbers so the number is always 3 digits long
 * 
 *      This function can be broken down in to reusable parts:
 * 
 *      function printFarmInventory(chickens, cows){
            let cowString = String(cows);
            while(cowString.length < 3){
                cowString = "0" + cowString;
            }
            //console.log(`${cowString} Cows`);
            let chickenString = String(chickens);
            while(chickenString.length < 3){
                chickenString = "0" + chickenString;
            }
            //console.log(`${chickenString} Chickens`);
            }
        printFarmInventory(7,11); 
 */
function zeroPad(number, width){
    let string = String(number);
    while (string.length < width){
        string = "0" + string;
    }
    return string;
}
function printFarmInventory(cows, chickens, pigs){
    ////console.log(`${zeroPad(cows,3)} Cows`);
    ////console.log(`${zeroPad(chickens,3)} Chickens`);
    //console.log(`${zeroPad(pigs,3)} Pigs`);
}
printFarmInventory(7,16,3);

/**
 * CHAPTER CLOSING EXERCISES
 */
//1. Write a function min that takes two arguments and returns their minimum.
function min(x,y){
    return x > y ? y : x;
}
//console.log(min(0, -10));
/*2. Recursion: Define a recursive function isEven corresponding to this description. The function should accept a single          parameter (a positive, whole number) and return a Boolean.
        Zero is even.
        One is odd.
        For any other number N, its evenness is the same as N - 2.
*/
function isEven(x){
    if(x > 1){
        return isEven(x-2);
    }else if(x >= 0){
        return x === 0 ? true:false
    }
    else{
        return;
    }
}
//console.log(isEven(4));
//console.log(isEven(7));
//console.log(isEven(-1));
/**
 * 3. More practice
 * Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase     “B” characters there are in the string.
 */
function countBs(userString){
    var count = 0;
    for(var i = 0; i < userString.length; i++){
        if(userString[i] === "B"){
            count++;
        }
    };
    return count;
}
function countChar(userString,userChar){
    var count = 0;
    for(var i = 0; i < userString.length; i++){
        if(userString[i] === userChar){
            count++;
        }
    };
    return count;
}
//console.log(countBs("BBC"));
//console.log(countChar("kakkerlak", "k"));

/**
 * CHAPTER 4
 *  DATA STRUCTURES: OBJECTS AND ARRAYS
 */

// The push and pop array methods array.push() and array.pop() 
// array.push(x) places x at the end of the array
// array.pop(x) removes the last item of the array 
let sequence = [1,2,3];
sequence.push(4);
sequence.push(5);
//console.log(sequence);
//console.log(sequence.pop());
//console.log(sequence);

//Jacques journal
let journal = [];
function addEntry(events, squirel){
    journal.push({events, squirel});
}
addEntry(["work", "touched tree", "pizza", "running","television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna","touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts","beer"], true);
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
      Math.sqrt((table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2]));
  };
function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
      let entry = journal[i], index = 0;
      if (entry.events.includes(event)) index += 1;
      if (entry.squirrel) index += 2;
      table[index] += 1;
    }
    return table;
};
//console.log(tableFor("pizza", journal));
// → brushed teeth: -0.3805211953
// → work:          -0.1371988681
// → reading:        0.1106828054
function journalEvents(journal){
    let events = [];
      for (let entry of journal){
          for (let event of entry.events){
              if(!events.includes(event)){
                  events.push(event);
              }
          }
      }
    return events;
}
//console.log(journalEvents(journal));

// Useful array methods
let todoList = [];
function remember(task){
    // push() adds to the end of the array
    todoList.push(task);
}
function getTask(){
    // shift() removes to the begining of the array
    return todoList.shift();
}
function rememberUrgently(task){
    // unshift() adds to the front of the array from the begining of the array
    todoList.unshift(task);
}
/**
 * CHAPTER 4 CLOSING EXERCISES
 */
/**
 *      1.Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from
 *      startup to (and including) end.
 */
function range(start, end, step){
    var range = [];
    var checkDirection = start <= end ? true:false;
    if(checkDirection && step === undefined){
        for(var i = start; i <= end; i++){
            range.push(i);
        }
    }else if(!checkDirection && step === undefined){
        for(var i = start; i >= end; i--){
            range.push(i);
        }
    }else if(checkDirection && step !== undefined){
        range.push(start);
        var count = 0;
        while(range[count] <=  end - step){
            range.push(range[count]+step);
            count++;
        }
    }else if(!checkDirection && step !== undefined){
        range.push(start);
        var count = 0;
        while(range[count] >=  end){
            range.push(range[count] + step);
            count++;
        }
    }
    return range;
}
/* console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
console.log(range(5,2)); */
function sum(range){
    var total = 0;
    for(var i = 0; i < range.length; i++){
        total += range[i];
    }
    return total;
}
//console.log(sum(range(1,10,2)));
 /**
 *      2. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array 
 *      as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace,
 *      does whatthereverse method does: it modifies the array given as argument by reversing its elements. Neither may use the
 *      standard reverse method.
 */
function reverseArray(arr){
    var newArray = [];
    arr.forEach(function(element){
       newArray.unshift(element);
    });
    return newArray;
}
function reverseArrayInPlace(arrayValue){
    var temp =[];
   for(var i = 0; i<arrayValue.length;i++){
        temp.unshift(arrayValue[i]);
    };
    arrayValue = temp;
    return arrayValue;
}
//console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
//console.log(reverseArrayInPlace(arrayValue));

/* 
3. Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth. */
/* function arrayToList(arr){
    for(var i = 0; i < arr.length; i++){
        
    }
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20 */

/**
 * Chapter 5: Higher-Order Functions
 */
