// Q1 (Updated): Find the First Non-Repeating Element in an Array 
// Input: [4, 5, 1, 2, 0, 4, 1, 0] 
// Output: 5 
//  Use an object to store frequency, then return the first element with frequency 1 

let arr = [4, 5, 1, 2, 0, 4, 1, 0];
let frequencyMap = {};
for (let num of arr) {
  frequencyMap[num] = (frequencyMap[num] || 0) + 1;
}
let firstNonRepeating = arr.find(num => frequencyMap[num] == 1);
console.log(firstNonRepeating)




  

//  Q3. Merge Two Arrays and Remove Duplicates 
// Input: [1, 2, 3], [2, 3, 4] 
// Output: [1, 2, 3, 4] 

//  Use Set or object keys for uniqueness 


let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
let mergedArr = [...new Set([...arr1,...arr2])];
console.log(mergedArr)


// Q4 (Updated): Convert an Array of Objects into a Single Object 
// let arr = [ 
// { id: 1, name: "A" }, 
// { id: 2, name: "B" } 
// ]; 
// Output: 
// { 
// 1: "A", 
// 2: "B" 
// } 
//  Use a loop or reduce() to convert array into object with id as key 

let arr = [ 
    { id: 1, name: "A" }, 
    { id: 2, name: "B" }
]
let obj = {};
for (let item of arr) {
    obj[item.id] = item.name;
}
console.log(obj)








// �
//  Q7. Convert Object to Array of Key-Value Pairs 
// let obj = { a: 1, b: 2 } 
// Output: [["a", 1], ["b", 2]] 
// �
// �
//  Use Object.entries() 

let obj = { a: 1, b: 2 }
console.log(Object.entries(obj))






//  Q10. Group Elements by Frequency 
// Input: [1, 1, 2, 3, 3, 3] 
// Output: 
// { 
// } 
// "1": 2, 
// "2": 1, 
// "3": 3 
//  Use object to group and count occurrences 


let arr = [1, 1, 2, 3, 3, 3];
let frequencyMap = {};
 for (let num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) +1 ;
     }
 console.log(frequencyMap)




//  Q8. Bitwise Operation: Count Number of 1s in Binary 
// Input: 9 
// Binary: 1001 
// Output: 2 
//  Use bitwise AND & and right shift >>

let num = 9;
let count = 0;
while (num > 0) {
    count += num & 1;
    num >>= 1;
}
console.log(count)




//  Q9. Binary Search in Sorted Array 
// Input: [1, 3, 5, 7, 9], Target = 5 
// Output: 2 (Index of 5) 

//  Implement binary search manually 
 
let arr = [1, 3, 5, 7, 9];
let target = 5;
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
 console.log(binarySearch(arr, target))


//  Q2. Check if Two Objects Have the Same Keys and Values 
// let obj1 = { a: 1, b: 2 }; 
// let obj2 = { b: 2, a: 1 }; 
// Output: true 
//  Order doesn’t matter. Compare keys and values. 


 let obj1 = { a: 1, b: 2 };
  let obj2 = { b: 2, a: 1 };
 let result = true;
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      if (obj1[key]!== obj2[key]) {
        result = false;
        break;
      }
    } else {
      result = false;
      break;
    }
  }
  console.log(result)







    




  









 
 
 