
function more_Text() {
    var dots = document.getElementById("more-dots");
    var moreText = document.getElementById("more");
    
    if (dots.style.display === "none") {
        dots.style.display = "inline"; 
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
      }
  }