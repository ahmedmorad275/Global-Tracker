console.log("start");
const menuShowBtn = document.getElementById("menuShowBtn");
const mobileMenuContainer = document.getElementById("menuOnMobile");
menuShowBtn.addEventListener("click", () => {
  mobileMenuContainer.classList.toggle("hidden");
});
const menuBtnArray = Array.from(mobileMenuContainer.children);
menuBtnArray.forEach((ele) => {
  ele.addEventListener("click", () => {
    menuBtnArray.forEach((btn) => {
      btn.classList.remove("active");
    });
    ele.classList.add("active");
  });
});
