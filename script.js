var cart_icon=document.querySelector(".cart-icon");
var card_box=document.querySelector(".cardbox");

cart_icon.addEventListener('click',()=>{
   card_box.classList.toggle('hover-card');
})

let menu_btn=document.querySelector('.mob-menu-btn');
let open_btn=document.querySelector('.open-menu');
let close_btn=document.querySelector('.close-menu');
let menu=document.querySelector('.mob-menu-list');

menu_btn.addEventListener('click',()=>{
   menu.classList.toggle('mob-menu-close');
   // if(close_btn.className === "close_btn"){
   //    console.log("helodfd");
   // }else{
   //    console.log("hjfdf");
   // }
   close_btn.classList.toggle('open');
   open_btn.classList.toggle('close');
})