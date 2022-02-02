import { ButtonsControlType } from 'components/phoneForm/PhoneFormContainer';

type InitialStateType = {
  buttonsControl: ButtonsControlType[];
  keyPosition: string;
};

const initialState: InitialStateType = {
  buttonsControl: [
    { id: '1', value: '1', className: 'btn' },
    { id: '2', value: '2', className: 'btn' },
    { id: '3', value: '3', className: 'btn' },
    { id: '4', value: '4', className: 'btn' },
    { id: '5', value: '5', className: 'btn' },
    { id: '6', value: '6', className: 'btn' },
    { id: '7', value: '7', className: 'btn' },
    { id: '8', value: '8', className: 'btn' },
    { id: '9', value: '9', className: 'btn' },
    { id: '0', value: '0', className: 'btn' },
    { id: '100', value: 'Стереть', className: 'btn' },
    {
      id: '110',
      value: 'Согласие на обработку персональных данных',
      className: 'checkbox',
    },
    { id: '120', value: 'ПОДТВЕРДИТЬ НОМЕР', className: 'btn' },
    { id: '130', value: 'Close', className: 'btn' },
  ],
  keyPosition: '5',
};

type ActionType = ChangeButtonPositionACType | ChangeKeyValueACType;

export const PhoneFormReducer = (
  state: InitialStateType = initialState,
  action: ActionType,
): InitialStateType => {
  switch (action.type) {
    case 'CHANGE-KEY-VALUE':
      return {
        ...state,
        keyPosition: action.position,
      };

    case 'CHANGE-BUTTON-POSITION':
      return {
        ...state,
        buttonsControl: [
          ...state.buttonsControl.map(item =>
            item.id === action.id
              ? { ...item, className: 'btn active' }
              : { ...item, className: 'btn' },
          ),
        ],
      };
    default:
      return state;
  }
};

export type ChangeKeyValueACType = ReturnType<typeof changeKeyValueAC>;

export const changeKeyValueAC = (position: string) =>
  ({
    type: 'CHANGE-KEY-VALUE',
    position,
  } as const);

export type ChangeButtonPositionACType = ReturnType<typeof changeButtonPositionAC>;

export const changeButtonPositionAC = (id: string) =>
  ({
    type: 'CHANGE-BUTTON-POSITION',
    id,
  } as const);
