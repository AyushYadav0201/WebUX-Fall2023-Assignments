/**
 * This function analyzes a given text and returns a word count object.
 *
 * @param {String} text - The input text to be analyzed.
 * @returns {Object} - An object containing words as keys and their respective counts.
 */

const text = "The moonlight bathed the room in an ethereal glow. He couldn't help but admire her beauty in the soft, gentle light. They exchanged a few words, words that meant more than they could express."

export const analyzeText = (text) => {
    const wordsArray = text.split(/\s+/);  // Split the text into an array of words using space as a delimiter
    const wordFrequency = {};

    wordsArray.forEach((word) => {
        const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');  // Convert the word to lowercase and remove any non-alphanumeric characters
        if (cleanedWord !== '') {
            const count = wordFrequency[cleanedWord] || 0;  // Initialize the count to 0 if the word doesn't exist in the wordFrequency object
            wordFrequency[cleanedWord] = count + 1;   // Increment the count for the word
        }
    });

    return wordFrequency;
}

console.log("Word Count :", (analyzeText(text)));
