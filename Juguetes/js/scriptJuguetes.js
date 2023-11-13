const sleep = ms => new Promise(r => setTimeout(r, ms));
let displayBanner = true;
const banner = document.getElementById('banner');
const bannerTime = 2;

const bannerDisplay = async () => {
	let bannerP = banner.querySelectorAll('p');
	while (displayBanner) {
		for (let i = 0; i < bannerP.length; i++) {
			let lastP = (i - 1 >= 0) ? i - 1 : bannerP.length - 1;
			bannerP[lastP].style.opacity = 0;
			bannerP[i].style.opacity = 1;
			await sleep(bannerTime * 1000);
		}
	}
}
bannerDisplay();

let closeBanner = banner.querySelector('.icon-cross-line');
closeBanner.onclick = (event) => {
	banner.style.display = 'none';
	displayBanner = false;
}

$(document).ready(function () {
	$(".slider").bxSlider();
});