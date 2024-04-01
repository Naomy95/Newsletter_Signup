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

const SubDiv = document.querySelector(".sub-div");
const ChangedDiv = document.querySelector(".changed-div");



document.getElementById("myForm").addEventListener("click", function(e) {
    var emailInput = document.getElementById("email");
    if (!emailInput.checkValidity()) {
      alert("Please enter a valid email address.");
      e.preventDefault();
    }

    else{
        var text = document.getElementById('email').value;
        SubDiv.classList.add("hide");
        ChangedDiv.classList.remove("hide");
        document.getElementById('savedText').textContent = text;
    }


    console.log(text);
});

function dismiss(){
    document.getElementById("myForm").addEventListener("click", function(e) {
        SubDiv.classList.remove("hide");
        ChangedDiv.classList.add("hide");
        
    })
}