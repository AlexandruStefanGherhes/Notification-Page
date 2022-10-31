const section = document.querySelectorAll(".section__post");
const notification = document.querySelector(".notifications__read");
const alertNumber = document.querySelector(".title__number");

section.forEach(
  (item) => {
    item.addEventListener("click", () => {
      if (!item.classList.contains("active")) {
        changeNum();
      }
      item.classList.add("active");
      item.classList.toggle("open");
    });
  },
  { once: true }
);

// for (item of section) {
//   const tab = item;
//   item.addEventListener("click", () => {
//     tab.classList.add("active");
//     tab.classList.toggle("open");
//     changeNum();
//   });
// }

notification.addEventListener("click", () => {
  section.forEach((item) => {
    item.classList.add("active");
    alertNumber.textContent = "0";
  });
});

function changeNum() {
  if (alertNumber.textContent > 0) {
    alertNumber.textContent--;
  } else {
    alertNumber.textContent = 0;
  }
}
