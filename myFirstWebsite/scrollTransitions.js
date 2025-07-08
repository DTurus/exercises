window.onscroll = function () {
  scrollFunction();
};

const headerHeight = document.getElementById("header").offsetHeight;
let lastScrollPosition = 0;
const delta = 350;

function scrollFunction() {
  let actualScrollPosition = window.scrollY;

  if (
    actualScrollPosition - lastScrollPosition <= delta &&
    actualScrollPosition - lastScrollPosition >= 0
  ) {
    return;
  }

  if (
    actualScrollPosition > headerHeight &&
    actualScrollPosition >= lastScrollPosition
  ) {
    // document.getElementById("header").style.position = "relative";
    document.getElementById("header").classList.add("hide");
  }

  if (actualScrollPosition < lastScrollPosition) {
    // document.getElementById("header").style.position = "sticky";
    // document.getElementById("header").style.top = "0";

    document.getElementById("header").classList.remove("hide");
  }

  lastScrollPosition = actualScrollPosition;
}
