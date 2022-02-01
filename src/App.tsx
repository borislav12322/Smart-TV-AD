import React, { ReactElement, useEffect, useRef, KeyboardEvent } from 'react';

import './App.css';

import { useDispatch, useSelector } from 'react-redux';

import { MicroSiteContainer } from 'components/microSite/MicroSiteContainer';
import { ButtonsControlType } from 'components/phoneForm/PhoneFormContainer';
import {
  setCheckBoxValueAC,
  setIsPhoneNumberSendAC,
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
  const checkBoxValue = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.checkBoxValue,
  );

  const focusOnApp = (): void => {
    if (appRef && appRef.current) {
      appRef.current.focus();
    }
  };

  const onKeyDownHandle = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (keyValue === '1' && e.key === 'ArrowUp') {
      // dispatch(changeKeyValueAC('1'));
      console.log('Arrow Up');
    }
    if (keyValue === '1' && e.key === 'ArrowDown') {
      dispatch(changeKeyValueAC('4'));
      console.log('Arrow Down');
    }
    if (keyValue === '1' && e.key === 'ArrowLeft') {
      // dispatch(changeKeyValueAC('1'));
      console.log('Arrow Left');
    }
    if (keyValue === '1' && e.key === 'ArrowRight') {
      dispatch(changeKeyValueAC('2'));
      console.log('Arrow Right');
    }
    if (keyValue === '2' && e.key === 'ArrowUp') {
      // dispatch(changeKeyValueAC('1'));
      console.log('Arrow Up');
    }
    if (keyValue === '2' && e.key === 'ArrowDown') {
      dispatch(changeKeyValueAC('5'));
      console.log('Arrow Down');
    }
    if (keyValue === '2' && e.key === 'ArrowLeft') {
      dispatch(changeKeyValueAC('1'));
      console.log('Arrow Left');
    }
    if (keyValue === '2' && e.key === 'ArrowRight') {
      dispatch(changeKeyValueAC('3'));
      console.log('Arrow Right');
    }
    if (keyValue === '3' && e.key === 'ArrowUp') {
      // dispatch(changeKeyValueAC('1'));
      console.log('Arrow Up');
    }
    if (keyValue === '3' && e.key === 'ArrowDown') {
      dispatch(changeKeyValueAC('6'));
      console.log('Arrow Down');
    }
    if (keyValue === '3' && e.key === 'ArrowLeft') {
      dispatch(changeKeyValueAC('2'));
      console.log('Arrow Left');
    }
    if (keyValue === '3' && e.key === 'ArrowRight') {
      // dispatch(changeKeyValueAC('5'));
      console.log('Arrow Right');
    }
    if (keyValue === '4' && e.key === 'ArrowUp') {
      dispatch(changeKeyValueAC('1'));
      console.log('Arrow Up');
    }
    if (keyValue === '4' && e.key === 'ArrowDown') {
      dispatch(changeKeyValueAC('7'));
      console.log('Arrow Down');
    }
    if (keyValue === '4' && e.key === 'ArrowLeft') {
      e.stopPropagation();
      console.log('Arrow Left');
    }
    if (keyValue === '4' && e.key === 'ArrowRight') {
      dispatch(changeKeyValueAC('5'));
      console.log('Arrow Right');
    }
    if (keyValue === '5' && e.key === 'ArrowUp') {
      dispatch(changeKeyValueAC('2'));
      console.log('Arrow Up');
    }
    if (keyValue === '5' && e.key === 'ArrowDown') {
      dispatch(changeKeyValueAC('8'));
      console.log('Arrow Down');
    }
    if (keyValue === '5' && e.key === 'ArrowLeft') {
      dispatch(changeKeyValueAC('4'));
      console.log('Arrow Left');
    }
    if (keyValue === '5' && e.key === 'ArrowRight') {
      dispatch(changeKeyValueAC('6'));
      console.log('Arrow Right');
    }
    if (keyValue === '6' && e.key === 'ArrowUp') {
      dispatch(changeKeyValueAC('3'));
      console.log('Arrow Up');
    }
    if (keyValue === '6' && e.key === 'ArrowDown') {
      dispatch(changeKeyValueAC('9'));
      console.log('Arrow Down');
    }
    if (keyValue === '6' && e.key === 'ArrowLeft') {
      dispatch(changeKeyValueAC('5'));
      console.log('Arrow Left');
    }
    if (keyValue === '6' && e.key === 'ArrowRight') {
      // dispatch(changeKeyValueAC('Close'));
      console.log('Arrow Right');
    }
    if (keyValue === '7' && e.key === 'ArrowUp') {
      dispatch(changeKeyValueAC('4'));
      console.log('Arrow Up');
    }
    if (keyValue === '7' && e.key === 'ArrowDown') {
      dispatch(changeKeyValueAC('100'));
      console.log('Arrow Down');
    }
    if (keyValue === '7' && e.key === 'ArrowLeft') {
      // dispatch(changeKeyValueAC('5'));
      console.log('Arrow Left');
    }
    if (keyValue === '7' && e.key === 'ArrowRight') {
      dispatch(changeKeyValueAC('8'));
      console.log('Arrow Right');
    }
    if (keyValue === '8' && e.key === 'ArrowUp') {
      dispatch(changeKeyValueAC('5'));
      console.log('Arrow Up');
    }
    if (keyValue === '8' && e.key === 'ArrowDown') {
      dispatch(changeKeyValueAC('100'));
      console.log('Arrow Down');
    }
    if (keyValue === '8' && e.key === 'ArrowLeft') {
      dispatch(changeKeyValueAC('7'));
      console.log('Arrow Left');
    }
    if (keyValue === '8' && e.key === 'ArrowRight') {
      dispatch(changeKeyValueAC('9'));
      console.log('Arrow Right');
    }
    if (keyValue === '9' && e.key === 'ArrowUp') {
      dispatch(changeKeyValueAC('6'));
      console.log('Arrow Up');
    }
    if (keyValue === '9' && e.key === 'ArrowDown') {
      dispatch(changeKeyValueAC('0'));
      console.log('Arrow Down');
    }
    if (keyValue === '9' && e.key === 'ArrowLeft') {
      dispatch(changeKeyValueAC('8'));
      console.log('Arrow Left');
    }
    if (keyValue === '9' && e.key === 'ArrowRight') {
      // dispatch(changeKeyValueAC('Close'));
      console.log('Arrow Right');
    }
    if (keyValue === '0' && e.key === 'ArrowUp') {
      dispatch(changeKeyValueAC('9'));
      console.log('Arrow Up');
    }
    if (keyValue === '0' && e.key === 'ArrowDown') {
      // dispatch(changeKeyValueAC('0'));
      console.log('Arrow Down');
    }
    if (keyValue === '0' && e.key === 'ArrowLeft') {
      dispatch(changeKeyValueAC('100'));
      console.log('Arrow Left');
    }
    if (keyValue === '0' && e.key === 'ArrowRight') {
      // dispatch(changeKeyValueAC('Close'));
      console.log('Arrow Right');
    }
    if (keyValue === '100' && e.key === 'ArrowUp') {
      dispatch(changeKeyValueAC('8'));
      console.log('Arrow Up');
    }
    if (keyValue === '100' && e.key === 'ArrowDown') {
      dispatch(changeKeyValueAC('110'));
      console.log('Arrow Down');
    }
    if (keyValue === '100' && e.key === 'ArrowLeft') {
      // dispatch(changeKeyValueAC('8'));
      console.log('Arrow Left');
    }
    if (keyValue === '100' && e.key === 'ArrowRight') {
      dispatch(changeKeyValueAC('0'));
      console.log('Arrow Right');
    }
    if (keyValue === '110' && e.key === 'ArrowUp') {
      dispatch(changeKeyValueAC('100'));
      console.log('Arrow Up');
    }
    if (keyValue === '110' && e.key === 'ArrowDown' && isPhoneValidate) {
      dispatch(changeKeyValueAC('120'));
      console.log('Arrow Down');
    }
    if (keyValue === '110' && e.key === 'ArrowLeft') {
      // dispatch(changeKeyValueAC('8'));
      console.log('Arrow Left');
    }
    if (keyValue === '110' && e.key === 'ArrowRight') {
      dispatch(changeKeyValueAC('0'));
      console.log('Arrow Right');
    }

    if (keyValue === '120' && e.key === 'ArrowUp') {
      dispatch(changeKeyValueAC('110'));
      console.log('Arrow Up');
    }
    if (keyValue === '120' && e.key === 'ArrowDown') {
      console.log('Arrow Down');
    }

    if (keyValue === '1' && e.key === 'Enter') {
      if (phoneNumber.length < phoneLength) {
        dispatch(setPhoneNumberAC(`${phoneNumber}1`));
      }
    }
    if (keyValue === '2' && e.key === 'Enter') {
      if (phoneNumber.length < phoneLength) {
        dispatch(setPhoneNumberAC(`${phoneNumber}2`));
      }
    }
    if (keyValue === '3' && e.key === 'Enter') {
      if (phoneNumber.length < phoneLength) {
        dispatch(setPhoneNumberAC(`${phoneNumber}3`));
      }
    }
    if (keyValue === '4' && e.key === 'Enter') {
      if (phoneNumber.length < phoneLength) {
        dispatch(setPhoneNumberAC(`${phoneNumber}4`));
      }
    }
    if (keyValue === '5' && e.key === 'Enter') {
      if (phoneNumber.length < phoneLength) {
        dispatch(setPhoneNumberAC(`${phoneNumber}5`));
      }
    }
    if (keyValue === '6' && e.key === 'Enter') {
      if (phoneNumber.length < phoneLength) {
        dispatch(setPhoneNumberAC(`${phoneNumber}6`));
      }
    }
    if (
      keyValue === '7' &&
      e.key === 'Enter' &&
      phoneNumber.length !== defaultPhoneLength
    ) {
      if (phoneNumber.length < phoneLength) {
        dispatch(setPhoneNumberAC(`${phoneNumber}7`));
        console.log('Enter 7');
      }
    }
    if (keyValue === '8' && e.key === 'Enter') {
      if (phoneNumber.length < phoneLength) {
        dispatch(setPhoneNumberAC(`${phoneNumber}8`));
      }
    }
    if (keyValue === '9' && e.key === 'Enter') {
      if (phoneNumber.length < phoneLength) {
        dispatch(setPhoneNumberAC(`${phoneNumber}9`));
      }
    }
    if (keyValue === '0' && e.key === 'Enter') {
      if (phoneNumber.length < phoneLength) {
        dispatch(setPhoneNumberAC(`${phoneNumber}0`));
      }
    }
    if (keyValue === '100' && e.key === 'Enter') {
      console.log('Delete');
    }
    if (keyValue === '110' && e.key === 'Enter') {
      if (checkBoxValue) {
        dispatch(setCheckBoxValueAC(false));
      } else {
        dispatch(setCheckBoxValueAC(true));
      }
      console.log('Checked');
    }
    if (keyValue === '120' && e.key === 'Enter' && isPhoneValidate) {
      dispatch(setIsPhoneNumberSendAC(true));
    }
  };

  useEffect(() => {
    focusOnApp();
    // console.log(`button numpad is ${buttonNumpad}`);
    console.log(`key value is ${keyValue}`);
    console.log(`phone number is ${phoneNumber}`);
    console.log(`Checked is ${checkBoxValue}`);
  }, [appRef, buttonNumpad, keyValue, phoneNumber, checkBoxValue]);

  useEffect(() => {
    dispatch(changeButtonPositionAC(keyValue));
    dispatch(setPhoneNumberAC(phoneNumber));
  }, [keyValue]);

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
