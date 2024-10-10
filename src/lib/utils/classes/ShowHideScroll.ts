/*
  Class to toggle between two classes if the user scrolls up or down.
  
  Usage:
  ```js
  import { ShowHideScroll } from './showHideScrollClass';

	const CssScrollToggler = new ShowHideScroll();
  
		<div class={`${CssScrollToggler.updateClass(scroll)}`} use:CssScrollToggler.setTransitionDuration>
			<other_components...
		</div>
	```

	* No need to use reactive statement, since our scroll is updating the class directly
	* setTransitionDuration is a Svelte action that sets the transition duration of the element
	* customize your .show and .hide classes to toggle between the two classes
*/

export class ShowHideScroll {
	duration: string;
	offset: number;
	tolerance: number;
	cssClassName: string;
	lastY: number = 0;

	constructor(
		duration: string = '300ms',
		offset: number = 50,
		tolerance: number = 5,
		cssClassName: string = 'show'
	) {
		this.duration = duration;
		this.offset = offset;
		this.tolerance = tolerance;
		this.cssClassName = cssClassName;
	}

	deriveClass(y: number, dy: number) {
		if (y < this.offset) {
			this.cssClassName = 'show';
			return 'show';
		}
		if (Math.abs(dy) <= this.tolerance) {
			return this.cssClassName;
		}
		if (dy > 0) {
			this.cssClassName = 'show';
			return 'show';
		}

		this.cssClassName = 'hide';
		return 'hide';
	}

	updateClass(y: number) {
		const dy = this.lastY - y;
		this.lastY = y;
		return this.deriveClass(y, dy);
	}

	setTransitionDuration(node: HTMLDivElement) {
		node.style.transitionDuration = this.duration;
	}
}
