import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import RootLayout from '../components/RootLayout';
import '../styles/globals.css';

function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps<Session>) {
	return (
		<SessionProvider session={session as Session}>
			<RootLayout>
				<Component {...pageProps} />
			</RootLayout>
		</SessionProvider>
	);
}

export default MyApp;
