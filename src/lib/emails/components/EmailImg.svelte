<script lang="ts">
	import { WEBSITE_URL } from '$lib/data/WEBSITE_URL';
	import Link from './ui/Link.svelte';
	import Img from './ui/Img.svelte';
	import { logoImage } from '../emailStyles';
</script>

<Link href={WEBSITE_URL}>
	<Img
		src={'https://res.cloudinary.com/dswpu3qez/image/upload/v1725066467/g11_ava4lg.webp'}
		width="580"
		height="172"
		style={logoImage}
		alt="TheRiver" />
</Link>
