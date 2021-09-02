import * as React from 'react';
import * as UI from '../components/common';
import SVG from '../components/SVG';

export interface LoginScreenProps {
  navigation: any;
}

type Props = LoginScreenProps;

const LoginScreen: React.FC<Props> = () => {
  return (
    <>
      <SVG name="logo" size="40" />

      <UI.Text h1>Hello</UI.Text>
    </>
  );
};

export default LoginScreen;
