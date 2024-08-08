<script lang="ts">
	import { writable } from 'svelte/store';
	import { onDestroy } from 'svelte';
	import { type CarouselAPI, type CarouselProps, setEmblaContext } from './context.js';

	// const YOUTUBE_BASE_EMBED_URL = 'https://www.youtube.com/embed/';
	const YOUTUBE_BASE_EMBED_URL = 'https://www.youtube.com/watch?v=';

	type $$Props = CarouselProps;

	export let opts = {};
	export let plugins: NonNullable<$$Props['plugins']> = [];
	// eslint-disable-next-line no-undef-init
	export let api: $$Props['api'] = undefined;
	export let orientation: NonNullable<$$Props['orientation']> = 'horizontal';

	const apiStore = writable<CarouselAPI | undefined>(undefined);
	const orientationStore = writable(orientation);
	const canScrollPrev = writable(false);
	const canScrollNext = writable(false);
	const optionsStore = writable(opts);
	const pluginStore = writable(plugins);
	const scrollSnapsStore = writable<number[]>([]);
	const selectedIndexStore = writable(0);

	$: orientationStore.set(orientation);
	$: pluginStore.set(plugins);
	$: optionsStore.set(opts);

	function setUrlOnAnchor() {
		// Adding a set timeout because the anchor is not rendered yet, 50 is arbitrary
		setTimeout(() => {
			const anchor = document.querySelector('.is-snapped a.is-snapped-anchor');
			const videoId = anchor?.getAttribute('data-id');
			const url = YOUTUBE_BASE_EMBED_URL + videoId;
			anchor?.setAttribute('href', url);
		}, 50);
	}

	function scrollPrev() {
		api?.scrollPrev();
	}
	function scrollNext() {
		api?.scrollNext();
	}
	function scrollTo(index: number, jump?: boolean) {
		api?.scrollTo(index, jump);
	}
	function onSelect(selectApi: CarouselAPI) {
		if (!selectApi) return;
		canScrollPrev.set(selectApi.canScrollPrev());
		canScrollNext.set(selectApi.canScrollNext());
	}

	$: if (api) {
		onSelect(api);
		api.on('select', onSelect);
		api.on('reInit', onSelect);
		api.on('slidesInView', setUrlOnAnchor);
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'ArrowLeft') {
			e.preventDefault();
			scrollPrev();
		} else if (e.key === 'ArrowRight') {
			e.preventDefault();
			scrollNext();
		}
	}

	function onInit(event: CustomEvent<CarouselAPI>) {
		api = event.detail;
		apiStore.set(api);
		scrollSnapsStore.set(api.scrollSnapList());
		if (document) {
			setUrlOnAnchor();
		}
	}

	setEmblaContext({
		api: apiStore,
		scrollPrev,
		scrollNext,
		orientation: orientationStore,
		canScrollNext,
		canScrollPrev,
		handleKeyDown,
		options: optionsStore,
		plugins: pluginStore,
		onInit,
		scrollSnaps: scrollSnapsStore,
		selectedIndex: selectedIndexStore,
		scrollTo
	});

	onDestroy(() => {
		api?.off('select', onSelect);
	});
</script>

<div
	class="relative"
	on:mouseenter
	on:mouseleave
	role="region"
	aria-roledescription="carousel"
	{...$$restProps}>
	<slot />
</div>

<style>
	div {
		position: relative;
		overflow: hidden;
	}
</style>
