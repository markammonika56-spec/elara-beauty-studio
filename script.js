
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

// Mobile menu open and close
if (menuToggle && navigation) {
  menuToggle.addEventListener("click", function () {
    const isOpen = navigation.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Close menu after clicking a navigation link
  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// Smooth scrolling for links to sections on this page
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (event) {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
