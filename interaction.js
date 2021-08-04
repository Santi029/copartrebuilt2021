// Get the modal
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var captionText = document.getElementById("caption");

var classname = document.getElementsByClassName("modal-link");

var onclick = () => {
  modal.style.display = "block";
}

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', onclick, false);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
