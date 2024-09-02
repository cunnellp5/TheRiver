<script lang="ts">
	import { WEBSITE_URL } from '$lib/data/WEBSITE_URL';
	import socialLinks from '$lib/data/socialLinks';
	import { Hr, Link, Text } from 'svelte-email';
	import { hr, paragraph, link, address, unsubscribe } from '../emailStyles';
</script>

<Hr style={hr} />
<Text style={{ ...paragraph, fontSize: '12px', display: 'flex', justifyContent: 'center' }}>
	<!-- Social Links -->
	<Link href={socialLinks.facebook} style={link}>FaceBook</Link>&nbsp;•&nbsp;
	<Link href={socialLinks.instagramSing} style={link}>Insta[Sing]</Link>&nbsp;•&nbsp;
	<Link href={socialLinks.instagramBeauty} style={link}>Insta[Beauty]</Link>&nbsp;•&nbsp;
	<Link href={socialLinks.x} style={link}>Twitter</Link>&nbsp;•&nbsp;
	<Link href={socialLinks.tiktok} style={link}>TikTok</Link>
</Text>
<Text style={{ ...paragraph, fontSize: '12px', display: 'flex', justifyContent: 'center' }}>
	<!-- Music Links -->
	<Link href={socialLinks.soundCloud} style={link}>SoundCloud</Link>&nbsp;•&nbsp;
	<Link href={socialLinks.spotify} style={link}>Spotify</Link>&nbsp;•&nbsp;
	<Link href={socialLinks.youtube} style={link}>YouTube</Link>
</Text>
<Text style={{ ...paragraph, fontSize: '12px', display: 'flex', justifyContent: 'center' }}>
	<!-- Merch and other Links -->
	<Link href={socialLinks.etsy} style={link}>Etsy</Link>&nbsp;•&nbsp;
	<Link href={socialLinks.linkTree} style={link}>LinkTree</Link>
</Text>
<Text style={address}>The River</Text>
<Text style={address}>30 W Bayaud Ave</Text>
<Text style={address}>Denver, CO 80223</Text>
<Text>
	<Link
		href={WEBSITE_URL + '/unsubscribe'}
		style={{ ...unsubscribe, display: 'flex', justifyContent: 'end' }}>Unsubscribe</Link>
</Text>
