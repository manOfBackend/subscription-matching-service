import React from 'react';
import cn from 'classnames';

interface CheckedVProps {
  size?: 'small' | 'medium' | 'large';
}
const CheckedV = ({ size = 'small' }: CheckedVProps) => (
  <svg className={cn('fill-green-600', { 'w-4 h-6': size === 'small', 'w-6 h-8': size === 'medium', 'w-8 h-10': size === 'large' })} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
    <title>icon check primary</title>
    <path d="M6.1728 10.4589C6.04416 10.4589 5.91551 10.4115 5.81395 10.3099L3.5728 8.06876C3.37645 7.8724 3.37645 7.5474 3.5728 7.35105C3.76916 7.1547 4.09416 7.1547 4.29051 7.35105L6.1728 9.23334L10.716 4.69011C10.9124 4.49376 11.2374 4.49376 11.4337 4.69011C11.6301 4.88647 11.6301 5.21147 11.4337 5.40782L6.53166 10.3099C6.43009 10.4115 6.30145 10.4589 6.1728 10.4589Z" />
  </svg>
);

export default CheckedV;