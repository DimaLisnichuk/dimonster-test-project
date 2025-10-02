const faqElements = document.querySelectorAll(".faq__element");

faqElements.forEach(el => {
  el.querySelector(".element__title").addEventListener("click", () => {
    faqElements.forEach(item => {
      if (item !== el) item.classList.remove("active"); 
    });
    el.classList.toggle("active"); 
  });
});