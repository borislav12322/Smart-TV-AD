import React, { ChangeEvent, ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { PhoneForm } from 'components/phoneForm/PhoneForm';
import {
  setCheckBoxValueAC,
  setIsErrorShowedAC,
  setIsPhoneNumberSendAC,
  setPhoneNumberAC,
} from 'store/app-reducer';
import { changeButtonPositionAC, changeKeyValueAC } from 'store/PhoneForm-reducer';
import { AppRootStateType } from 'store/store';

export type ButtonsControlType = {
  id: string;
  value: string;
  className: string;
};

export const PhoneFormContainer = React.memo((): ReactElement => {
  const dispatch = useDispatch();

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
  const defaultNumberCount = 0;
  const buttonsNumberArray = buttonsControl.filter(item => +item.id <= +'9');
  const buttonDelete = buttonsControl.filter(item => item.id === '100');
  const checkboxItem = buttonsControl.filter(item => item.id === '110');
  const buttonSend = buttonsControl.filter(item => item.id === '120');

  const deleteNumber = (id: string): void => {
    const newArr = phoneNumber.split('');
    newArr.pop();
    dispatch(changeKeyValueAC(id));
    dispatch(setPhoneNumberAC(newArr.join('')));
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
  const onMouseMoveHandle = (id: string): void => {
    dispatch(changeKeyValueAC(id));
  };

  useEffect(() => {
    dispatch(setPhoneNumberAC(phoneNumber));
  }, [phoneNumber, dispatch]);
  useEffect(() => {
    if (phoneNumber.length >= symbolsLength) {
      dispatch(changeKeyValueAC('100'));
      dispatch(changeButtonPositionAC('100'));
    }
  }, [dispatch, phoneNumber, symbolsLength]);

  return (
    <PhoneForm
      showFinalScreen={showFinalScreen}
      deleteNumber={deleteNumber}
      checkBoxChangeHandle={checkBoxChangeHandle}
      isChecked={isChecked}
      isPhoneValidate={isPhoneValidate}
      symbolsLength={symbolsLength}
      defaultNumberCount={defaultNumberCount}
      phoneNumber={phoneNumber}
      isErrorShowed={isErrorShowed}
      buttonsNumberArray={buttonsNumberArray}
      checkboxItem={checkboxItem}
      keyValue={keyValue}
      buttonSend={buttonSend}
      addNumber={addNumber}
      buttonDelete={buttonDelete}
      onMouseMoveHandle={onMouseMoveHandle}
    />
  );
});
