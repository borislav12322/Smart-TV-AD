type ActionsType =
  | SetIsBannerShowedACType
  | SetIsEnterPhoneScreenShowedACType
  | SetIsVideoPlayingACType;

type InitialStateType = {
  isBannerShowed: boolean;
  IsEnterPhoneScreenShowed: boolean;
  isVideoPlaying: boolean;
};

const initialState: InitialStateType = {
  isBannerShowed: false,
  IsEnterPhoneScreenShowed: false,
  isVideoPlaying: true,
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
