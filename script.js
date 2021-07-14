const reg = document.querySelector('.reg');
const popup__login = document.querySelector('.popup__login');
const popup__login__cont = document.querySelector('.popup__login__container')
reg.addEventListener("click", function (e) {
	popup__login.classList.add('active');
	popup__login__cont.classList.add('active');
})
const calendar__cont = document.querySelector('.calendar__cont');
const calendar = document.querySelector('.calendar');
const calendar__ = document.querySelector('.calendar__');
calendar__cont.addEventListener("click", function (e) {
	calendar.classList.toggle('active');
	calendar__.classList.toggle('active');
})
const cost = document.querySelector('.cost');
const cost_wrapper = document.querySelector('.cost_wrapper');
const cost_img = document.querySelector('.cost_img')
cost_wrapper.addEventListener("click", function(e){
	cost.classList.toggle('active');
	cost_img.classList.toggle('active');
})
const dop__filtres = document.querySelector('.dop__filtres');
const popup__dop__filtres = document.querySelector('.popup__dop__filtres');
const popup__dop__filtres__container = document.querySelector('.popup__dop__filtres__container');
dop__filtres.addEventListener("click", function(e){
	popup__dop__filtres.classList.add('active');
	popup__dop__filtres__container.classList.add('active');
})
const close = document.querySelector('.close');
close.addEventListener("click", function(e){

	popup__login.classList.remove('active');
	popup__login__cont.classList.remove('active');
})
const close2 = document.querySelector('.close2');
close2.addEventListener("click", function(e){
	popup__dop__filtres.classList.remove('active');
	popup__dop__filtres__container.classList.remove('active');
})
const mob = document.querySelector('.mobile__filtres');
const filtres = document.querySelector('.mobile__filtres__container');
mob.addEventListener("click", function (e) {
	mob.classList.toggle('active');
	filtres.classList.toggle('active');
})
const krest = document.querySelector('.krest');
krest.addEventListener("click", function(e) {
	mob.classList.remove('active');
	filtres.classList.remove('active');
})