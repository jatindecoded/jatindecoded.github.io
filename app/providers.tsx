'use client';

import { ProgressProvider } from '@bprogress/next/app';

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ProgressProvider
			height="4px"
			color="oklch(0.59 0.1988 141.8)"
			options={{ showSpinner: false }}
		// shallowRouting
		>
			{children}
		</ProgressProvider>
	);
};

export default Providers;