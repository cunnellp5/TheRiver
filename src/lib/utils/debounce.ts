export function debounce(
	func: Function,
	timeout: number = 300,
	useAbortController: boolean = false
) {
	let timerId: NodeJS.Timeout;
	let abortController: AbortController | null = null;

	return function (this: any, ...args: AbortSignal[]) {
		// Clear the timeout when debounce is called again
		clearTimeout(timerId);

		// If using AbortController, abort the previous request
		if (useAbortController && abortController) {
			abortController.abort();
		}

		// Create a new AbortController if needed
		if (useAbortController) {
			abortController = new AbortController();
			// Add the AbortSignal to the arguments if the function expects it
			args.push(abortController.signal);
		}

		// Set a new timeout
		timerId = setTimeout(() => {
			// Call the original function with the provided arguments
			func.apply(this, args);

			// Reset the AbortController after the function call
			if (useAbortController) {
				abortController = null;
			}
		}, timeout);
	};
}

// Usage example
// import { debounce } from './debounce';

// // Example function to be debounced
// function fetchData(signal: AbortSignal) {
//     console.log('Fetching data...');
//     // Simulate a fetch request
//     fetch('https://api.example.com/data', { signal })
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => {
//             if (error.name === 'AbortError') {
//                 console.log('Fetch aborted');
//             } else {
//                 console.error('Fetch error:', error);
//             }
//         });
// }

// // Create a debounced version of the fetchData function with AbortController
// const debouncedFetchData = debounce(fetchData, 500, true);

// // Simulate calling the debounced function multiple times
// debouncedFetchData();
// setTimeout(debouncedFetchData, 100);
// setTimeout(debouncedFetchData, 200);
// setTimeout(debouncedFetchData, 300);
