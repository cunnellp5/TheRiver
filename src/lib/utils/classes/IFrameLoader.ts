export class IFrameLoader {
	immediateLoadCount = 0; // Number of iframes to load immediately
	chunkSize = 1; // Number of iframes to load per chunk
	delay = 500; // Delay between loading iframes in a chunk

	loadIframe = (iframe: HTMLIFrameElement, index: number) => {
		if (index < this.immediateLoadCount) {
			// Load the first few iframes immediately
			iframe.src = iframe.getAttribute('data-src') ?? '';
		} else {
			// Set a timeout for the rest
			setTimeout(
				() => {
					iframe.src = iframe.getAttribute('data-src') ?? '';
				},
				(index - this.immediateLoadCount) * this.delay // Adjust the delay as needed
			);
		}
	};

	loadIframesInChunks = (iframes: NodeListOf<HTMLIFrameElement>, startIndex: number) => {
		for (let i = startIndex; i < startIndex + this.chunkSize && i < iframes.length; i++) {
			this.loadIframe(iframes[i], i);
		}
		if (startIndex + this.chunkSize < iframes.length) {
			requestAnimationFrame(() => this.loadIframesInChunks(iframes, startIndex + this.chunkSize));
		}
	};
}
