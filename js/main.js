import { Messages } from "./messages.js";
import { ramdomMessage } from "./utils.js";

const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');
const cookieImage = document.querySelector('.cookie-image');
const anotherCookieButton = document.querySelector('.another-cookie-button');
const luckyWordText = document.querySelector('.lucky-word-text');

cookieImage.addEventListener("click", switchScreens);
anotherCookieButton.addEventListener("click", switchScreens);


function switchScreens() {
    card1.classList.toggle('hide');
    card2.classList.toggle('hide');
    handleLuckyMessage();
}

function handleLuckyMessage() {
    luckyWordText.innerText = ramdomMessage(Messages);
}
