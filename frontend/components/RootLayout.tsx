import React, { PropsWithChildren } from 'react';

function RootLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<>
			<div className="flex h-screen w-screen flex-col items-center justify-center">
				<header className="flex w-full max-w-screen-lg justify-between">
					<div className="flex h-[90px] w-[90px] flex-col justify-center">
						로고
					</div>
					<nav className="flex w-full items-center justify-center">
						<ul className="flex gap-5">
							<li>홈</li>
							<li>파티추가</li>
							<li>MY 파티</li>
							<li>가이드</li>
						</ul>
					</nav>
					<div className="flex w-[200px] flex-col items-center justify-center">
						사용자 정보
					</div>
				</header>
				<div className="h-full w-full bg-teal-100 px-20 pt-10">{children}</div>
			</div>
		</>
	);
}

export default RootLayout;