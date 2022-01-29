import React, { RefObject, ReactElement } from 'react';

import Video from '../../assets/videos/volvo.mp4';

import s from './microSite.module.css';

import { EnterPhoneScreen } from 'components/enterPhoneScreen/EnterPhoneScreen';
import { PromoBanner } from 'components/promoBanner/PromoBanner';

type PropsType = {
  isBannerShowed: boolean;
  videoRef: RefObject<HTMLVideoElement>;
  currentTime: () => void;
  keyBoardNumbersArray: number[];
};

export const MicroSite = ({
  isBannerShowed,
  videoRef,
  currentTime,
  keyBoardNumbersArray,
}: PropsType): ReactElement => (
  <div className={s.container}>
    <div className={s.wrapper}>
      <video
        className={s.video}
        ref={videoRef}
        onTimeUpdate={currentTime}
        autoPlay
        controls
        muted
      >
        <source src={Video} type="video/mp4" />
        <track default kind="captions" srcLang="en" src="/media/examples/friday.vtt" />
        Captions
      </video>
      <PromoBanner isBannerShowed={isBannerShowed} />
      <EnterPhoneScreen keyBoardNumbersArray={keyBoardNumbersArray} />
    </div>
  </div>
);
