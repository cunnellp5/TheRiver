<script lang="ts">
	// import { draw, fade, fly } from 'svelte/transition';
	// import { backOut } from 'svelte/easing';
	// props
	const { theme = false } = $props();
</script>

<svg
	width="306mm"
	height="94mm"
	viewBox="0 0 306 94"
	version="1.1"
	id="svg1"
	xmlns="http://www.w3.org/2000/svg"
	class:theme
	class="shadow homePage">
	<g id="layer1" transform="translate(38.893751,-126.47083)">
		<g id="g6" transform="matrix(0.26458333,0,0,0.26458333,-150.01875,50.270833)">
			<!-- T -->
			<!-- in:fly={{ duration: 250, x: -400, easing: backOut }} -->
			<polygon
				class:theme
				class="shadow homePage"
				points="655.8,362 655.9,361 547.5,361 544.2,392 544.3,392 544.2,393 577.9,393 559.2,570 559.3,570 559.2,571 601,571 619.7,393 652.8,393 655.9,362 "
				id="T" />
			<!-- HE -->
			<!-- in:fly={{
					duration: 250,
					x: -400,
					delay: 140,
					easing: backOut
				}} -->
			<polygon
				class:theme
				class="shadow homePage"
				points="772.6,571 782.5,477 813.4,477 803.6,570 803.7,570 803.6,571 894.7,571 897.7,543 897.5,543 897.7,542 848.5,542 855.3,477 884,477 893.3,477 896.2,448 896.2,448 896.3,447 858.5,447 864.3,391 912.9,391 916,362 915.9,362 916,361 825.6,361 816.5,448 785.6,448 794.6,362 794.5,362 794.6,361 752.8,361 743.9,447 706,447 714.8,362 714.7,362 714.8,361 673.1,361 651.1,570 651.2,570 651.1,571 692.8,571 702.7,478 740.7,478 730.9,570 731,570 730.9,571 "
				id="HE" />
			<!-- R -->
			<!-- in:fly={{ duration: 250, x: 400 }} -->
			<path
				class:theme
				class="shadow homePage"
				d="m 953,467 h 33.3 l 30.7,103 h 19.4 L 1004,463.2 c 19.4,-4 29.1,-20.4 29.1,-49.3 0,-17.3 -4,-30.5 -12,-39.4 -8,-9 -21.3,-13.5 -39.9,-13.5 H 934 v 209 h 19 z m 0,-91 h 27.7 c 12.7,0 21.4,2.9 26.1,8.9 4.7,6 7.1,15.7 7.1,29.1 0,13.6 -2.5,23.5 -7.4,29.7 -5,6.2 -13.8,9.3 -26.4,9.3 H 953 Z"
				id="R" />
			<!-- I -->
			<!-- in:fly={{ duration: 250, x: 400, delay: 20 }} -->
			<polygon
				class:theme
				class="shadow homePage"
				points="1097.3,362 1077.7,362 1055.9,571 1075.5,571 "
				id="I" />
			<!-- V -->
			<!-- in:fly={{ duration: 250, x: 400, delay: 40 }} -->
			<polygon
				class:theme
				class="shadow homePage"
				points="1225.5,361 1206.9,361 1169.7,534.1 1130.2,361 1111.4,361 1160.4,570 1178.3,570 "
				id="V" />
			<!-- E -->
			<!-- in:fly={{ duration: 250, x: 400, delay: 60 }} -->
			<polygon
				class:theme
				class="shadow homePage"
				points="1325,361 1250,361 1250,570 1326,570 1326,556 1270,556 1270,469 1315,469 1315,455 1270,455 1270,376 1325,376 "
				id="E" />
			<!-- R -->
			<!-- in:fly={{ duration: 250, x: 400, delay: 80 }} -->
			<path
				class:theme
				class="shadow homePage"
				d="m 1372.5,570 30.7,-103 h 32.8 v 103 h 20 V 361 h -47.8 c -18.6,0 -31.9,4.5 -39.9,13.5 -8,9 -12,22.1 -12,39.5 0,28.9 9.7,45.2 29.1,49.2 L 1353.1,570 Z M 1383,443.7 c -5,-6.2 -7.4,-16.1 -7.4,-29.7 0,-13.5 2.4,-23.1 7.1,-29.1 4.7,-6 13.4,-8.9 26.1,-8.9 h 27.3 v 77 h -26.7 c -12.7,0 -21.5,-3.1 -26.4,-9.3 z"
				id="R2" />
			<!-- OUTLINE -->
			<!-- in:draw={{ duration: 800 }} -->
			<!-- style="stroke:#ffffff; fill: none" -->
			<path
				class:theme
				class="shadow homePage"
				d="M 420,288 V 644 H 1580 V 288 Z M 1560,624 H 440 V 308 h 1120 z"
				id="OUTLINE" />
			<!-- in:fade={{ duration: 500 }} -->
			<!-- style="stroke:#ffffff;" -->
			<path
				class:theme
				class="shadow homePage"
				d="M 420,288 V 644 H 1580 V 288 Z M 1560,624 H 440 V 308 h 1120 z"
				id="OUTLINE" />
		</g>
	</g>
</svg>

<style>
	.homePage {
		/* fill: var(--stone-9); */
		fill: var(--stone-3);
		width: 100%;
		/* backdrop-filter: blur(1px);  */
		/* -webkit-backdrop-filter: blur(1px);  */
	}

	.theme {
		fill: var(--text-2);
	}
	/* .homePage {
		fill: var(--sand-2);
	} */
</style>
