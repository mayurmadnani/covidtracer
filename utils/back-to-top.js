var backToTopButton = document.getElementById('backToTopButton');

backToTopButton.onclick = function () {
  scrollToTop()
}

window.onscroll = function () {
    showButtonToTop()
}

function showButtonToTop() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.classList.add("show")
      } else {
        backToTopButton.classList.remove("show")
      }
}

function scrollToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
}