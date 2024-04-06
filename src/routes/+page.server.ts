import { env } from '$env/dynamic/private';

export const load = () => {
	return {
		videoURL: env.VIDEO_URL
	};
};
