import React, { ReactElement, useCallback, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { EnterPhoneScreen } from 'components/enterPhoneScreen/EnterPhoneScreen';
import { setIsEnterPhoneScreenShowedAC, setIsVideoPlayingAC } from 'store/app-reducer';
import { AppRootStateType } from 'store/store';

export const EnterPhoneScreenContainer = React.memo((): ReactElement => {
  const dispatch = useDispatch();

  const isPhoneSend = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.isPhoneNumberSend,
  );
  const videoRef = useRef<HTMLVideoElement>(null);
  const playVideo = (): Promise<void> | null =>
    videoRef && videoRef.current && videoRef.current.play();
  const closeWindow = useCallback((): void => {
    dispatch(setIsEnterPhoneScreenShowedAC(false));
    dispatch(setIsVideoPlayingAC(true));
    playVideo();
  }, [videoRef, playVideo, dispatch]);

  return <EnterPhoneScreen isPhoneSend={isPhoneSend} closeWindow={closeWindow} />;
});
