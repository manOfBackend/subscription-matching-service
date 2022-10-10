import React, {
  HTMLAttributes, memo, PropsWithChildren, ReactElement,
} from 'react';
import cn from 'classnames';
import CheckedCircleV from '../atoms/CheckedCircleV';
import CheckedV from '../atoms/CheckedV';

interface OTTBoxProps extends Pick<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  clicked?: boolean;
  imgElement: ReactElement;
  text: string;
  isAvailableMatchingImmediately?: boolean;
}

const OTTBox = ({
  clicked, onClick, imgElement, text, isAvailableMatchingImmediately,
}: PropsWithChildren<OTTBoxProps>) => (
  <button
    type="button"
    onClick={onClick}
    className="flex shrink-0 grow basis-[28%] flex-col items-center"
  >
    <div className={cn('flex flex-col justify-center items-center relative w-full gap-1 bg-gray-100 rounded-xl py-3 h-[75px] hover:bg-green-100', { 'bg-green-100 border-green-300 border-2': clicked })}>
      {clicked && (
      <div className="absolute top-2 right-2 flex items-center">
        <CheckedCircleV size="small" />
      </div>
      )}
      {imgElement}
      <span className="text-sm">{text}</span>
    </div>
    {
      isAvailableMatchingImmediately && (
        <div className="flex items-center justify-between">
          <CheckedV />
          <small>
            즉시매칭 가능
          </small>
        </div>

      )
    }

  </button>
);

export default memo(OTTBox);