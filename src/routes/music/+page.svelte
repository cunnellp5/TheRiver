<main>
	<h1>Music</h1>
	<div class="gradient-point-down"></div>
	<div>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet dui at dictum pharetra.
		Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris
		gravida sem maximus magna imperdiet, eget scelerisque sem venenatis. Donec hendrerit eget enim
		sed maximus. Vivamus feugiat luctus nunc. Nam tincidunt pulvinar dolor nec sagittis. Sed vitae
		condimentum eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
		cubilia curae; Aenean ipsum odio, venenatis in sapien ultrices, commodo bibendum nisl. Quisque
		in neque eleifend, varius est vel, consectetur risus. Donec vel hendrerit turpis, quis porttitor
		neque. Vestibulum nec tempor mauris. Pellentesque habitant morbi tristique senectus et netus et
		malesuada fames ac turpis egestas. Vestibulum id ligula sed est viverra posuere sed sed elit.
		Quisque eleifend mi ex, et condimentum purus sagittis vitae. Aenean a quam tellus. Aliquam odio
		nunc, aliquet vitae elementum eget, dictum ut massa. Donec laoreet ipsum vitae blandit suscipit.
		Vestibulum suscipit, urna a congue tempus, risus magna viverra dolor, quis dapibus urna mi ac
		est. Pellentesque rutrum, nunc at cursus pretium, velit nibh laoreet dolor, sit amet semper nisl
		nunc a massa. Quisque volutpat scelerisque ornare. Phasellus mattis mauris eros, vel molestie
		turpis lobortis nec. Donec venenatis orci ut posuere placerat. Sed convallis sapien id hendrerit
		vulputate. Phasellus quis tincidunt ipsum. Donec interdum pharetra malesuada. Mauris orci purus,
		facilisis eget erat et, convallis hendrerit neque. Curabitur maximus facilisis risus, at euismod
		augue tempor ac. Etiam dictum, sem ut interdum dictum, sem nisi facilisis nulla, a faucibus nunc
		leo et est. Aenean euismod eu enim non ultrices. Pellentesque molestie sapien vel ultricies
		vestibulum. Suspendisse eu dictum dui, vel gravida lacus. Duis sollicitudin a dolor eu
		elementum. Quisque ac consectetur nisl, quis auctor nisl. Aenean sapien tellus, mollis tristique
		mollis vitae, egestas non nunc. Aliquam vehicula vel urna nec faucibus. Aliquam feugiat nibh
		vitae finibus sollicitudin. Aenean faucibus orci euismod enim laoreet, non vestibulum ligula
		pellentesque. Sed ac diam vitae lectus viverra pretium. Quisque dui velit, tempor in nulla
		efficitur, viverra posuere nibh. In ut mollis velit. Donec blandit in nunc quis dignissim. Donec
		ut consequat purus, sit amet pharetra ante. Nullam imperdiet vestibulum convallis. Etiam ligula
		nibh, molestie id lobortis sed, laoreet at magna. Fusce fermentum interdum eros non ornare.
		Pellentesque nec leo faucibus, lobortis nisl ut, condimentum ex. Vestibulum imperdiet non lorem
		at ullamcorper. Ut in libero at eros porta facilisis in nec odio. Pellentesque interdum nunc ut
		nisl feugiat sollicitudin. Phasellus turpis ligula, auctor vel sapien vitae, scelerisque commodo
		felis. Fusce eu metus molestie, posuere neque vitae, posuere magna. Duis viverra est vel turpis
		vulputate consectetur. Vivamus sagittis semper urna id blandit. Praesent mollis tellus ut porta
		faucibus. Proin quis neque sed ante tempor gravida vel vel tortor. Aliquam elementum metus
		neque, non commodo nibh dapibus sit amet. Aliquam ac ante odio. Mauris tincidunt massa libero,
		ac ullamcorper elit facilisis dapibus.
	</div>
	<div class="gradient-point-up"></div>
</main>

<style>
	h1 {
		margin-block: var(--size-7);
	}

	div {
		margin-block: var(--size-7);
	}

	main {
		/* display: grid; */
		/* grid-template-rows: auto auto auto; */
		margin: 0 auto;
	}

	.gradient-point-down {
		height: var(--size-9);
		background-image: var(--gradient-1), var(--noise-3);
		-webkit-mask: var(--mask-edge-zig-zag-top);
		mask: var(--mask-edge-zig-zag-top);
	}

	.gradient-point-up {
		height: var(--size-9);
		background-image: var(--gradient-2), var(--noise-3);
		-webkit-mask: var(--mask-edge-drip-bottom);
		mask: var(--mask-edge-drip-bottom);
	}
</style>
