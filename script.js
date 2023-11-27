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

humbber.addEventListener('click', () => {
  openmenu.classList.toggle('close-menu');
  openmenu.classList.toggle('open-menu');
  closemenu.classList.toggle('open-menu');
  closemenu.classList.toggle('close-menu');
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
  // const MainImgWidth = document.querySelector('.main-image:first-child').clientWidth;
  let width = (ImgID-1) *100;
  document.querySelectorAll('.light-box-main-image').forEach(n=>n.style.transform = `translateX(${-width}%)`);
  console.log(width)

}