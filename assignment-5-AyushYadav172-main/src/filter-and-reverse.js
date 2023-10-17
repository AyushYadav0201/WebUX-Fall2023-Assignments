/**
 * This utility function filters a numeric array based on a given callback function
 * and returns a shallow copy of the reversed array with the filtered elements.
 *
 * @param {Array} arr - The input numeric array.
 * @param {Function} callback - The callback function for filtering.
 * @returns {Array} - The filtered and reversed array.
 */

// Define a callback function to check if a number is even
const isEven = (number) => number % 2 === 0;

// Define a callback function to check if a number is odd
const isOdd = (number) => number % 2 !== 0;

/**
 * Filters an array and reverses it.
 * 
 * @param {Array} arr - The array to be filtered and reversed.
 * @param {Function} callback - The callback function to determine inclusion.
 * @returns {Array} - The filtered and reversed array.
 */
function filterAndReverse(arr, callback) {
  // Filter the input array using the provided callback function
  const filteredArray = arr.filter(callback);
  
  // Create a shallow copy of the filtered array and reverse it
  const reversedArray = [...filteredArray].reverse();

  return reversedArray;
}

// Sample numeric array
const numericArray = [107, 211, 43, 74, 56, 69, 82, 183, 980];

// Filter by even numbers and reverse
const evenFilteredAndReversed = filterAndReverse(numericArray, isEven);
console.log("Filtered and Reversed (Even):", evenFilteredAndReversed);

// Filter by odd numbers and reverse
const oddFilteredAndReversed = filterAndReverse(numericArray, isOdd);
console.log("Filtered and Reversed (Odd):", oddFilteredAndReversed);
