// Build a function called keysMatch() which will be given two objects and an array of strings.

// It will use the strings to look up the key-value pair in each object and compare the values. 
// If all the values are explicitly equal to each other, return true, otherwise return false.

// We can start with the following function definition:



// obj1[key] =? value or nothing
//obj2[key]

const obj1 = {a: 1, b:2, c:3, d: 4};
const obj2 = {a: 1, b:3, c:3, d: 4};

// const keys = ['a', 'c'] => true
// const keys = ['a', 'b'] => false

const keysMatch = function(obj1, obj2, keys) {
  // loop through to check if keys are in object
  // if match return true
  // else no match return false
  for ( let i = 0 ; i < keys.length; i ++){
    let key = keys[i]; //a
    if ( obj1[key] !== obj2[key]){
        return false;
    }
  }
  return true;

};