// Function to set item in local storage with expiration time
export function setItemWithExpiry(key: string, value: any, ttl: number): void {
	const now = new Date();
	const item = {
		value: value,
		expiry: now.getTime() + ttl
	};
	localStorage.setItem(key, JSON.stringify(item));
}

// Function to get item from local storage and check if it has expired
export function getItemWithExpiry(key: string): string | null {
	const itemStr = localStorage.getItem(key);
	if (!itemStr) {
		return null;
	}
	const item = JSON.parse(itemStr);
	const now = new Date();
	if (now.getTime() > item.expiry) {
		localStorage.removeItem(key);
		return null;
	}
	return item.value;
}
