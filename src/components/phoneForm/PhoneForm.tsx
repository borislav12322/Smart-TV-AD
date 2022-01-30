import React, { ReactElement } from 'react';

import s from './phoneForm.module.css';

type PropsType = {
  keyBoardNumbersArray: number[];
  showFinalScreen: () => void;
};

export const PhoneForm = ({
  keyBoardNumbersArray,
  showFinalScreen,
}: PropsType): ReactElement => (
  <div className={s.formContainer}>
    <div className={s.wrapper}>
      <h2 className={s.title}>Введите ваш номер мобильного телефона</h2>
      <input className={s.inputPhone} type="text" defaultValue="+7(___)___-__-__" />
      <span className={s.text}>
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </span>
      <form className={s.phoneForm}>
        <div className={s.controls}>
          {keyBoardNumbersArray.map(item => (
            <button className={s.keyNumber} type="button" key={item}>
              {item}
            </button>
          ))}
          <button className={`${s.clearBtn} ${s.keyNumber}`} type="button">
            СТЕРЕТЬ
          </button>
        </div>
        <div className={s.checkBoxWrapper}>
          <label htmlFor="phoneForm" className={s.checkBoxLabel}>
            <input className={s.checkBox} id="checkbox" type="checkbox" />
            <span className={s.labelText}>Согласие на обработку персональных данных</span>
          </label>
        </div>
        <button
          type="button"
          className={`${s.submitBtn} btn`}
          style={{ width: '100%' }}
          onClick={showFinalScreen}
        >
          ПОДТВЕРДИТЬ НОМЕР
        </button>
      </form>
    </div>
  </div>
);
