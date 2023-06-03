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

function main() {
  let t = true;
  while (t) {
    let p = prompt("pilih : gajah, semut, orang");
    let c = Math.floor(Math.random() * 10 + 1);
    if (c < 3) {
      c = "orang";
    } else if (c >= 3 && c < 5) {
      c = "gajah";
    } else {
      c = "semut";
    }

    let hasil = "";

    if (p === c) {
      hasil = "SERI";
    } else if (p === "gajah") {
      hasil = c == "orang" ? "MENANG" : "KALAH";
    } else if (p === "semut") {
      hasil = c == "gajah" ? "MENANG" : "KALAH";
    } else if (p === "orang") {
      hasil = c == "semut" ? "MENANG" : "KALAH";
    } else {
      hasil = "salah memasukan nilai ";
    }

    alert("Kamu memilih: " + p + "\nlawan memilih: " + c + "\nmaka Kamu: " + hasil);

    t = confirm("lagi tah ?");
  }
  alert("makasih");
}

// const aktif = document.querySelector(".navigation li:nth-child(2) a");
// const klik2 = document.querySelector(".navigation li a");

// // function klik() {

// // }

// aktif.onclick = function () {
//   klik2.classList.toggle("aktif");
// };
