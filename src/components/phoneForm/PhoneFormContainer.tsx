import React, { ChangeEvent, ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { PhoneForm } from 'components/phoneForm/PhoneForm';
import {
  setCheckBoxValueAC,
  setIsErrorShowedAC,
  setIsPhoneNumberSendAC,
  setPhoneNumberAC,
} from 'store/app-reducer';
import { AppRootStateType } from 'store/store';

export type ButtonsControlType = {
  id: string;
  value: string;
  className: string;
};

export const PhoneFormContainer = (): ReactElement => {
  const dispatch = useDispatch();
  const phoneLength = 10;

  const phoneNumber = useSelector<AppRootStateType, string>(
    state => state.appReducer.phoneNumber,
  );
  const isChecked = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.checkBoxValue,
  );
  const isPhoneValidate = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.isPhoneValidate,
  );
  const isErrorShowed = useSelector<AppRootStateType, boolean>(
    state => state.appReducer.isErrorShowed,
  );
  const buttonsControl = useSelector<AppRootStateType, ButtonsControlType[]>(
    state => state.PhoneFormReducer.buttonsControl,
  );
  const symbolsLength = 10;

  const deleteNumber = (): void => {
    const newArr = phoneNumber.split('');
    newArr.pop();
    dispatch(setPhoneNumberAC(newArr.join('')));
    if (isErrorShowed) {
      dispatch(setPhoneNumberAC(''));
      dispatch(setIsErrorShowedAC(false));
      dispatch(setCheckBoxValueAC(false));
    }
  };

  const addNumber = (e: any): void => {
    if (phoneNumber.length < phoneLength) {
      dispatch(setPhoneNumberAC(phoneNumber + e.currentTarget.value));
    }
  };

  const checkBoxChangeHandle = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setCheckBoxValueAC(e.currentTarget.checked));
  };

  const showFinalScreen = (): void => {
    dispatch(setIsPhoneNumberSendAC(true));
  };

  useEffect(() => {
    dispatch(setPhoneNumberAC(phoneNumber));
  }, [phoneNumber, dispatch]);

  return (
    <PhoneForm
      showFinalScreen={showFinalScreen}
      deleteNumber={deleteNumber}
      addNumber={addNumber}
      checkBoxChangeHandle={checkBoxChangeHandle}
      isChecked={isChecked}
      isPhoneValidate={isPhoneValidate}
      symbolsLength={symbolsLength}
      phoneNumber={phoneNumber}
      isErrorShowed={isErrorShowed}
      buttonsControl={buttonsControl}
    />
  );
};
