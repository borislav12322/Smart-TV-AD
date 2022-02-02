import React, { ChangeEvent, ReactElement, useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { MicroSite } from 'components/microSite/MicroSite';
import {
  setCheckBoxValueAC,
  setIsBannerShowedAC,
  setIsEnterPhoneScreenShowedAC,
  setIsErrorShowedAC,
  setIsPhoneNumberSendAC,
  setIsVideoPlayingAC,
  setPhoneNumberAC,
  validateNumberTC,
} from 'store/app-reducer';
import { AppRootStateType } from 'store/store';

export const MicroSiteContainer = (): ReactElement => {
  const dispatch = useDispatch();
  const [numberValue, setNumberValue] = useState<string>('');
  const symbolsLength = 10;
  const timeToShowBanner = 2;
  const phoneRegion = 'RU';
  const accessKey = '8e7aba359eaf9d94d1f9c3a620d9f628';
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
  const phoneNumber = useSelector<AppRootStateType, string>(
    state => state.appReducer.phoneNumber,
  );
  const isChecked = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.checkBoxValue,
  );
  const isErrorShowed = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.isErrorShowed,
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
  const keyBoardNumbersArray: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
  ];
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
  const addNumber = (e: any): void => {
    if (phoneNumber.length < symbolsLength) {
      dispatch(setPhoneNumberAC(phoneNumber + e.currentTarget.value));
    }
  };
  const deleteNumber = (): void => {
    const newArr = numberValue.split('');
    newArr.pop();
    setNumberValue(newArr.join(''));
    dispatch(setPhoneNumberAC(newArr.join('')));
    if (isErrorShowed) {
      dispatch(setPhoneNumberAC(''));
      dispatch(setIsErrorShowedAC(false));
      dispatch(setCheckBoxValueAC(false));
    }
  };
  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setCheckBoxValueAC(e.currentTarget.checked));
  };

  useEffect(() => {
    dispatch(setPhoneNumberAC(phoneNumber));
  }, [phoneNumber, isChecked]);
  useEffect(() => {
    if (isVideoPlaying && !isEnterPhoneScreenShowed) {
      playVideo();
    }
  }, [isVideoPlaying]);
  useEffect(() => {
    if (phoneNumber.length === symbolsLength && isChecked) {
      dispatch(validateNumberTC(accessKey, phoneNumber, phoneRegion));
    }
  }, [phoneNumber, isChecked]);

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
      addNumber={addNumber}
      deleteNumber={deleteNumber}
      onChangeHandle={onChangeHandle}
    />
  );
};
