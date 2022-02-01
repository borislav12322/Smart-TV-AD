import React, { ReactElement } from 'react';

import QRCode from '../../assets/images/qr-code.jpeg';

import s from './enterPhone.module.css';

import { FinalScreen } from 'components/finalScreen/FinalScreen';
import { PhoneFormContainer } from 'components/phoneForm/PhoneFormContainer';

type PropsType = {
  isPhoneSend: boolean;
  closeWindow: () => void;
};

export const EnterPhoneScreen = ({
  isPhoneSend,
  closeWindow,
}: PropsType): ReactElement => (
  <div className={s.container}>
    <div className={s.otherInfoBox}>
      <button className={s.btnClose} type="button" onClick={closeWindow}>
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
      {isPhoneSend ? <FinalScreen /> : <PhoneFormContainer />}
    </div>
  </div>
);
