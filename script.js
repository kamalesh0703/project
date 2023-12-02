function carttoggle() {
  var x = document.getElementById("mob-cart-box");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


const emptycart = document.getElementById('isCartEmpty');
const cartdetails = document.getElementById('card-details');
const mobile_emptycart = document.getElementById('mob-isCartEmpty');
const mobile_cartdetails = document.getElementById('mob-cart-details');
const addCart = () => {
  emptycart.style.display = "none";
  cartdetails.style.display = "block";

  mobile_cartdetails.style.display = "block";
  mobile_emptycart.style.display = "none";
}

const deletecart = () => {
  emptycart.style.display = "flex";
  cartdetails.style.display = "none";

  mobile_cartdetails.style.display = "none";
  mobile_emptycart.style.display = "flex";
}

let count = 1;
let cost = 125.00;
const quantity_count = document.querySelector('#quantity');
const quantity = document.querySelector('.quantity-count');
const mobilequantity = document.querySelector('.mob-quantity-count');
const total = document.querySelector('.total-amount');
const mobiletotal = document.querySelector('.mob-total-amount');
const quantitydecrease = () => {
  if (count > 1) {
    count--;
    quantity_count.innerHTML = count;
    quantity.innerHTML = count;
    mobilequantity.innerHTML = count;
    totalamount = (count * cost).toFixed(2);
    total.innerHTML = totalamount;
    mobiletotal.innerHTML = totalamount;
  }
}
const quantityincrease = () => {
  count++;
  quantity_count.innerHTML = count;
  quantity.innerHTML = count;
  mobilequantity.innerHTML = count;
  totalamount = (count * cost).toFixed(2);
  total.innerHTML = totalamount;
  mobiletotal.innerHTML = totalamount;
}

// Nav  menu toggle

const humbber = document.querySelector('.mob-menu-btn');
const openmenu = document.querySelector('.open-menu');
const closemenu = document.querySelector('.close-menu');
const navlist=document.querySelector('.mob-menu-list');
const overlay=document.querySelector('.nav-selectedoverlay');

humbber.addEventListener('click', () => {
  if(openmenu.className ==="open-menu"){
    openmenu.classList.remove('open-menu');
    openmenu.classList.add('close-menu');
    closemenu.classList.remove('close-menu');
    closemenu.classList.add('open-menu');
    navlist.style.left="0px";
    overlay.style.display="block";
  }
  else{
    openmenu.classList.remove('close-menu');
    openmenu.classList.add('open-menu');
    closemenu.classList.remove('open-menu');
    closemenu.classList.add('close-menu');
    navlist.style.left="-100%";
    overlay.style.display="none";
  }
})

const imgselect = document.querySelectorAll('#thumb-img');
let ImgID = 1;
imgselect.forEach((img) => {
  img.addEventListener('click', (e) => {
    e.preventDefault();
    ImgID = img.dataset.id;
    moveside()
  })
})

const moveside = () => {
  let width = (ImgID - 1) * 100;
  document.querySelectorAll('.light-box-main-image').forEach(n => n.style.transform = `translateX(${-width}%)`);

}

const closeOverlay = document.querySelector('.close-overlay');

closeOverlay.addEventListener('click', () => {
  document.querySelector('.overlay').style.display = "none";
})

const openoverlay=()=>{
  document.querySelector('.overlay').style.display = "flex";
}
const handleoverlay=document.querySelector('.main-image ');
handleoverlay.addEventListener('click', openoverlay);

// Arrow Next  Function

const nextarrow = () => {
  const value = document.querySelector('.light-box-main-image');
  let result = value.style.transform;
  if (result === "translateX(-100%)") {
    document.querySelectorAll('.light-box-main-image').forEach(n => n.style.transform = `translateX(-200%)`);

  }
  else if (result === "translateX(-200%)") {
    document.querySelectorAll('.light-box-main-image').forEach(n => n.style.transform = `translateX(-300%)`);

  }
  else if (result === "translateX(-300%)") {
    document.querySelectorAll('.light-box-main-image').forEach(n => n.style.transform = `translateX(0%)`);

  }
  else {
    document.querySelectorAll('.light-box-main-image').forEach(n => n.style.transform = `translateX(-100%)`);
  }
}
const next = document.querySelector('.light-next');

next.addEventListener('click', nextarrow);

// Arrow Perious Funtion

const backarrow = () => {

  const value = document.querySelector('.light-box-main-image');

  let result = value.style.transform;

  if (result === "translateX(-100%)") {
    document.querySelectorAll('.light-box-main-image').forEach(n => n.style.transform = `translateX(0%)`);

  }
  else if (result === "translateX(-200%)") {
    document.querySelectorAll('.light-box-main-image').forEach(n => n.style.transform = `translateX(-100%)`);

  }
  else if (result === "translateX(-300%)") {
    document.querySelectorAll('.light-box-main-image').forEach(n => n.style.transform = `translateX(-200%)`);

  }
  else {
    document.querySelectorAll('.light-box-main-image').forEach(n => n.style.transform = `translateX(-300%)`);
  }
}
const back = document.querySelector('.light-perious');

back.addEventListener('click', backarrow);


// Mobile Next Arrow Btn


const mobilenextarrow = () => {
  const value = document.querySelector('.light-box-main-image');
  let result = value.style.transform;
  if (result === "translateX(-100%)") {
    document.querySelectorAll('.light-box-main-image').forEach(n => n.style.transform = `translateX(-200%)`);

  }
  else if (result === "translateX(-200%)") {
    document.querySelectorAll('.light-box-main-image').forEach(n => n.style.transform = `translateX(-300%)`);

  }
  else if (result === "translateX(-300%)") {
    document.querySelectorAll('.light-box-main-image').forEach(n => n.style.transform = `translateX(0%)`);

  }
  else {
    document.querySelectorAll('.light-box-main-image').forEach(n => n.style.transform = `translateX(-100%)`);
  }
}
const mobnext = document.querySelector('.next');

mobnext.addEventListener('click', mobilenextarrow);


// Mobile Perious Arrow


const mobperious = () => {

  const value = document.querySelector('.light-box-main-image');

  let result = value.style.transform;

  if (result === "translateX(-100%)") {
    document.querySelectorAll('.light-box-main-image').forEach(n => n.style.transform = `translateX(0%)`);

  }
  else if (result === "translateX(-200%)") {
    document.querySelectorAll('.light-box-main-image').forEach(n => n.style.transform = `translateX(-100%)`);

  }
  else if (result === "translateX(-300%)") {
    document.querySelectorAll('.light-box-main-image').forEach(n => n.style.transform = `translateX(-200%)`);

  }
  else {
    document.querySelectorAll('.light-box-main-image').forEach(n => n.style.transform = `translateX(-300%)`);
  }
}
const mobback = document.querySelector('.perious');

mobback.addEventListener('click', mobperious);