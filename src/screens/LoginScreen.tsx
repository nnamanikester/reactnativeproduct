import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import * as UI from '../components/common';
import SVG from '../components/SVG';
import {IRootState} from '../store/reducers';

export interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const colors = useSelector((state: IRootState) => state.colors);
  const [showError, setShowError] = React.useState<boolean>(false);

  const styles = StyleSheet.create({
    logoBg: {
      position: 'absolute',
      bottom: hd(-8),
    },
    line: {
      width: wd('50%'),
      height: 1,
      backgroundColor: colors.primary,
    },
    error: {
      height: hd('3%'),
      width: hd('100%'),
      position: 'absolute',
      top: 0,
      zIndex: 1,
    },
  });

  function onLogin() {
    setShowError(true);
    setTimeout(() => setShowError(false), 3000);
  }

  return (
    <>
      {showError && (
        <UI.Block style={styles.error} middle backgroundColor={colors.danger}>
          <UI.Text note>Invalid username or password</UI.Text>
        </UI.Block>
      )}

      <UI.Layout>
        <UI.Block style={{paddingHorizontal: 20}}>
          <UI.Spacer medium />

          <SVG name="logo" size="40" />

          <UI.Spacer large />

          <UI.Text h1 color={colors.primary}>
            Sign up
          </UI.Text>
          <UI.Text color={colors.primary}>Enter login credentails</UI.Text>

          <UI.Spacer large />

          <UI.Block>
            <UI.Text color={colors.primary} bold>
              Username / Email address
            </UI.Text>
            <UI.TextInput
              iconLeft={<UI.Icon name="at" />}
              placeholder="sam.doe@gmail.com"
            />
          </UI.Block>

          <UI.Spacer medium />

          <UI.Block>
            <UI.Text color={colors.primary} bold>
              Password
            </UI.Text>
            <UI.TextInput
              password
              iconLeft={<UI.Icon type="SimpleLineIcons" name="lock" />}
              placeholder="secure password"
            />
          </UI.Block>

          <UI.Spacer large />

          <UI.Block>
            <UI.Button
              onClick={onLogin}
              iconLeft={<></>}
              iconRight={<UI.Icon color={colors.white} name="arrow-forward" />}>
              <UI.Text size={hd('1.8')} color={colors.white}>
                LOG IN
              </UI.Text>
            </UI.Button>
          </UI.Block>

          <UI.Spacer large />

          <View style={styles.line} />

          <UI.Spacer large />

          <UI.Block row>
            <UI.Text color={colors.primary}>Dont’ have an account?</UI.Text>
            <UI.Spacer />
            <UI.Link
              onClick={() => navigation.navigate('Register')}
              textStyle={{fontWeight: 'bold', fontSize: hd('2.3')}}>
              Create Account
            </UI.Link>
          </UI.Block>
        </UI.Block>
      </UI.Layout>
      <SVG size={hd('40%')} style={styles.logoBg} name="logo-bg" />
    </>
  );
};

export default LoginScreen;
