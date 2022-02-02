import React, { ReactElement } from 'react';

import { useSelector } from 'react-redux';

import QRCode from '../../assets/images/qr-code.jpeg';

import s from './enterPhone.module.css';

import { FinalScreen } from 'components/finalScreen/FinalScreen';
import {
  ButtonsControlType,
  PhoneFormContainer,
} from 'components/phoneForm/PhoneFormContainer';
import { AppRootStateType } from 'store/store';

type PropsType = {
  isPhoneSend: boolean;
  closeWindow: () => void;
};

export const EnterPhoneScreen = ({
  isPhoneSend,
  closeWindow,
}: PropsType): ReactElement => {
  const buttonsControl = useSelector<AppRootStateType, ButtonsControlType[]>(
    state => state.PhoneFormReducer.buttonsControl,
  );
  const closeButton = buttonsControl.filter(item => item.id === '130');

  return (
    <div className={s.container}>
      <div className={s.otherInfoBox}>
        {closeButton.map(item => (
          <button
            key={item.id}
            className={`${s.btnClose} ${item.className}`}
            type="button"
            onClick={closeWindow}
          >
            X
          </button>
        ))}

        <div className={s.qrCodeInfo}>
          <p className={s.textInfo}>
            СКАНИРУЙТЕ QR-КОД ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
          </p>
          <img className={s.qrCodeImg} src={QRCode} alt="QR Code" />
        </div>
      </div>
      <div className={s.formContainer}>
        {isPhoneSend ? <FinalScreen /> : <PhoneFormContainer />}
      </div>
    </div>
  );
};
