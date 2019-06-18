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


    if (input == false) {
        notification.innerHTML = "Empty input -> please provide a word or sentence";
    } else if(isPalindrome(input)) {
        notification.innerHTML = "Yay! It's a palindrome!:)";
        // document.getElementsByTagName("body").style.backgroundColor=green;
        document.body.style.backgroundColor = "#7CAA2D";
    } else {
        notification.innerHTML = "Nope, it's not a palindrome! :(";
        document.body.style.backgroundColor = "#D24136";
    }
  });
}); 





  