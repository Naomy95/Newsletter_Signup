// function event(e) {
//     var emailInput = document.getElementById("email");
//     if (!emailInput.checkValidity()) {
//       alert("Please enter a valid email address.");
//       e.preventDefault();
//     }
// }

// function r(){
//     console.log("clicked")
// }
// function getError(){
//   const onclick=  document.getElementById("myForm")
//   onclick.addEventListener("submit", r)
//     }

document.getElementById("myForm").addEventListener("click", function(e) {
    var emailInput = document.getElementById("email");
    if (!emailInput.checkValidity()) {
      alert("Please enter a valid email address.");
      e.preventDefault();
    }


    console.log("Event listener attached after initial click.");
});
