document.addEventListener("DOMContentLoaded", function() {
  const toggleButtons = document.querySelectorAll(".doc-title");

  toggleButtons.forEach(button => {
    button.addEventListener("click", function() {
      toggleButtons.forEach(btn =>{
        btn.closest("a").classList.remove("active");
    });
    const row = this.closest("a");
    row.classList.add("active");
    });
  });
});
//scroll heading đến 1 vị trí cụ thể thì <a> nổi bật
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".document-section"); //class heading khi scroll
  const navLinks = document.querySelectorAll(".doc-title"); //class <a href="">

  function setActiveLink() {
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 500 && rect.bottom >= 100) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        navLinks[index].classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", setActiveLink);
});

  
  
