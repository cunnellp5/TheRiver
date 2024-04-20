class DatabaseError extends Error {
	constructor(message?: string) {
		super(message);
		this.name = 'DatabaseError';

		// This line is needed to restore the correct prototype chain.
		Object.setPrototypeOf(this, new.target.prototype);
	}
}
