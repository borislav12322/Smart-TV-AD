import React, { ChangeEvent, ReactElement } from 'react';

import QRCode from '../../assets/images/qr-code.jpeg';

import s from './enterPhone.module.css';

import { FinalScreen } from 'components/finalScreen/FinalScreen';
import { PhoneForm } from 'components/phoneForm/PhoneForm';

type PropsType = {
  keyBoardNumbersArray: string[];
  isPhoneSend: boolean;
  showFinalScreen: () => void;
  closeWindow: () => void;
  addNumber: (e: any) => void;
  deleteNumber: () => void;
  onChangeHandle: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const EnterPhoneScreen = ({
  keyBoardNumbersArray,
  isPhoneSend,
  showFinalScreen,
  closeWindow,
  addNumber,
  deleteNumber,
  onChangeHandle,
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
      {isPhoneSend ? (
        <FinalScreen />
      ) : (
        <PhoneForm
          keyBoardNumbersArray={keyBoardNumbersArray}
          showFinalScreen={showFinalScreen}
          addNumber={addNumber}
          deleteNumber={deleteNumber}
          onChangeHandle={onChangeHandle}
        />
      )}
    </div>
  </div>
);
