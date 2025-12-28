document.querySelectorAll(".link-transition").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const dest = link.getAttribute("href");
    document.getElementById("transition").classList.add("active");
    setTimeout(() => window.location.href = dest, 1200);
  });
});
