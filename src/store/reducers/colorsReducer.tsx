import {
  CHANGE_TO_DARK_MODE,
  CHANGE_TO_LIGHT_MODE,
  ColorActionsType,
  ColorsState,
} from '../types';

const dark: ColorsState = {
  background: '#FFFDFD',
  primary: '#0E69BD',
  lightPrimary: '#5ED2EC',
  secondary: '#93E4A9',
  black: '#001029',
  white: '#FFFFFF',
  white2: '#FFFFFFcc',
  white3: '#FFFFFF99',
  text: '#111111',
  grey: '#676767',
  lightGrey: '#C4C4C4',
  inactive: '#E0E0E0',
  danger: '#DD4B39',
  warning: '#FFCB27',
  success: '#93E4A9',
  darkGreen: '#0C9431',
};

const light: ColorsState = {
  background: '#FFFDFD',
  primary: '#0E69BD',
  lightPrimary: '#5ED2EC',
  secondary: '#93E4A9',
  black: '#001029',
  white: '#FFFFFF',
  white2: '#FFFFFFcc',
  white3: '#FFFFFF99',
  text: '#111111',
  grey: '#676767',
  lightGrey: '#C4C4C4',
  inactive: '#E0E0E0',
  danger: '#DD4B39',
  warning: '#FFCB27',
  success: '#93E4A9',
  darkGreen: '#0C9431',
};

const INITIAL_STATE: ColorsState = dark;

export default (
  state = INITIAL_STATE,
  action: ColorActionsType,
): ColorsState => {
  switch (action.type) {
    case CHANGE_TO_DARK_MODE:
      return dark;
    case CHANGE_TO_LIGHT_MODE:
      return light;
    default:
      return state;
  }
};
