// tab function
document.addEventListener("DOMContentLoaded", function () {
  // Set the first tab as active and show its content on page load
  const defaultTab = document.getElementById("tab1");
  defaultTab.style.display = "block";
  const defaultButton = document.querySelector(".tab-button");
  defaultButton.classList.add("active");
});

function openTab(evt, tabName) {
  var i, tabContent, tabButtons;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
