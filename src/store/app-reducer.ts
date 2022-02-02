import { Dispatch } from 'redux';

import { phoneAPI } from 'DAL/phoneAPI';

type ActionsType =
  | SetIsBannerShowedACType
  | SetIsEnterPhoneScreenShowedACType
  | SetIsVideoPlayingACType
  | SetIsPhoneNumberSendACType
  | SetPhoneNumberACType
  | SetCheckBoxValueACType
  | SetIsPhoneValidateACType
  | SetIsErrorShowedACType;

type InitialStateType = {
  isBannerShowed: boolean;
  IsEnterPhoneScreenShowed: boolean;
  isVideoPlaying: boolean;
  isPhoneNumberSend: boolean;
  phoneNumber: string;
  checkBoxValue: boolean;
  isPhoneValidate: boolean;
  isErrorShowed: boolean;
};

const initialState: InitialStateType = {
  isBannerShowed: false,
  IsEnterPhoneScreenShowed: false,
  isVideoPlaying: true,
  isPhoneNumberSend: false,
  phoneNumber: '',
  checkBoxValue: false,
  isPhoneValidate: false,
  isErrorShowed: false,
};

export const appReducer = (
  state: InitialStateType = initialState,
  action: ActionsType,
): InitialStateType => {
  switch (action.type) {
    case 'SET-BANNER-IS-SHOWED':
      return {
        ...state,
        isBannerShowed: action.isShowed,
      };
    case 'SET-ENTER-PHONE-SCREEN-SHOWED':
      return {
        ...state,
        IsEnterPhoneScreenShowed: action.isShowedEnterPhoneScreen,
      };
    case 'SET-IS-VIDEO-PLAYING':
      return {
        ...state,
        isVideoPlaying: action.isVideoPlaying,
      };
    case 'SET-IS-PHONE-NUMBER-SEND':
      return {
        ...state,
        isPhoneNumberSend: action.isPhoneNumberSend,
      };
    case 'SET-PHONE-NUMBER':
      return {
        ...state,
        phoneNumber: action.phoneNumber,
      };
    case 'SET-CHECKBOX-VALUE':
      return {
        ...state,
        checkBoxValue: action.value,
      };
    case 'SET-IS-PHONE-VALIDATE':
      return {
        ...state,
        isPhoneValidate: action.isValidate,
      };
    case 'SET-IS-ERROR-SHOWED':
      return {
        ...state,
        isErrorShowed: action.isError,
      };
    default:
      return state;
  }
};

export type SetIsBannerShowedACType = ReturnType<typeof setIsBannerShowedAC>;

export const setIsBannerShowedAC = (isShowed: boolean) =>
  ({
    type: 'SET-BANNER-IS-SHOWED',
    isShowed,
  } as const);

export type SetIsEnterPhoneScreenShowedACType = ReturnType<
  typeof setIsEnterPhoneScreenShowedAC
>;

export const setIsEnterPhoneScreenShowedAC = (isShowedEnterPhoneScreen: boolean) =>
  ({
    type: 'SET-ENTER-PHONE-SCREEN-SHOWED',
    isShowedEnterPhoneScreen,
  } as const);

export type SetIsVideoPlayingACType = ReturnType<typeof setIsVideoPlayingAC>;

export const setIsVideoPlayingAC = (isVideoPlaying: boolean) =>
  ({
    type: 'SET-IS-VIDEO-PLAYING',
    isVideoPlaying,
  } as const);

export type SetIsPhoneNumberSendACType = ReturnType<typeof setIsPhoneNumberSendAC>;

export const setIsPhoneNumberSendAC = (isPhoneNumberSend: boolean) =>
  ({
    type: 'SET-IS-PHONE-NUMBER-SEND',
    isPhoneNumberSend,
  } as const);

export type SetPhoneNumberACType = ReturnType<typeof setPhoneNumberAC>;

export const setPhoneNumberAC = (phoneNumber: string) =>
  ({
    type: 'SET-PHONE-NUMBER',
    phoneNumber,
  } as const);

export type SetCheckBoxValueACType = ReturnType<typeof setCheckBoxValueAC>;

export const setCheckBoxValueAC = (value: boolean) =>
  ({
    type: 'SET-CHECKBOX-VALUE',
    value,
  } as const);

export type SetIsPhoneValidateACType = ReturnType<typeof setIsPhoneValidateAC>;

export const setIsPhoneValidateAC = (isValidate: boolean) =>
  ({
    type: 'SET-IS-PHONE-VALIDATE',
    isValidate,
  } as const);

export type SetIsErrorShowedACType = ReturnType<typeof setIsErrorShowedAC>;

export const setIsErrorShowedAC = (isError: boolean) =>
  ({
    type: 'SET-IS-ERROR-SHOWED',
    isError,
  } as const);

export const validateNumberTC =
  (accessKey: string, number: string, countryCode: string) => (dispatch: Dispatch) => {
    phoneAPI
      .validatePhone(accessKey, number, countryCode)
      .then(res => {
        console.log(res.data);
        // @ts-ignore
        if (res.data.valid === true) {
          console.log('1212');
          dispatch(setIsPhoneValidateAC(true));
        } else {
          dispatch(setIsPhoneValidateAC(false));
          dispatch(setIsErrorShowedAC(true));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
