import React, { ReactElement } from 'react';

import QRCode from '../../assets/images/qr-code.jpeg';

import s from './enterPhone.module.css';

type PropsType = {
  keyBoardNumbersArray: number[];
};

export const EnterPhoneScreen = ({ keyBoardNumbersArray }: PropsType): ReactElement => {
  const func = (): void => {};

  return (
    <div className={s.container}>
      <div className={s.otherInfoBox}>
        <button className={s.btnClose} type="button">
          X
        </button>
        <div className={s.qrCodeInfo}>
          <p className={s.textInfo}>
            СКАНИРУЙТЕ QR-КОД ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
          </p>
          <img className={s.qrCodeImg} src={QRCode} alt="QR Code" />
        </div>
      </div>
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
                <span className={s.labelText}>
                  Согласие на обработку персональных данных
                </span>
              </label>
            </div>
            <button
              type="submit"
              className={`${s.submitBtn} btn`}
              onClick={func}
              style={{ width: '100%' }}
            >
              ПОДТВЕРДИТЬ НОМЕР
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
