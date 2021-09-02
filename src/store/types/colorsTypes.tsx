export const CHANGE_TO_LIGHT_MODE = 'CHANGE_TO_LIGHT_MODE';
export const CHANGE_TO_DARK_MODE = 'CHANGE_TO_DARK_MODE';

export interface IChangeToDarkModeAction {
  type: typeof CHANGE_TO_DARK_MODE;
}

export interface IChangeToLightModeAction {
  type: typeof CHANGE_TO_LIGHT_MODE;
}

export interface ColorsState {
  background: string;
  primary: string;
  lightPrimary: string;
  secondary: string;
  black: string;
  white: string;
  white2: string;
  white3: string;
  text: string;
  grey: string;
  lightGrey: string;
  inactive: string;
  danger: string;
  warning: string;
  success: string;
  darkGreen: string;
}

export type ColorActionsType =
  | IChangeToDarkModeAction
  | IChangeToLightModeAction;
