// Questions 8: Check if a String is a Palindrome
function isPalindrome(str) {
    const cleaned = str.replace(/\s+/g, '').toLowerCase();
   
    return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindrome("MARKRAM"));