
document.addEventListener("scroll", function() {
    document.querySelectorAll(".fade-in").forEach(section => {
        let rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            section.classList.add("visible");
        }
    });
});

const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});