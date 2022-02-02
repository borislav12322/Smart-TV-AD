import React, { ReactElement } from 'react';

import s from './finalTextBlock.module.css';

export const FinalTextBlock = (): ReactElement => (
  <div className={s.wrapper}>
    <h2 className={s.title}>ЗАЯВКА ПРИНЯТА</h2>
    <p className={s.text}>
      Держите телефон под рукой. <br /> Скоро с Вами свяжется наш менеджер.
    </p>
  </div>
);
