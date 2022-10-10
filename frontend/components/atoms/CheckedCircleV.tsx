import React from 'react';
import cn from 'classnames';

interface CheckedCircleVProps {
  size?: 'small' | 'medium' | 'large';
}
const CheckedCircleV = ({ size }: CheckedCircleVProps) => (
  <svg className={cn('fill-green-500', { 'w-4 h-6': size === 'small', 'w-6 h-8': size === 'medium', 'w-8 h-10': size === 'large' })} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>icon check circle fill primary</title>
    <path d="M12.0002 1.2749C6.09604 1.2749 1.29688 6.06323 1.29688 11.9782C1.29688 17.8932 6.08521 22.6816 12.0002 22.6816C17.9044 22.6816 22.7035 17.8932 22.7035 11.9782C22.7035 6.06323 17.9044 1.2749 12.0002 1.2749ZM16.8535 10.1582L11.361 15.6507C11.1985 15.8132 10.9927 15.8891 10.7869 15.8891C10.581 15.8891 10.3752 15.8132 10.2127 15.6507L7.51521 12.9532C7.20104 12.6391 7.20104 12.1191 7.51521 11.8049C7.82938 11.4907 8.34938 11.4907 8.66354 11.8049L10.7869 13.9282L15.7052 9.0099C16.0194 8.69574 16.5394 8.69574 16.8535 9.0099C17.1677 9.32407 17.1677 9.84407 16.8535 10.1582Z" />
  </svg>
);

export default CheckedCircleV;