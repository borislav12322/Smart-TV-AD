import React, { RefObject, ReactElement } from 'react';

import Video from '../../assets/videos/volvo.mp4';

import s from './microSite.module.css';

import { EnterPhoneScreenContainer } from 'components/enterPhoneScreen/EnterPhoneScreenContainer';
import { PromoBannerContainer } from 'components/promoBanner/PromoBannerContainer';

type PropsType = {
  isEnterPhoneScreenShowed: boolean;
  videoRef: RefObject<HTMLVideoElement>;
  showBanner: () => void;
};

export const MicroSite = ({
  videoRef,
  showBanner,
  isEnterPhoneScreenShowed,
}: PropsType): ReactElement => (
  <div className={s.container}>
    <div className={s.wrapper}>
      <video className={s.video} ref={videoRef} onTimeUpdate={showBanner} autoPlay muted>
        <source src={Video} type="video/mp4" />
        <track default kind="captions" srcLang="en" src="/media/examples/friday.vtt" />
        Captions
      </video>
      {!isEnterPhoneScreenShowed && <PromoBannerContainer />}
      {isEnterPhoneScreenShowed && <EnterPhoneScreenContainer />}
    </div>
  </div>
);
