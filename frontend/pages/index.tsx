import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
const Home: NextPage = () => {
	const { data: session } = useSession();

	if (session) {
		return (
			<>
				토큰: {session.token}
				사용자 이름: {session.user?.name} <br />
				사용자 이메일: {session.user?.email} <br />
				<button onClick={() => signOut()}>로그아웃</button>
			</>
		);
	}
	return (
		<>
			로그인되지 않았습니다. <br />
			<button onClick={() => signIn('kakao')}>로그인</button>
		</>
	);
};

export default Home;
