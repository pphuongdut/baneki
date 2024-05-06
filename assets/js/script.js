var modal = document.getElementById("modal");
var modalBox = document.getElementById("modal-box");
const blockId = [1, 2, 3];
const btnPrefixId = "btn-";
const slidePrefixId = "slide-";
const activeButtonClassName = "btn-active";

removeButtonActiveStatus = () => {
  blockId.forEach((id) => {
    const btn = document.getElementById(btnPrefixId + id);
    btn.classList.remove(activeButtonClassName);
  });
};

activeButton = (id) => {
  document
    .getElementById(btnPrefixId + id)
    .classList.add(activeButtonClassName);
};

// For handle open model on button clicked
blockId.forEach((id) => {
  const btn = document.getElementById(btnPrefixId + id);
  btn.addEventListener("click", () => {
    removeButtonActiveStatus();
    activeButton(id);
    modal.style.display = "block";
    modalBox.innerHTML = document.getElementById(slidePrefixId + id).innerHTML;
  });
});

// For handle close on click outside model
document.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    removeButtonActiveStatus();
  }
});

var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}
