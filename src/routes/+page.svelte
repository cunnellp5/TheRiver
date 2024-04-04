<script lang="ts">
	import BlogMentions from '$lib/components/BlogMentions.svelte';
</script>

<title>The River</title>

<div id="video-background">
	<video autoplay loop muted>
		<source src="/jungle-river.mp4" type="video/mp4" />
		<track kind="captions" srclang="en" label="English" />
	</video>
	<div id="video-tint"></div>
</div>

<div id="image-container">
	<img src="/Logo_White.png" alt="The River Logo" srcset="" />
</div>

<BlogMentions />

<style>
	#video-background {
		position: absolute;
		right: 0;
		bottom: 0;
		min-width: 100%;
		min-height: 100%;
		width: auto;
		height: auto;
		z-index: -100;
	}

	#video-tint {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5); /* Black tint with 50% opacity */
	}

	#image-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	img {
		width: 80%;
		border-radius: 0;
	}

	video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
