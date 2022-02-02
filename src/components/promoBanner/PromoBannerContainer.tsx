import React, { ReactElement, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { PromoBanner } from 'components/promoBanner/PromoBanner';
import {
  setIsBannerShowedAC,
  setIsEnterPhoneScreenShowedAC,
  setIsVideoPlayingAC,
} from 'store/app-reducer';
import { changeKeyValueAC } from 'store/PhoneForm-reducer';
import { AppRootStateType } from 'store/store';

export const PromoBannerContainer = React.memo((): ReactElement => {
  const dispatch = useDispatch();
  const isBannerShowed = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.isBannerShowed,
  );
  const showEnterFormScreen = useCallback((): void => {
    dispatch(setIsBannerShowedAC(false));
    dispatch(setIsEnterPhoneScreenShowedAC(true));
    dispatch(setIsVideoPlayingAC(false));
    dispatch(changeKeyValueAC('5'));
  }, [dispatch]);
  return (
    <PromoBanner
      isBannerShowed={isBannerShowed}
      showEnterFormScreen={showEnterFormScreen}
    />
  );
});
