import React, { ReactElement, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { MicroSite } from 'components/microSite/MicroSite';
import {
  setIsBannerShowedAC,
  setIsEnterPhoneScreenShowedAC,
  setIsPhoneNumberSendAC,
  setIsVideoPlayingAC,
} from 'store/app-reducer';
import { AppRootStateType } from 'store/store';

export const MicroSiteContainer = (): ReactElement => {
  const dispatch = useDispatch();
  const timeToShowBanner = 2;
  const isBannerShowed = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.isBannerShowed,
  );
  const isEnterPhoneScreenShowed = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.IsEnterPhoneScreenShowed,
  );
  const isVideoPlaying = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.isVideoPlaying,
  );
  const isPhoneSend = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.isPhoneNumberSend,
  );

  const videoRef = useRef<HTMLVideoElement>(null);

  const pauseVideo = (): void | null =>
    videoRef && videoRef.current && videoRef.current.pause();
  const playVideo = (): Promise<void> | null =>
    videoRef && videoRef.current && videoRef.current.play();

  const showBanner = (): void => {
    if (
      videoRef &&
      videoRef.current &&
      Math.trunc(videoRef.current.currentTime) &&
      (videoRef && videoRef.current && Math.trunc(videoRef.current.currentTime)) ===
        timeToShowBanner
    ) {
      dispatch(setIsBannerShowedAC(true));
    }
    if (!isVideoPlaying) {
      pauseVideo();
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const keyBoardNumbersArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const showEnterFormScreen = (): void => {
    dispatch(setIsBannerShowedAC(false));
    dispatch(setIsEnterPhoneScreenShowedAC(true));
    dispatch(setIsVideoPlayingAC(false));
  };
  const showFinalScreen = (): void => {
    dispatch(setIsPhoneNumberSendAC(true));
  };
  const closeWindow = (): void => {
    dispatch(setIsEnterPhoneScreenShowedAC(false));
    dispatch(setIsVideoPlayingAC(true));
    playVideo();
  };

  return (
    <MicroSite
      isBannerShowed={isBannerShowed}
      isVideoPlaying={isVideoPlaying}
      videoRef={videoRef}
      showBanner={showBanner}
      keyBoardNumbersArray={keyBoardNumbersArray}
      isEnterPhoneScreenShowed={isEnterPhoneScreenShowed}
      showEnterFormScreen={showEnterFormScreen}
      isPhoneSend={isPhoneSend}
      showFinalScreen={showFinalScreen}
      closeWindow={closeWindow}
    />
  );
};
// import React, { ReactElement, useEffect, useRef } from 'react';
//
// import { useDispatch, useSelector } from 'react-redux';
//
// import { MicroSite } from 'components/microSite/MicroSite';
// import { setIsBannerShowedACT } from 'store/app-reducer';
// import { AppRootStateType } from 'store/store';
