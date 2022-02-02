import React, { ChangeEvent, ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { PhoneForm } from 'components/phoneForm/PhoneForm';
import {
  setCheckBoxValueAC,
  setIsErrorShowedAC,
  setIsPhoneNumberSendAC,
  setPhoneNumberAC,
} from 'store/app-reducer';
import { changeKeyValueAC } from 'store/PhoneForm-reducer';
import { AppRootStateType } from 'store/store';

export type ButtonsControlType = {
  id: string;
  value: string;
  className: string;
};

export const PhoneFormContainer = (): ReactElement => {
  const dispatch = useDispatch();
  // const phoneLength = 10;

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
  const keyValue = useSelector<AppRootStateType, string>(
    state => state.PhoneFormReducer.keyPosition,
  );
  const symbolsLength = 10;
  const buttonsNumberArray = buttonsControl.filter(item => +item.id <= +'9');
  const buttonDelete = buttonsControl.filter(item => item.id === '100');
  const checkboxItem = buttonsControl.filter(item => item.id === '110');
  const buttonSend = buttonsControl.filter(item => item.id === '120');
  const closeBtn = buttonsControl.filter(item => item.id === '130');

  const deleteNumber = (id: string): void => {
    const newArr = phoneNumber.split('');
    newArr.pop();
    dispatch(changeKeyValueAC(id));
    dispatch(setPhoneNumberAC(newArr.join('')));
    console.log('Delete');
    if (isErrorShowed) {
      dispatch(setPhoneNumberAC(''));
      dispatch(setIsErrorShowedAC(false));
      dispatch(setCheckBoxValueAC(false));
    }
  };

  const checkBoxChangeHandle = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setCheckBoxValueAC(e.currentTarget.checked));
  };

  const showFinalScreen = (): void => {
    dispatch(setIsPhoneNumberSendAC(true));
  };
  const addNumber = (id: string): void => {
    dispatch(changeKeyValueAC(id));
    dispatch(setPhoneNumberAC(phoneNumber + id));
  };

  useEffect(() => {
    dispatch(setPhoneNumberAC(phoneNumber));
    console.log(checkboxItem);
  }, [phoneNumber, dispatch]);
  useEffect(() => {
    if (phoneNumber.length >= symbolsLength) {
      dispatch(changeKeyValueAC('100'));
      console.log('1000000');
    }
  }, [phoneNumber, dispatch]);

  return (
    <PhoneForm
      showFinalScreen={showFinalScreen}
      deleteNumber={deleteNumber}
      checkBoxChangeHandle={checkBoxChangeHandle}
      isChecked={isChecked}
      isPhoneValidate={isPhoneValidate}
      symbolsLength={symbolsLength}
      phoneNumber={phoneNumber}
      isErrorShowed={isErrorShowed}
      buttonsControl={buttonsControl}
      buttonsNumberArray={buttonsNumberArray}
      checkboxItem={checkboxItem}
      keyValue={keyValue}
      buttonSend={buttonSend}
      closeBtn={closeBtn}
      addNumber={addNumber}
      buttonDelete={buttonDelete}
    />
  );
};
