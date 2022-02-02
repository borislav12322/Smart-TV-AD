import React, { ReactElement, useCallback, useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { MicroSite } from 'components/microSite/MicroSite';
import {
  setIsBannerShowedAC,
  setPhoneNumberAC,
  validateNumberTC,
} from 'store/app-reducer';
import { AppRootStateType } from 'store/store';

export const MicroSiteContainer = React.memo((): ReactElement => {
  const dispatch = useDispatch();
  const symbolsLength = 10;
  const timeToShowBanner = 2;
  const phoneRegion = 'RU';
  const accessKey = '8e7aba359eaf9d94d1f9c3a620d9f628';

  const isEnterPhoneScreenShowed = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.IsEnterPhoneScreenShowed,
  );
  const isVideoPlaying = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.isVideoPlaying,
  );
  const phoneNumber = useSelector<AppRootStateType, string>(
    state => state.appReducer.phoneNumber,
  );
  const isChecked = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.checkBoxValue,
  );

  const videoRef = useRef<HTMLVideoElement>(null);

  const pauseVideo = (): void | null =>
    videoRef && videoRef.current && videoRef.current.pause();
  const playVideo = (): Promise<void> | null =>
    videoRef && videoRef.current && videoRef.current.play();

  const showBanner = useCallback((): void => {
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
  }, [videoRef, timeToShowBanner, dispatch, pauseVideo]);

  useEffect(() => {
    dispatch(setPhoneNumberAC(phoneNumber));
  }, [phoneNumber, isChecked, dispatch]);
  useEffect(() => {
    if (isVideoPlaying && !isEnterPhoneScreenShowed) {
      playVideo();
    }
  }, [isVideoPlaying, dispatch]);
  useEffect(() => {
    if (phoneNumber.length === symbolsLength && isChecked) {
      dispatch(validateNumberTC(accessKey, phoneNumber, phoneRegion));
    }
  }, [phoneNumber, isChecked, dispatch]);

  return (
    <MicroSite
      videoRef={videoRef}
      showBanner={showBanner}
      isEnterPhoneScreenShowed={isEnterPhoneScreenShowed}
    />
  );
});
