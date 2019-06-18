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

  
document.addEventListener("DOMContentLoaded", function(){  // this event listener makes sure the code inside will run only after the DOM content (html structure) is loaded 

    let checkButton = document.getElementById("checkPalindrome");    

    checkButton.addEventListener("click", function() {
    
        let input = document.getElementById("inputPalindrome").value;
        let notification = document.getElementById("notification");

        // this two lines resets font & background color to default
        document.body.style.backgroundColor = "#34888C";  
        notification.style.color = "black";

        if (input == false) {
            notification.innerHTML = "Empty input -> please provide a word or sentence";
            notification.style.color = "#EA1515";
        } else if(isPalindrome(input)) {
            notification.innerHTML = "Yay! It's a palindrome!:)";
            document.body.style.backgroundColor = "#7CAA2D";
        } else {
            notification.innerHTML = "Nope, it's not a palindrome! :(";
            document.body.style.backgroundColor = "#D24136";
        }
  });
}); 





  