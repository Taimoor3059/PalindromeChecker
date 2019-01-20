function palindrome(str) {
    let hello = /[\W_]/g;
    let newArr = str.toLowerCase().replace(hello, '');
    
  
    let newWord = newArr.split('').reverse().join('');
  
    if (newArr == newWord) {
      return true;
    } else {
      return false;
    }
  
  
  
  }
  
  
  
  console.log(palindrome("RaceCAr"));