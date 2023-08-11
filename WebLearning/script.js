document.addEventListener("DOMContentLoaded", function() {
  const toggleButtons = document.querySelectorAll(".doc-title");
  // const activeItem = document.querySelectorAll('.doc-title');


  toggleButtons.forEach(button => {
    button.addEventListener("click", function() {
      toggleButtons.forEach(btn =>{
        btn.closest("a").classList.remove("active");

    });
    const row = this.closest("a");
    row.classList.add("active");

    });
    // button.addEventListener("click",function() {
    //   let el = document.getElementById(button.getAttribute("data-link"));
    //   el.scrollIntoView({behavior:"smooth", block:"start"});
    // })
  });


});
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".document-section");
  const navLinks = document.querySelectorAll(".doc-title");

  function setActiveLink() {
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        navLinks[index].classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
});


  
  
