var cart_icon = document.querySelector(".cart-icon");
var card_box = document.querySelector(".cardbox");

cart_icon.addEventListener('click', () => {
   card_box.classList.toggle('hover-card');
});

let menu_btn = document.querySelector('.mob-menu-btn');
let open_btn = document.querySelector('.open-menu');
let close_btn = document.querySelector('.close-menu');
let menu = document.querySelector('.mob-menu-list');

menu_btn.addEventListener('click', () => {
   menu.classList.toggle('mob-menu-close');
   close_btn.classList.toggle('open');
   open_btn.classList.toggle('close');
});


var counter = 1;
const quantity = document.getElementById("quantity-count");
let  setcount = document.getElementById('quan-count');
let totalamount=document.getElementById('tot-amount');
let cost=125.00;

const quantitydecrease = () => {
   if (quantity.innerText == 1) {
      quantity.innerText = counter;
   }
   else {
      counter--;
      quantity.innerText = counter;
      setcount.innerHTML = counter;
     var  total=counter*cost;
      totalamount.innerText=total.toFixed(2);

   }
}

const quantityincrease = () => {
   counter++;
   quantity.innerText = counter;
   setcount.innerHTML = counter;
  var total=counter*cost;
   totalamount.innerText=total.toFixed(2);
}
