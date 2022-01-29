import React, { ReactElement } from 'react';

import QRCode from '../../assets/images/qr-code.jpeg';

import s from './prompBanner.module.css';

type PropsType = {
  isBannerShowed: boolean;
};

export const PromoBanner = ({ isBannerShowed }: PropsType): ReactElement => (
  <div className={`${s.bannerContainer} ${isBannerShowed ? null : s.hidden}`}>
    <div className={s.wrapper}>
      <h2 className={s.bannerTitle}>
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! <br /> ПОДАРИТЕ ЕМУ СОБАКУ!
      </h2>
      <img className={s.img} src={QRCode} alt="QR Code" />
      <span className={s.text}>Сканируйте QR-код или нажмите ОК</span>
      <button className="btn" type="button" style={{ padding: '0px 67px' }}>
        OK
      </button>
    </div>
  </div>
);
