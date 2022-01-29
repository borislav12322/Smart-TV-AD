type ActionsType = SetIsBannerShowedACType;
type InitialStateType = {
  isBannerShowed: boolean;
};

const initialState: InitialStateType = {
  isBannerShowed: false,
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
    default:
      return state;
  }
};

export type SetIsBannerShowedACType = ReturnType<typeof setIsBannerShowedACT>;

export const setIsBannerShowedACT = (isShowed: boolean) =>
  ({
    type: 'SET-BANNER-IS-SHOWED',
    isShowed,
  } as const);
