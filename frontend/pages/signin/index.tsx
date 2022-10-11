import { signIn } from 'next-auth/react';
import React from 'react';

function SignIn() {
	return (
		<button
			className="h-20 w-fit animate-bounce rounded-md bg-yellow-200 px-5 shadow-md"
			onClick={() => signIn('kakao', { callbackUrl: '/' })}
		>
			카카오 로그인
		</button>
	);
}

export default SignIn;
