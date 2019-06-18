function isPalindrome(str) {

    let regex = /[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g;
    let correctedStr = str.replace(regex, "").toLowerCase();
    let palindrome = true;
  
    for (let i = 0; i < correctedStr.length; i++) {
  
      if(correctedStr.charAt(i) !== correctedStr.charAt(correctedStr.length - 1 - i)) {
        palindrome = false;
        break;
      }
    }
  
    return palindrome;
  }

  
document.addEventListener("DOMContentLoaded", function(){ 

    let checkButton = document.getElementById("checkPalindrome");    

    checkButton.addEventListener("click", function() {
    
    let input = document.getElementById("inputPalindrome").value;
    let notification = document.getElementById("notification");
    
    if(isPalindrome(input)) {
        notification.innerHTML = "True, this is a palindrome";
    } else {
        notification.innerHTML = "False, this isn't a palindrome";
    }
  });
}); 





  