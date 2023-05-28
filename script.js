const tombolbtn = document.querySelector(".tombol_btn");
const tombolbtnIcon = document.querySelector(".tombol_btn i");
const ddwm = document.querySelector(".ddwm");
// tombolbtn.onclick = function () {
//   ddwm.classList.toggle("open");
//   const isOpen = ddwm.classList.contains("open");

//   tombolbtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
// };

tombolbtn.addEventListener("click", function () {
  ddwm.classList.toggle("open");
  const isOpen = ddwm.classList.contains("open");

  tombolbtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

// const aktif = document.querySelector(".navigation li:nth-child(2) a");
// const klik2 = document.querySelector(".navigation li a");

// // function klik() {

// // }

// aktif.onclick = function () {
//   klik2.classList.toggle("aktif");
// };
