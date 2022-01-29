import React, { ReactElement, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { MicroSite } from 'components/microSite/MicroSite';
import { setIsBannerShowedACT } from 'store/app-reducer';
import { AppRootStateType } from 'store/store';

export const MicroSiteContainer = (): ReactElement => {
  const dispatch = useDispatch();
  const timeToShowBanner = 5;
  const isBannerShowed = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.isBannerShowed,
  );
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentTime = (): void => {
    if (
      (videoRef && videoRef.current && Math.trunc(videoRef.current.currentTime)) ===
      timeToShowBanner
    ) {
      dispatch(setIsBannerShowedACT(true));
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const keyBoardNumbersArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <MicroSite
      isBannerShowed={isBannerShowed}
      videoRef={videoRef}
      currentTime={currentTime}
      keyBoardNumbersArray={keyBoardNumbersArray}
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
