// Creating a "dictionary" using an object
let myDictionary = {};

// Adding key-value pairs
myDictionary["key1"] = "value1";
myDictionary["key2"] = "value2";
myDictionary["key3"] = "value3";

// Accessing values using keys
console.log(myDictionary["key2"]); // Output: value2

// Checking if a key exists in the dictionary
console.log("key4" in myDictionary); // Output: false

// Iterating through key-value pairs
for (let key in myDictionary) {
    console.log(key + ": " + myDictionary[key]);
}
