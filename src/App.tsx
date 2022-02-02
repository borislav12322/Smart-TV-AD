import React, { ReactElement, useEffect, useRef, KeyboardEvent } from 'react';

import './App.css';

import { useDispatch, useSelector } from 'react-redux';

import { MicroSiteContainer } from 'components/microSite/MicroSiteContainer';
import { ButtonsControlType } from 'components/phoneForm/PhoneFormContainer';
// import { Slider } from 'components/slider/Slider';
import {
  setCheckBoxValueAC,
  setIsBannerShowedAC,
  setIsEnterPhoneScreenShowedAC,
  setIsErrorShowedAC,
  setIsPhoneNumberSendAC,
  setIsVideoPlayingAC,
  setPhoneNumberAC,
} from 'store/app-reducer';
import { changeButtonPositionAC, changeKeyValueAC } from 'store/PhoneForm-reducer';
import { AppRootStateType } from 'store/store';

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const appRef = useRef<HTMLDivElement>(null);
  const phoneLength = 10;
  const defaultPhoneLength = 0;
  const buttonNumpad = useSelector<AppRootStateType, ButtonsControlType[]>(
    state => state.PhoneFormReducer.buttonsControl,
  );
  const keyValue = useSelector<AppRootStateType, string>(
    state => state.PhoneFormReducer.keyPosition,
  );
  const phoneNumber = useSelector<AppRootStateType, string>(
    state => state.appReducer.phoneNumber,
  );
  const isPhoneValidate = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.isPhoneValidate,
  );
  const isBannerShowed = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.isBannerShowed,
  );
  const checkBoxValue = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.checkBoxValue,
  );
  const isPhoneSend = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.isPhoneNumberSend,
  );
  const isErrorShowed = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.isErrorShowed,
  );

  const focusOnApp = (): void => {
    if (appRef && appRef.current) {
      appRef.current.focus();
    }
  };

  const onKeyDownHandle = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (keyValue === '1' && e.key === 'ArrowUp') {
      e.stopPropagation();
    }
    if (keyValue === '1' && e.key === 'ArrowDown') {
      dispatch(changeKeyValueAC('4'));
    }
    if (keyValue === '1' && e.key === 'ArrowLeft') {
      e.stopPropagation();
    }
    if (keyValue === '1' && e.key === 'ArrowRight') {
      dispatch(changeKeyValueAC('2'));
    }
    if (keyValue === '2' && e.key === 'ArrowUp') {
      e.stopPropagation();
    }
    if (keyValue === '2' && e.key === 'ArrowDown') {
      dispatch(changeKeyValueAC('5'));
    }
    if (keyValue === '2' && e.key === 'ArrowLeft') {
      dispatch(changeKeyValueAC('1'));
    }
    if (keyValue === '2' && e.key === 'ArrowRight') {
      dispatch(changeKeyValueAC('3'));
    }
    if (keyValue === '3' && e.key === 'ArrowUp') {
      e.stopPropagation();
    }
    if (keyValue === '3' && e.key === 'ArrowDown') {
      dispatch(changeKeyValueAC('6'));
    }
    if (keyValue === '3' && e.key === 'ArrowLeft') {
      dispatch(changeKeyValueAC('2'));
    }
    if (keyValue === '3' && e.key === 'ArrowRight') {
      dispatch(changeKeyValueAC('130'));
    }
    if (keyValue === '4' && e.key === 'ArrowUp') {
      dispatch(changeKeyValueAC('1'));
    }
    if (keyValue === '4' && e.key === 'ArrowDown') {
      dispatch(changeKeyValueAC('7'));
    }
    if (keyValue === '4' && e.key === 'ArrowLeft') {
      e.stopPropagation();
    }
    if (keyValue === '4' && e.key === 'ArrowRight') {
      dispatch(changeKeyValueAC('5'));
    }
    if (keyValue === '5' && e.key === 'ArrowUp') {
      dispatch(changeKeyValueAC('2'));
    }
    if (keyValue === '5' && e.key === 'ArrowDown') {
      dispatch(changeKeyValueAC('8'));
    }
    if (keyValue === '5' && e.key === 'ArrowLeft') {
      dispatch(changeKeyValueAC('4'));
    }
    if (keyValue === '5' && e.key === 'ArrowRight') {
      dispatch(changeKeyValueAC('6'));
    }
    if (keyValue === '6' && e.key === 'ArrowUp') {
      dispatch(changeKeyValueAC('3'));
    }
    if (keyValue === '6' && e.key === 'ArrowDown') {
      dispatch(changeKeyValueAC('9'));
    }
    if (keyValue === '6' && e.key === 'ArrowLeft') {
      dispatch(changeKeyValueAC('5'));
    }
    if (keyValue === '6' && e.key === 'ArrowRight') {
      dispatch(changeKeyValueAC('130'));
    }
    if (keyValue === '7' && e.key === 'ArrowUp') {
      dispatch(changeKeyValueAC('4'));
    }
    if (keyValue === '7' && e.key === 'ArrowDown') {
      dispatch(changeKeyValueAC('100'));
    }
    if (keyValue === '7' && e.key === 'ArrowLeft') {
      e.stopPropagation();
    }
    if (keyValue === '7' && e.key === 'ArrowRight') {
      dispatch(changeKeyValueAC('8'));
    }
    if (keyValue === '8' && e.key === 'ArrowUp') {
      dispatch(changeKeyValueAC('5'));
    }
    if (keyValue === '8' && e.key === 'ArrowDown') {
      dispatch(changeKeyValueAC('100'));
    }
    if (keyValue === '8' && e.key === 'ArrowLeft') {
      dispatch(changeKeyValueAC('7'));
    }
    if (keyValue === '8' && e.key === 'ArrowRight') {
      dispatch(changeKeyValueAC('9'));
    }
    if (keyValue === '9' && e.key === 'ArrowUp') {
      dispatch(changeKeyValueAC('6'));
    }
    if (keyValue === '9' && e.key === 'ArrowDown') {
      dispatch(changeKeyValueAC('0'));
    }
    if (keyValue === '9' && e.key === 'ArrowLeft') {
      dispatch(changeKeyValueAC('8'));
    }
    if (keyValue === '9' && e.key === 'ArrowRight') {
      dispatch(changeKeyValueAC('130'));
    }
    if (keyValue === '0' && e.key === 'ArrowUp') {
      dispatch(changeKeyValueAC('9'));
    }
    if (keyValue === '0' && e.key === 'ArrowDown') {
      dispatch(changeKeyValueAC('110'));
    }
    if (keyValue === '0' && e.key === 'ArrowLeft') {
      dispatch(changeKeyValueAC('100'));
    }
    if (keyValue === '0' && e.key === 'ArrowRight') {
      dispatch(changeKeyValueAC('130'));
    }
    if (keyValue === '100' && e.key === 'ArrowUp') {
      dispatch(changeKeyValueAC('8'));
    }
    if (keyValue === '100' && e.key === 'ArrowDown') {
      dispatch(changeKeyValueAC('110'));
    }
    if (keyValue === '100' && e.key === 'ArrowLeft') {
      e.stopPropagation();
    }
    if (keyValue === '100' && e.key === 'ArrowRight') {
      dispatch(changeKeyValueAC('0'));
    }
    if (keyValue === '100' && e.key === 'ArrowDown' && isErrorShowed) {
      dispatch(changeKeyValueAC('100'));
    }
    if (
      keyValue === '100' &&
      (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'ArrowUp') &&
      (isErrorShowed || phoneNumber.length >= phoneLength)
    ) {
      dispatch(changeKeyValueAC('100'));
    }
    if (keyValue === '110' && e.key === 'ArrowUp') {
      dispatch(changeKeyValueAC('100'));
    }
    if (keyValue === '110' && e.key === 'ArrowDown' && isPhoneValidate) {
      dispatch(changeKeyValueAC('120'));
    }
    if (keyValue === '110' && e.key === 'ArrowLeft') {
      e.stopPropagation();
    }
    if (keyValue === '110' && e.key === 'ArrowRight') {
      e.stopPropagation();
    }
    if (keyValue === '120' && e.key === 'ArrowUp') {
      dispatch(changeKeyValueAC('110'));
    }
    if (keyValue === '120' && e.key === 'ArrowDown') {
      e.stopPropagation();
    }

    if (keyValue === '130' && e.key === 'ArrowLeft' && !isPhoneSend) {
      dispatch(changeKeyValueAC('6'));
    }
    if (keyValue === '130' && e.key === 'ArrowRight') {
      e.stopPropagation();
    }
    if (
      keyValue === '130' &&
      (e.key === 'ArrowRight' ||
        e.key === 'ArrowLeft' ||
        e.key === 'ArrowDown' ||
        e.key === 'ArrowUp') &&
      isPhoneSend
    ) {
      e.stopPropagation();
    }

    if (e.key === '1') {
      dispatch(changeKeyValueAC('1'));
    }
    if (e.key === '2') {
      dispatch(changeKeyValueAC('2'));
    }
    if (e.key === '3') {
      dispatch(changeKeyValueAC('3'));
    }
    if (e.key === '4') {
      dispatch(changeKeyValueAC('4'));
    }
    if (e.key === '5') {
      dispatch(changeKeyValueAC('5'));
    }
    if (e.key === '6') {
      dispatch(changeKeyValueAC('6'));
    }
    if (e.key === '7') {
      dispatch(changeKeyValueAC('7'));
    }
    if (e.key === '8') {
      dispatch(changeKeyValueAC('8'));
    }
    if (e.key === '9') {
      dispatch(changeKeyValueAC('9'));
    }
    if (e.key === '0') {
      dispatch(changeKeyValueAC('0'));
    }

    if ((keyValue === '1' && e.key === 'Enter') || e.key === '1') {
      if (phoneNumber.length < phoneLength) {
        dispatch(setPhoneNumberAC(`${phoneNumber}1`));
      }
    }
    if ((keyValue === '2' && e.key === 'Enter') || e.key === '2') {
      if (phoneNumber.length < phoneLength) {
        dispatch(setPhoneNumberAC(`${phoneNumber}2`));
      }
    }
    if ((keyValue === '3' && e.key === 'Enter') || e.key === '3') {
      if (phoneNumber.length < phoneLength) {
        dispatch(setPhoneNumberAC(`${phoneNumber}3`));
      }
    }
    if ((keyValue === '4' && e.key === 'Enter') || e.key === '4') {
      if (phoneNumber.length < phoneLength) {
        dispatch(setPhoneNumberAC(`${phoneNumber}4`));
      }
    }
    if ((keyValue === '5' && e.key === 'Enter') || e.key === '5') {
      if (phoneNumber.length < phoneLength) {
        dispatch(setPhoneNumberAC(`${phoneNumber}5`));
      }
    }
    if ((keyValue === '6' && e.key === 'Enter') || e.key === '6') {
      if (phoneNumber.length < phoneLength) {
        dispatch(setPhoneNumberAC(`${phoneNumber}6`));
      }
    }
    if (
      keyValue === '7' &&
      (e.key === 'Enter' || e.key === '7') &&
      phoneNumber.length !== defaultPhoneLength
    ) {
      if (phoneNumber.length < phoneLength) {
        dispatch(setPhoneNumberAC(`${phoneNumber}7`));
      }
    }
    if ((keyValue === '8' && e.key === 'Enter') || e.key === '8') {
      if (phoneNumber.length < phoneLength) {
        dispatch(setPhoneNumberAC(`${phoneNumber}8`));
      }
    }
    if ((keyValue === '9' && e.key === 'Enter') || e.key === '9') {
      if (phoneNumber.length < phoneLength) {
        dispatch(setPhoneNumberAC(`${phoneNumber}9`));
      }
    }
    if ((keyValue === '0' && e.key === 'Enter') || e.key === '0') {
      if (phoneNumber.length < phoneLength) {
        dispatch(setPhoneNumberAC(`${phoneNumber}0`));
      }
    }
    if ((keyValue === '100' && e.key === 'Enter') || e.key === 'Backspace') {
      const newArr = phoneNumber.split('');
      newArr.pop();
      dispatch(setPhoneNumberAC(newArr.join('')));
    }
    if (keyValue === '110' && e.key === 'Enter') {
      if (checkBoxValue) {
        dispatch(setCheckBoxValueAC(false));
      } else {
        dispatch(setCheckBoxValueAC(true));
      }
    }
    if (keyValue === '120' && e.key === 'Enter' && isPhoneValidate) {
      dispatch(setIsPhoneNumberSendAC(true));
    }
    if (keyValue === '130' && e.key === 'Enter') {
      dispatch(setIsEnterPhoneScreenShowedAC(false));
      dispatch(setIsVideoPlayingAC(true));
    }
    if (isBannerShowed && e.key === 'Enter') {
      dispatch(setIsBannerShowedAC(false));
      dispatch(setIsEnterPhoneScreenShowedAC(true));
      dispatch(setIsVideoPlayingAC(false));
      dispatch(changeKeyValueAC('5'));
    }
    if (isErrorShowed && e.key === 'Enter' && keyValue === '100') {
      dispatch(setIsErrorShowedAC(false));
    }
  };

  useEffect(() => {
    focusOnApp();
  }, [appRef, buttonNumpad, keyValue, phoneNumber, checkBoxValue]);

  useEffect(() => {
    dispatch(changeButtonPositionAC(keyValue));
    dispatch(setPhoneNumberAC(phoneNumber));
  }, [keyValue]);

  useEffect(() => {
    if (isPhoneSend) {
      dispatch(changeKeyValueAC('130'));
    }
  }, [isPhoneSend]);
  useEffect(() => {
    if (isErrorShowed) {
      dispatch(changeKeyValueAC('100'));
    }
  }, [isErrorShowed]);

  return (
    <div
      role="tablist"
      className="App"
      ref={appRef}
      onBlur={focusOnApp}
      tabIndex={-1}
      onKeyDown={onKeyDownHandle}
    >
      <MicroSiteContainer />
    </div>
  );
};

export default App;
