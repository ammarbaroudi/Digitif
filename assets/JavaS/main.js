let button = document.querySelector(".custom_menu-btn button");
let s1 = document.querySelector(".custom_menu-btn button .s-1");
let s2 = document.querySelector(".custom_menu-btn button .s-2");
let s3 = document.querySelector(".custom_menu-btn button .s-3");
let navarray = document.querySelectorAll(".navbar-collapse li a");

let navlinks = document.querySelector(".navbar-collapse");


button.addEventListener("click", () => {

      s1.classList.toggle('rotate');
      s2.classList.toggle('hidden');
      s3.classList.toggle('rotate');

      navlinks.classList.toggle('show')
});

navarray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    navarray.forEach((e) => e.classList.remove("active"));
    e.currentTarget.classList.add("active");
  
  });
});

