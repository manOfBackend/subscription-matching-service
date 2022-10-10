import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';

function RootLayout({ children }: PropsWithChildren<unknown>) {
	const router = useRouter();
	return (
		<>
			<div className="flex h-screen w-screen flex-col items-center justify-center">
				<header className="flex w-full max-w-screen-lg justify-between">
					<div className="flex h-[90px] w-[90px] flex-col justify-center">
						로고
					</div>
					<nav className="flex w-full items-center justify-center">
						<ul className="flex gap-10 text-lg">
							<li>
								<button onClick={() => router.push('/')}>홈</button>
							</li>
							<li>
								<button onClick={() => router.push('/add-party')}>
									파티추가
								</button>
							</li>
							<li>MY 파티</li>
							<li>가이드</li>
						</ul>
					</nav>
					<div className="flex w-[200px] flex-col items-center justify-center">
						사용자 정보
					</div>
				</header>
				<div className="flex h-full w-full justify-center bg-teal-100 px-20 pt-10">
					{children}
				</div>
			</div>
		</>
	);
}

export default RootLayout;
