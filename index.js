let ramka = document.querySelectorAll(".cart__one");
let palka = document.querySelectorAll(".cart__line");
let krug = document.querySelectorAll(".cart__one--circle");

let sales = document.querySelectorAll(".sales");
let footer = document.querySelectorAll(".cart__footer");
let salesActive = document.querySelectorAll(".cart__footer--active");

let oneP = document.querySelectorAll(".p1");
let twoP = document.querySelectorAll(".p2");
let thrP = document.querySelectorAll(".p3");

for (let i = 0; i < ramka.length; i++) {
  ramka[i].addEventListener("click", () => {
    ramka[i].classList.toggle("selected--border");
    palka[i].classList.toggle("selected--line");
    krug[i].classList.toggle("selected--circle");
    footer[i].classList.toggle("visible");
    salesActive[i].classList.toggle("visible");
  });
}

for (let i = 0; i < sales.length; i++) {
  sales[i].addEventListener("click", () => {
    ramka[i].classList.toggle("selected--border");
    palka[i].classList.toggle("selected--line");
    krug[i].classList.toggle("selected--circle");
    footer[i].classList.toggle("visible");
    salesActive[i].classList.toggle("visible");
  });
}

let images = document.querySelectorAll(".img");
let fDis = document.querySelectorAll(".cart__footer--disable");
for (let i = 0; i < ramka.length; i++) {
  ramka[i].addEventListener("wheel", () => {
    ramka[i].classList.toggle("disabled--border");
    palka[i].classList.toggle("disabled--line");
    krug[i].classList.toggle("disabled--circkle");
    footer[i].classList.toggle("visible");
    oneP[i].classList.toggle("color--disabled");
    twoP[i].classList.toggle("color--disabled");
    thrP[i].classList.toggle("color--disabled");
    images[i].classList.toggle("foto--disabled");
    fDis[i].classList.toggle("visible");
    if (fDis[i].classList.contains("visible")) {
      footer[i].classList.remove("visible");
      console.log("есть");
    } else {
      footer[i].classList.add("visible");
      salesActive[i].classList.add("visible");
    }
  });
}
