import React, { ChangeEvent, ReactElement } from 'react';

import InputMask from 'react-input-mask';

import s from './phoneForm.module.css';

import { ButtonsControlType } from 'components/phoneForm/PhoneFormContainer';

type PropsType = {
  showFinalScreen: () => void;
  deleteNumber: () => void;
  addNumber: (e: any) => void;
  checkBoxChangeHandle: (e: ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  isPhoneValidate: boolean;
  symbolsLength: number;
  phoneNumber: string;
  isErrorShowed: boolean;
  buttonsControl: ButtonsControlType[];
  buttonsNumberArray: ButtonsControlType[];
  checkboxItem: ButtonsControlType[];
  buttonSend: ButtonsControlType[];
  keyValue: string;
};

export const PhoneForm = ({
  buttonsControl,
  showFinalScreen,
  addNumber,
  deleteNumber,
  checkBoxChangeHandle,
  isChecked,
  isPhoneValidate,
  symbolsLength,
  phoneNumber,
  isErrorShowed,
  buttonsNumberArray,
  checkboxItem,
  keyValue,
  buttonSend,
}: PropsType): ReactElement => (
  <div className={s.formContainer}>
    <div className={s.wrapper}>
      <h2 className={s.title}>Введите ваш номер мобильного телефона</h2>
      <InputMask
        className={s.inputPhone}
        value={phoneNumber}
        mask="+7 (999) 999-99-99"
        type="tel"
        alwaysShowMask
        style={{ color: isErrorShowed ? '#EA0000' : '#000000' }}
      />
      <span className={s.text}>
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </span>
      <form className={s.phoneForm}>
        <div className={s.controls}>
          {buttonsNumberArray.map(item => (
            <button
              className={item.className}
              type="button"
              key={item.id}
              onClick={addNumber}
              disabled={phoneNumber.length >= symbolsLength}
            >
              {item.value}
            </button>
          ))}
          {/* <button */}
          {/*  className={`${s.clearBtn} ${s.keyNumber}`} */}
          {/*  type="button" */}
          {/*  onClick={deleteNumber} */}
          {/* > */}
          {/*  СТЕРЕТЬ */}
          {/* </button> */}
        </div>
        <div
          className={s.checkBoxWrapper}
          style={{
            background: keyValue === '110' ? 'rgba(78, 78, 78, 0.35)' : 'transparent',
          }}
        >
          {!isErrorShowed ? (
            <label htmlFor="phoneForm" className={s.checkBoxLabel}>
              {checkboxItem.map(item => (
                <input
                  key={item.id}
                  className={`${item.className} ${s.checkBox}`}
                  checked={isChecked}
                  id={item.id}
                  type="checkbox"
                  onChange={checkBoxChangeHandle}
                  style={{}}
                />
              ))}
              <span className={s.labelText}>
                Согласие на обработку персональных данных
              </span>
            </label>
          ) : (
            <span className={s.errorText}>НЕВЕРНО ВВЕДЕН НОМЕР</span>
          )}
        </div>
        {buttonSend.map(item => (
          <button
            key={item.id}
            type="button"
            className={`${s.submitBtn} ${item.className}`}
            style={{ width: '100%' }}
            onClick={showFinalScreen}
            disabled={!isPhoneValidate}
          >
            ПОДТВЕРДИТЬ НОМЕР
          </button>
        ))}
      </form>
    </div>
  </div>
);
