/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g,'');//to lower the case and use regix
  /*
  
/.../
Anything inside the slashes is a regular expression.
[^...]
[] → defines a character set (a group of characters you want to match).
^ at the start of the set means NOT.
So [^...] means "match anything not inside this set."
a-z -> Lowercase letters from a to z.
0-9 -> Digits from 0 to 9.

So together [a-z0-9]
Means "any lowercase letter OR digit."
Adding ^ → [^a-z0-9]

Means "any character that is NOT a lowercase letter or digit."
(i.e., spaces, punctuation, symbols, etc.)
g flag
Stands for global, meaning "replace all occurrences," not just the first one.
*/
  let i = 0,j = str.length-1;
  while(i<j){
    if(str[i] == str[j]){
      i++;
      j--;
    }
    //Below method is too boaring.......
    // else if(str[i]==' ' ||  str[i] == '?' || str[i] == '!' || str[i] ==  ',')i++;
    // else if(str[j] == ' ' ||  str[j] == '?' || str[j] == '!' || str[j] ==  ',')j--;
    else{
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
