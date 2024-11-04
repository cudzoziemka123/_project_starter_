const imgs = document.querySelectorAll(".content");
const liEls = document.querySelectorAll("nav ul li");

liEls.forEach((El, idx) => {
  El.addEventListener("click", () => {
    hideAllContents();
    hideAllItems();
    El.classList.add("active");
    imgs[idx].classList.add("show");
  });
});

function hideAllContents() {
  imgs.forEach((img) => img.classList.remove("show"));
}

function hideAllItems() {
  liEls.forEach((el) => el.classList.remove("active"));
}
