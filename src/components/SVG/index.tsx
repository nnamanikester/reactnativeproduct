import React from 'react';
import {View, ViewProps} from 'react-native';
import * as UI from '../common';
import {useSelector} from 'react-redux';
import {IRootState} from '../../store/reducers';

export interface SVGProps extends ViewProps {
  name: string;
  size?: string | number;
  color?: string;
  width?: string | number;
  height?: string | number;
}

const SVGIcon: React.FC<SVGProps> = ({
  name,
  size = 28,
  color,
  style,
  width,
  height,
}) => {
  let Icon: React.ReactNode = () => <></>;

  const colors = useSelector((state: IRootState) => state.colors);

  switch (name) {
    case 'logo':
      Icon = require('./Logo').default;
      break;
    case 'logo-bg':
      Icon = require('./LogoBg').default;
      break;
    default:
      Icon = () => <UI.Text color="red">??</UI.Text>;
      break;
  }

  return (
    <View style={style}>
      <Icon
        width={width || size}
        height={height || size}
        fill={color || colors.primary}
      />
    </View>
  );
};

export default SVGIcon;
