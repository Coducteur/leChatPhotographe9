// display menu burger:

const burgerBtn = document.querySelector('#burger-Btn')
const burgerNAVMobile = document.querySelector('.burgerNAV-mobile')

burgerBtn.addEventListener("click", function(){
    burgerNAVMobile.classList.toggle('invisible')
});