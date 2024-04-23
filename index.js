function isPalindrome(str) {
   // Remove non-alphanumeric characters and convert to lowercase
   str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

   // Check if the string is equal to its reverse
   for (let i = 0; i < Math.floor(str.length / 2); i++) {
      if (str[i] !== str[str.length - 1 - i]) {
         return false;
      }
   }
   return true;
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

function findMinMax(arr) {
   if (arr.length === 0) {
      return null;
   }

   let min = arr[0];
   let max = arr[0];

   for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
         min = arr[i];
      }
      if (arr[i] > max) {
         max = arr[i];
      }
   }

   return { min, max };
}

// Test cases
console.log(findMinMax([3, 5, 1, 8, 2])); // { min: 1, max: 8 }
console.log(findMinMax([-1, -5, -3])); // { min: -5, max: -1 }
console.log(findMinMax([])); // null

function findMissingNumber(arr) {
   for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] - arr[i] !== 1) {
         return arr[i] + 1;
      }
   }
   return null;
}

// Test cases
console.log(findMissingNumber([11, 12, 14, 15, 16, 18, 19, 20])); // 13
console.log(findMissingNumber([1, 2, 3, 5])); // 4
console.log(findMissingNumber([1, 2, 3, 4, 5])); // null (no missing number)
