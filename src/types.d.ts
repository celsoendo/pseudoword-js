declare global {
	interface DictRule {
		name: string;
		length: number;
		chars: string[];
		allowedAfter: string[];
		allowedAtStart?: boolean;
		allowedAtEnd?: boolean;
	}
}

export default {}