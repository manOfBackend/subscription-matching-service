import React, { useCallback, useState } from 'react';
import OTTBox from './OTTBox';

type IconKind = 'netflix' | 'tving' | 'disney' | 'laftel' | 'watcha' | 'wavve';
type IconType = { text: string; icon: string; isAvailableMatchingImmediately?: boolean };
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

  const handleClickOTTBox = useCallback((icon: IconKind) => () => {
    setClicked(icon);
  }, []);

  return (
    <div className="flex w-full max-w-[80%] flex-col justify-center gap-7 rounded-xl bg-white p-5 shadow-2xl">
      <h4 className="font-bold">보고 싶은 OTT를 선택해주세요.</h4>
      <div className="flex w-full flex-wrap justify-between gap-2">
        {Object.entries(logoMap).map(([name, { text, icon, isAvailableMatchingImmediately }]) => (
          <OTTBox
            key={name}
            clicked={clicked === name}
            imgElement={<img alt={name} src={icon} width={44} height={44} />}
            isAvailableMatchingImmediately={isAvailableMatchingImmediately}
            onClick={handleClickOTTBox(name as IconKind)}
            text={text}
          />
        ))}
      </div>
    </div>
  );
};
export default SelectOTTBox;