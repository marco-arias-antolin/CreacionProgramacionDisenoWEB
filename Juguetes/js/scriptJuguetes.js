const sleep = ms => new Promise(r => setTimeout(r, ms));

const bannerDisplay = async () => {
	let bannerP = document.getElementById('banner').querySelectorAll('p')
	let displayBanner = true;
	for (let i = 0; i < bannerP.length; i++) {
		let lastP = (i - 1 > 0) ? i - 1 : bannerP.length - 1;
		bannerP[lastP].style.opacity = 0;
		bannerP[i].style.opacity = 1;
		await sleep(2 * 1000);
	}
}
bannerDisplay();