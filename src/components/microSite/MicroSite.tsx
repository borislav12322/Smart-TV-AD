import React, { RefObject, ReactElement, ChangeEvent } from 'react';

import Video from '../../assets/videos/volvo.mp4';

import s from './microSite.module.css';

import { EnterPhoneScreen } from 'components/enterPhoneScreen/EnterPhoneScreen';
import { PromoBanner } from 'components/promoBanner/PromoBanner';

type PropsType = {
  isBannerShowed: boolean;
  isEnterPhoneScreenShowed: boolean;
  videoRef: RefObject<HTMLVideoElement>;
  showBanner: () => void;
  keyBoardNumbersArray: string[];
  showEnterFormScreen: () => void;
  isVideoPlaying: boolean;
  isPhoneSend: boolean;
  showFinalScreen: () => void;
  closeWindow: () => void;
  addNumber: (e: any) => void;
  deleteNumber: () => void;
  onChangeHandle: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const MicroSite = ({
  isBannerShowed,
  videoRef,
  showBanner,
  keyBoardNumbersArray,
  isEnterPhoneScreenShowed,
  showEnterFormScreen,
  isVideoPlaying,
  isPhoneSend,
  showFinalScreen,
  closeWindow,
  addNumber,
  deleteNumber,
  onChangeHandle,
}: PropsType): ReactElement => (
  <div className={s.container}>
    <div className={s.wrapper}>
      <video className={s.video} ref={videoRef} onTimeUpdate={showBanner} autoPlay muted>
        <source src={Video} type="video/mp4" />
        <track default kind="captions" srcLang="en" src="/media/examples/friday.vtt" />
        Captions
      </video>
      {!isEnterPhoneScreenShowed && (
        <PromoBanner
          isBannerShowed={isBannerShowed}
          showEnterFormScreen={showEnterFormScreen}
        />
      )}
      {isEnterPhoneScreenShowed && (
        <EnterPhoneScreen
          keyBoardNumbersArray={keyBoardNumbersArray}
          isPhoneSend={isPhoneSend}
          showFinalScreen={showFinalScreen}
          closeWindow={closeWindow}
          addNumber={addNumber}
          deleteNumber={deleteNumber}
          onChangeHandle={onChangeHandle}
        />
      )}
    </div>
  </div>
);
