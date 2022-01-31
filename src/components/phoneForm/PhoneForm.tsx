import React, { ChangeEvent, ReactElement } from 'react';

import InputMask from 'react-input-mask';
import { useSelector } from 'react-redux';

import s from './phoneForm.module.css';

import { AppRootStateType } from 'store/store';

type PropsType = {
  keyBoardNumbersArray: string[];
  showFinalScreen: () => void;
  deleteNumber: () => void;
  addNumber: (e: any) => void;
  onChangeHandle: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const PhoneForm = ({
  keyBoardNumbersArray,
  showFinalScreen,
  addNumber,
  deleteNumber,
  onChangeHandle,
}: PropsType): ReactElement => {
  const phoneNumber = useSelector<AppRootStateType, string>(
    state => state.appReducer.phoneNumber,
  );
  const isChecked = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.checkBoxValue,
  );
  const isPhoneValidate = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.isPhoneValidate,
  );
  const isErrorShowed = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.isErrorShowed,
  );
  const symbolsLength = 10;
  return (
    <div className={s.formContainer}>
      <div className={s.wrapper}>
        <h2 className={s.title}>Введите ваш номер мобильного телефона</h2>
        <InputMask
          className={s.inputPhone}
          value={phoneNumber}
          mask="+7 (999) 999-99-99"
          alwaysShowMask
        />
        <span className={s.text}>
          и с Вами свяжется наш менеждер для дальнейшей консультации
        </span>
        <form className={s.phoneForm}>
          <div className={s.controls}>
            {keyBoardNumbersArray.map(number => (
              <button
                className={s.keyNumber}
                value={number}
                type="button"
                key={number}
                onClick={addNumber}
                disabled={phoneNumber.length === symbolsLength}
              >
                {number}
              </button>
            ))}
            <button
              className={`${s.clearBtn} ${s.keyNumber}`}
              type="button"
              onClick={deleteNumber}
            >
              СТЕРЕТЬ
            </button>
          </div>
          <div className={s.checkBoxWrapper}>
            {!isErrorShowed ? (
              <label htmlFor="phoneForm" className={s.checkBoxLabel}>
                <input
                  className={s.checkBox}
                  checked={isChecked}
                  id="checkbox"
                  type="checkbox"
                  onChange={onChangeHandle}
                />
                <span className={s.labelText}>
                  Согласие на обработку персональных данных
                </span>
              </label>
            ) : (
              <span className={s.errorText}>НЕВЕРНО ВВЕДЕН НОМЕР</span>
            )}
          </div>
          <button
            type="button"
            className={`${s.submitBtn} btn`}
            style={{ width: '100%' }}
            onClick={showFinalScreen}
            disabled={!isPhoneValidate}
          >
            ПОДТВЕРДИТЬ НОМЕР
          </button>
        </form>
      </div>
    </div>
  );
};
