import React, { ReactElement, useEffect, useRef, KeyboardEvent } from 'react';

import './App.css';

import { useDispatch, useSelector } from 'react-redux';

import { MicroSiteContainer } from 'components/microSite/MicroSiteContainer';
import { ButtonsControlType } from 'components/phoneForm/PhoneFormContainer';
import { setPhoneNumberAC } from 'store/app-reducer';
import { changeButtonPositionAC, changeKeyValueAC } from 'store/PhoneForm-reducer';
import { AppRootStateType } from 'store/store';

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const appRef = useRef<HTMLDivElement>(null);
  const phoneLength = 10;
  const buttonNumpad = useSelector<AppRootStateType, ButtonsControlType[]>(
    state => state.PhoneFormReducer.buttonsControl,
  );
  const keyValue = useSelector<AppRootStateType, string>(
    state => state.PhoneFormReducer.keyPosition,
  );
  const phoneNumber = useSelector<AppRootStateType, string>(
    state => state.appReducer.phoneNumber,
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
      dispatch(changeKeyValueAC('5'));
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
      // dispatch(changeKeyValueAC('9'));
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
      // dispatch(changeKeyValueAC('Delete'));
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
      dispatch(changeKeyValueAC('Close'));
      console.log('Arrow Right');
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
    if (keyValue === '7' && e.key === 'Enter') {
      if (phoneNumber.length < phoneLength) {
        // dispatch(setPhoneNumberAC(`${phoneNumber}7`));
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
  };

  useEffect(() => {
    focusOnApp();
    console.log(`button numpad is ${buttonNumpad}`);
    console.log(`key value is ${keyValue}`);
    console.log(`phone number is ${phoneNumber}`);
  }, [appRef, buttonNumpad, keyValue, phoneNumber]);

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
