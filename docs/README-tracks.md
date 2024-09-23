# Fake Scraper script:

https://soundcloud.com/theriversings/tracks

Why? - website loads async data - cumbersome to scrape programatically - modals take time to open and show data

    Usage:
    - navigate to address
    - scroll to bottom so everything is loaded
    - paste the following in browser console
    - look at the embeddedCode var for all the iframes

```js
function findElement(element, text) {
	// if it exists immediatly give it to us
	if (element?.text?.includes(text)) {
		return element;
	}

	for (child of element.children) {
		const foundEl = findElement(child, text);
		if (foundEl) {
			return foundEl;
		}
	}
	// if not found, return null
	return null;
}

// SCRIPT START
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const embeddedCode = [];
const arrayOfShareButtons = document.querySelectorAll('.sc-button-share');

const processButton = async (button) => {
	button.click(); // opens modal
	await delay(1000); // Wait for the modal to open and the tabs to be available
	const embedTab = findElement(document.body, 'Embed');
	// const tabs = document.querySelectorAll('li.g-tabs-item > a.tabs__tab.g-tabs-link');

	if (embedTab) {
		embedTab.click(); // clicks on embed
		await delay(1000);

		document.querySelectorAll('.embedPanel__tab > a')[0].click(); // clicks the preferred embed option
		await delay(1000);

		const embedInput = document.querySelector(
			'input.widgetCustomization__textInput.widgetCustomization__widgetCode'
		);

		if (embedInput) {
			embeddedCode.push(embedInput.value);
		}

		const closeButton = document.querySelector('button.modal__closeButton');

		if (closeButton) {
			closeButton.click();
			await delay(1000);
		}
	} else {
		const closeButton = document.querySelector('button.modal__closeButton');

		if (closeButton) {
			closeButton.click();
			await delay(1000);
		}
	}
};

const processAllButtons = async () => {
	console.log('Begin processing');
	for (const button of arrayOfShareButtons) {
		await processButton(button);
	}
	console.log('Completed processing all buttons');
	console.log('Embedded Codes:', embeddedCode);
};

processAllButtons();
// SCRIPT END

console.log('Embedded Codes:', embeddedCode);

[
	'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1527343840&color=%23181413&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/theriversings" title="THE RIVER" target="_blank" style="color: #cccccc; text-decoration: none;">THE RIVER</a> · <a href="https://soundcloud.com/theriversings/body-language-release-date-tbd" title="Body Language release date 10/27/23" target="_blank" style="color: #cccccc; text-decoration: none;">Body Language release date 10/27/23</a></div>',
	'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1527347008&color=%23181413&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/theriversings" title="THE RIVER" target="_blank" style="color: #cccccc; text-decoration: none;">THE RIVER</a> · <a href="https://soundcloud.com/theriversings/now-better-release-date-tbd-1" title="Now Better - release date 9/28/23" target="_blank" style="color: #cccccc; text-decoration: none;">Now Better - release date 9/28/23</a></div>',
	'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1546443070&color=%23181413&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/theriversings" title="THE RIVER" target="_blank" style="color: #cccccc; text-decoration: none;">THE RIVER</a> · <a href="https://soundcloud.com/theriversings/greenery-4" title="Vaguely Relatable EP - Blow me (feat. Groovy J) Release Date 07/21/23" target="_blank" style="color: #cccccc; text-decoration: none;">Vaguely Relatable EP - Blow me (feat. Groovy J) Release Date 07/21/23</a></div>',
	'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1527341197&color=%23181413&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/theriversings" title="THE RIVER" target="_blank" style="color: #cccccc; text-decoration: none;">THE RIVER</a> · <a href="https://soundcloud.com/theriversings/metamorphosis-release-date-tbd" title="Vaguely Relatable EP - Metamorphosis - release date 07/21/23" target="_blank" style="color: #cccccc; text-decoration: none;">Vaguely Relatable EP - Metamorphosis - release date 07/21/23</a></div>',
	'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1527346117&color=%23181413&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/theriversings" title="THE RIVER" target="_blank" style="color: #cccccc; text-decoration: none;">THE RIVER</a> · <a href="https://soundcloud.com/theriversings/vaguely-relatable-release-date-tbd" title="Vaguely Relatable EP - Vaguely Relatable - release date 07/21/2023" target="_blank" style="color: #cccccc; text-decoration: none;">Vaguely Relatable EP - Vaguely Relatable - release date 07/21/2023</a></div>',
	'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1405003357&color=%23181413&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/theriversings" title="THE RIVER" target="_blank" style="color: #cccccc; text-decoration: none;">THE RIVER</a> · <a href="https://soundcloud.com/theriversings/01-aint-that-deep-ref-wave-48k" title="Ain&#x27;t That Deep - Release date 01/13/23" target="_blank" style="color: #cccccc; text-decoration: none;">Ain&#x27;t That Deep - Release date 01/13/23</a></div>',
	'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1290173737&color=%23181413&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/theriversings" title="THE RIVER" target="_blank" style="color: #cccccc; text-decoration: none;">THE RIVER</a> · <a href="https://soundcloud.com/theriversings/vanilla-cream-the-river-release-date-tbd" title="Vanilla Cream - The River Release Date 10/7/22" target="_blank" style="color: #cccccc; text-decoration: none;">Vanilla Cream - The River Release Date 10/7/22</a></div>',
	'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1290176437&color=%23181413&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/theriversings" title="THE RIVER" target="_blank" style="color: #cccccc; text-decoration: none;">THE RIVER</a> · <a href="https://soundcloud.com/theriversings/daddy-the-river-release-date-tbd" title="Daddy- The River Release Date 8/15" target="_blank" style="color: #cccccc; text-decoration: none;">Daddy- The River Release Date 8/15</a></div>',
	'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1246520791&color=%23181413&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/theriversings" title="THE RIVER" target="_blank" style="color: #cccccc; text-decoration: none;">THE RIVER</a> · <a href="https://soundcloud.com/theriversings/tick-tock-lead-a-life-i-love-release-date-tbd" title="Tick Tock (Lead a life I love)  - (Release day 5/13/22)" target="_blank" style="color: #cccccc; text-decoration: none;">Tick Tock (Lead a life I love)  - (Release day 5/13/22)</a></div>',
	'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1165030705&color=%23181413&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/theriversings" title="THE RIVER" target="_blank" style="color: #cccccc; text-decoration: none;">THE RIVER</a> · <a href="https://soundcloud.com/theriversings/hours-the-river-release-date-tbd" title="Hours - The River (Released 01/01/2022)" target="_blank" style="color: #cccccc; text-decoration: none;">Hours - The River (Released 01/01/2022)</a></div>',
	'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1153525291&color=%23181413&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/theriversings" title="THE RIVER" target="_blank" style="color: #cccccc; text-decoration: none;">THE RIVER</a> · <a href="https://soundcloud.com/theriversings/the-river-nonchalant-release-date-1123" title="The River - Nonchalant (Release date 11/23)" target="_blank" style="color: #cccccc; text-decoration: none;">The River - Nonchalant (Release date 11/23)</a></div>',
	'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1109104357&color=%23181413&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/theriversings" title="THE RIVER" target="_blank" style="color: #cccccc; text-decoration: none;">THE RIVER</a> · <a href="https://soundcloud.com/theriversings/alters-release-date-tbd" title="Alters (Release date 9/16)" target="_blank" style="color: #cccccc; text-decoration: none;">Alters (Release date 9/16)</a></div>',
	'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1100182789&color=%23181413&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/theriversings" title="THE RIVER" target="_blank" style="color: #cccccc; text-decoration: none;">THE RIVER</a> · <a href="https://soundcloud.com/theriversings/start-release-date-811" title="START (Release date 8/11)" target="_blank" style="color: #cccccc; text-decoration: none;">START (Release date 8/11)</a></div>',
	'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1057046671&color=%23181413&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/theriversings" title="THE RIVER" target="_blank" style="color: #cccccc; text-decoration: none;">THE RIVER</a> · <a href="https://soundcloud.com/theriversings/the-river-water-release-date-611" title="The River - Water (RELEASE DATE 6/11)" target="_blank" style="color: #cccccc; text-decoration: none;">The River - Water (RELEASE DATE 6/11)</a></div>',
	'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/678840801&color=%23181413&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/theriversings" title="THE RIVER" target="_blank" style="color: #cccccc; text-decoration: none;">THE RIVER</a> · <a href="https://soundcloud.com/theriversings/otherside-mint" title="Otherside (Mint) - Original Prod. Mixtape Seoul" target="_blank" style="color: #cccccc; text-decoration: none;">Otherside (Mint) - Original Prod. Mixtape Seoul</a></div>',
	'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/530558466&color=%23181413&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/theriversings" title="THE RIVER" target="_blank" style="color: #cccccc; text-decoration: none;">THE RIVER</a> · <a href="https://soundcloud.com/theriversings/nonchalant-6lack-cover-by-river" title="Nonchalant 6lack (Cover by River)" target="_blank" style="color: #cccccc; text-decoration: none;">Nonchalant 6lack (Cover by River)</a></div>'
];
```

I would store in a DB, but if we have to run this every now and then, there's no point in storing the same text

// TODO consider writing an actual scraper? but if this will be run on a deployed free tier, id rather not wait for everything to load
