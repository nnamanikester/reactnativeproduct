import {
  CHANGE_TO_DARK_MODE,
  CHANGE_TO_LIGHT_MODE,
  ColorActionsType,
} from '../types';

export function changeToDarkMode(): ColorActionsType {
  return {type: CHANGE_TO_DARK_MODE};
}

export function changeToLightMode(): ColorActionsType {
  return {type: CHANGE_TO_LIGHT_MODE};
}
