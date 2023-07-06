// filter 2.0
function filterSelection(className) {
    var buttons = document.getElementsByClassName("btn");
  
    // Remove the "active" class from all buttons
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }
  
    // Add the "active" class to the selected button
    event.currentTarget.classList.add("active");
  
    var elements = document.getElementsByClassName("filterDiv");
  
    // Show all elements
    if (className === "all") {
      className = "";
      for (var j = 0; j < elements.length; j++) {
        elements[j].style.display = "block";
      }
    } else {
      // Hide all elements
      for (var k = 0; k < elements.length; k++) {
        elements[k].style.display = "none";
      }
  
      // Show elements with the specified class
      var filteredImages = document.querySelectorAll("." + className + " > img");
      for (var l = 0; l < filteredImages.length; l++) {
        filteredImages[l].parentNode.style.display = "block";
      }
    }
  }
  