import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
import { injectAnalytics } from '@vercel/analytics/sveltekit';

injectSpeedInsights();
injectAnalytics();