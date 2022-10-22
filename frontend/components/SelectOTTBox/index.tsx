import React, { useCallback, useState } from 'react';
import OTTBox from './OTTBox';

type IconKind = 'netflix' | 'tving' | 'disney' | 'laftel' | 'watcha' | 'wavve';
type IconType = {
	text: string;
	icon: string;
	isAvailableMatchingImmediately?: boolean;
};
type LogoMapType = Record<IconKind, IconType>;

const logoMap: LogoMapType = {
	netflix: {
		text: '넷플릭스',
		icon: '/icon_netflix.png',
		isAvailableMatchingImmediately: true,
	},
	tving: {
		text: '티빙',
		icon: '/icon_tving.png',
	},
	disney: {
		text: '디즈니',
		icon: '/icon_disney.png',
	},
	laftel: {
		text: '라프텔',
		icon: '/icon_laftel.png',
	},
	watcha: {
		text: '왓챠',
		icon: '/icon_watcha.png',
	},
	wavve: {
		text: '웨이브',
		icon: '/icon_wavve.png',
	},
};

const SelectOTTBox = () => {
	const [clicked, setClicked] = useState<IconKind>();

	const handleClickOTTBox = useCallback(
		(icon: IconKind) => () => {
			setClicked(icon);
		},
		[],
	);

	return (
		<div className="flex w-full max-w-[80%] flex-col justify-center gap-7 rounded-xl bg-white p-5 shadow-2xl">
			<h4 className="text-lg font-bold">보고 싶은 OTT를 선택해주세요.</h4>
			<div className="flex w-full flex-wrap justify-between gap-2">
				{Object.entries(logoMap).map(
					([name, { text, icon, isAvailableMatchingImmediately }]) => (
						<OTTBox
							key={name}
							clicked={clicked === name}
							imgElement={<img alt={name} src={icon} width={44} height={44} />}
							isAvailableMatchingImmediately={isAvailableMatchingImmediately}
							onClick={handleClickOTTBox(name as IconKind)}
							text={text}
						/>
					),
				)}
			</div>
			<div className="flex w-full justify-center pt-8">
				<div className="flex h-auto w-[400px] rounded-xl border-[1px] border-gray-200 bg-gray-100 p-3">
					<div className="flex-1">
						<span className="block pb-2 text-sm font-semibold">
							{clicked} 프리미엄
						</span>
						<span className="block text-xs text-gray-600">
							<span className="text-gray-400 line-through">17,000원</span>
							{'→'}
							4250원
						</span>
					</div>
					<div className="flex-1">
						<span className="block pb-2 text-sm font-semibold">수수료</span>
						<span className="block text-xs text-gray-600">
							파티장 490원 | 파티원 990원
						</span>
					</div>
				</div>
			</div>
			<div className="flex w-full justify-center">
				<button className="h-10 w-full rounded-md bg-green-600 font-bold text-white">
					다음
				</button>
			</div>
		</div>
	);
};
export default SelectOTTBox;
