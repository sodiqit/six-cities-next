import React, { FC } from 'react';
import block from 'bem-cn-lite';

import Button from 'src/components/Button/Button';

import './Test.scss';

const b = block('main');

const Test: FC = () => {
  return (
    <div>
      <h1 className={b('title')}>Hello from Test page</h1>
      <img src="http://via.placeholder.com/300x300" alt="mock"/>
    </div>
  );
}

export default Test;