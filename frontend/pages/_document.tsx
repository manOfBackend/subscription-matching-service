import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
			</Head>
			<body className="flex w-full flex-col items-center">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
