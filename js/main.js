window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function menuToggle() {
  const toggleMenu = document.querySelector('.toggleMenu')
  const navigation = document.querySelector('.navigation')
  toggleMenu.classList.toggle('active')
  navigation.classList.toggle('active')
}
