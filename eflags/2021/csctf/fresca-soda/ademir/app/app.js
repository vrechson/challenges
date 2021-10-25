const puppeteer = require('puppeteer');

const openPage = async () => {

	const browser = await puppeteer.launch({
		args: ["--no-sandbox",
			"--disable-setuid-sandbox"]
	});
	const page =  await browser.newPage()

	// enable request interception
	await page.setRequestInterception(true);
	// add header for the navigation requests
	page.on('request', request => {
	// Do nothing in case of non-navigation requests.
	if (!request.isNavigationRequest()) {
		request.continue();
		return;
	}
	// Add a new header for navigation request.
	const headers = request.headers();
	headers['X-NOT-HEROES-ALLOWED'] = 's3cr3t_h3ad3r_t0_w1n';
	request.continue({ headers });
	});
	// navigate to the website
	await page.goto('http://haproxy:1080/');
	await page.waitFor(250);

	page.close()
	browser.close()

	setTimeout(openPage, 600)
};

openPage();