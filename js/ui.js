import { arr } from "./db.js";

let place = document.querySelector(".slots");

function reloadItems(arr) {
	place.innerHTML = '';
	for (let item of arr) {
		let slot = document.createElement("div");
		let photo = document.createElement("div");
		let img = document.createElement("img");
		let descr = document.createElement("div");
		let slotName = document.createElement("h3");
		let p = document.createElement("p");
		let icons = document.createElement("div");
		let price = document.createElement("div");
		let priceImg = document.createElement("img");
		let star = document.createElement("div");
		let starImg = document.createElement("img");
		let pack = document.createElement("div");
		let packImg = document.createElement("img");
		let button = document.createElement("button");

		
		slot.classList.add("slot");
		photo.classList.add("photo");
		descr.classList.add("descr");
		slotName.classList.add("slot-name");
		p.classList.add("descr-p");
		icons.classList.add("icons");
		button.classList.add("to-star");

		
		place.append(slot);
		slot.append(photo);
		photo.append(img);
		img.src = item.image;
		slot.append(descr);
		descr.append(slotName, p, icons, button);
		slotName.innerHTML = item.category;
		p.innerHTML = item.description;
		icons.append(price, star, pack);
		price.append(priceImg, item.price);
		priceImg.src = "./img/dollar.svg";
		star.append(starImg, item.rating.rate);
		starImg.src = "./img/star.svg";
		pack.append(packImg, item.rating.count);
		packImg.src = "./img/box.svg";
		button.innerHTML = "В избранное";


		button.onclick = () => {
			card.push(item); 
			reloadCardItems(); 
		};
	}
}

let card = [];

function reloadCardItems() {
	let modalContent = document.querySelector("#modalContent"); 

	modalContent.innerHTML = ''; 

	for (let item of card) {
		let modal__box = document.createElement("div");
		let elem = document.createElement("div");
		let elem__box = document.createElement("div");
		let img = document.createElement("img");
		let div1 = document.createElement("div");
		let p = document.createElement("p");
		let p1 = document.createElement("p");
		let elem__box_2 = document.createElement('div');
		let button = document.createElement("button");
		let span = document.createElement("span");
		let button2 = document.createElement("button");
		let div3 = document.createElement('div')
		let h1 = document.createElement('h1')
		let span2 = document.createElement('span')
		
		div3.classList.add('wrap')
		h1.classList.add('h1')
		modal__box.classList.add('modal__box');
		elem.classList.add('elem');
		elem__box.classList.add('elem__box');
		button.classList.add("btn")
		button2.classList.add('btn')

		div3.append(h1)
		h1.append(span2)
		h1.innerHTML = 'В корзине:  товар'
		span2.innerHTML = '0'
		modal__box.append(elem);
		elem.append(elem__box, elem__box_2);
		elem__box.append(img, div1);
		img.src = item.image
		div1.append(p, p1);
		p.innerHTML = item.category;
		p1.innerHTML = item.price + '$'; 
		elem__box_2.append(button, span, button2);
		button.innerHTML = '+';
		span.innerHTML = '1'; 
		button2.innerHTML = '-';

		modalContent.append(modal__box); 
	}
}

let open = document.querySelector("#openModalBtn");
let modal = document.querySelector("#modalBackground");
let closed = document.querySelector('#closeModalBtn');

closed.onclick = () => {
	modal.classList.remove("active");
};

open.onclick = () => {
	modal.classList.add('active');
};

let showFive = document.querySelector("#show_five");
let showAll = document.querySelector("#show_all");

showFive.onclick = () => {
	reloadItems(arr.slice(0, 4));
};

showAll.onclick = () => {
	reloadItems(arr);
};

reloadItems(arr);
