window.addEventListener("scroll", () => {
  document.querySelectorAll(".section").forEach(section => {
    const pos = section.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});
