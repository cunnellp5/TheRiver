<div class="overlay">
	<div class="lds-ripple">
		<div></div>
		<div></div>
	</div>
</div>

<style>
	.overlay {
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		justify-content: center;
		align-items: center;
		z-index: 1000;
		background: rgba(0, 0, 0, 0.9);
		width: 100vw;
		height: 100vh;
	}

	.lds-ripple {
		position: relative;
		width: 300px;
		height: 300px;
	}
	.lds-ripple div {
		position: absolute;
		opacity: 1;
		animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 0.4) infinite;
		border: 2px solid #fff;
		border-radius: 50%;
	}
	.lds-ripple div:nth-child(2) {
		animation-delay: -0.8s;
	}
	@keyframes lds-ripple {
		0% {
			top: 50%;
			left: 50%;
			opacity: 1;
			width: 0;
			height: 0;
		}
		100% {
			top: 0px;
			left: 0px;
			opacity: 0;
			width: 300px;
			height: 300px;
		}
	}
</style>
