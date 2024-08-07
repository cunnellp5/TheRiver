<script lang="ts">
	import { writable } from 'svelte/store';
	import { onDestroy } from 'svelte';
	import { type CarouselAPI, type CarouselProps, setEmblaContext } from './context.js';

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
	function logSlidesInView(emblaApi) {
		console.log(emblaApi.slideNodes());
	}

	$: if (api) {
		onSelect(api);
		api.on('select', onSelect);
		api.on('reInit', onSelect);
		api.on('slidesInView', logSlidesInView);
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
		overflow: hidden;
	}
</style>
