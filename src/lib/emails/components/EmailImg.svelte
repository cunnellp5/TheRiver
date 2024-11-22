<script lang="ts">
	import { WEBSITE_URL } from '$lib/data/WEBSITE_URL';
	import LOGO_URL from '$lib/data/LogoURL';
	import Link from './ui/Link.svelte';
	import Img from './ui/Img.svelte';
	import { logoImage } from '../emailStyles';
</script>

<Link href={WEBSITE_URL}>
	<Img src={LOGO_URL} width="580" height="172" style={logoImage} alt="TheRiver" />
</Link>
