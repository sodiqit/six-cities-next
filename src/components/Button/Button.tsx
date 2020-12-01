import React, { FC } from 'react';
import block from 'bem-cn-lite';

import './Button.scss';

interface ButtonProps {
  text: string;
}

const b = block('button');

const Button: FC<ButtonProps> = ({ text }) => {
  return <button className={b()} type="button">{text}</button>
};

export default Button;