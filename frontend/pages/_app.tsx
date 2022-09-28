import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps<Session>) {
	return (
		<SessionProvider session={session as Session}>
			<Component {...pageProps} />
		</SessionProvider>
	);
}

export default MyApp;
