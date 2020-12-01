import React, { FC } from 'react';
import block from 'bem-cn-lite';

import Button from 'components/Button/Button';

import './Test.scss';

const b = block('main');

const Test: FC = () => {
  return (
    <div>
      <h1 className={b('title')}>Hello</h1>
      <img src="http://via.placeholder.com/640x360" alt="mock"/>
      <Button text="hi" />
    </div>
  );
}

export default Test;