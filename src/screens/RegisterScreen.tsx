import * as React from 'react';
import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import * as UI from '../components/common';
import SVG from '../components/SVG';
import {IRootState} from '../store/reducers';
import {containsNumber} from '../utils';

export interface RegisterScreenProps {
  navigation: any;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
  const colors = useSelector((state: IRootState) => state.colors);
  const [password, setPassword] = React.useState<string>('');
  const [passwordRules, setPasswordRules] = React.useState({
    hasSixChar: false,
    hasNumber: false,
  });

  const styles = StyleSheet.create({
    logoBg: {
      position: 'absolute',
      bottom: hd(-8),
    },
    roundCheck: {
      width: 30,
      height: 30,
      borderRadius: 30,
    },
  });

  function onChangePassword(val: string) {
    setPasswordRules({
      hasSixChar: val.length >= 6,
      hasNumber: containsNumber(val),
    });
    setPassword(val);
  }

  return (
    <>
      <UI.Layout style={{height: 10}}>
        <UI.Spacer medium />

        <UI.Block row center>
          <UI.Clickable onClick={() => navigation.goBack()}>
            <UI.Icon size={30} name="chevron-back" />
          </UI.Clickable>
          <UI.Spacer />
          <SVG name="logo" size="40" />
        </UI.Block>

        <UI.Block style={{paddingHorizontal: 20}}>
          <UI.Spacer large />

          <UI.Text h1 color={colors.primary}>
            Create Account
          </UI.Text>
          <UI.Text color={colors.primary}>
            One step away from your desires
          </UI.Text>

          <UI.Spacer large />

          <UI.Block>
            <UI.Text color={colors.primary} bold>
              Fullname
            </UI.Text>
            <UI.TextInput
              iconLeft={<UI.Icon type="Feather" name="user" />}
              placeholder="Johnson Walker"
            />
          </UI.Block>

          <UI.Spacer medium />

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
              value={password}
              onChangeText={onChangePassword}
              password
              iconLeft={<UI.Icon type="SimpleLineIcons" name="lock" />}
              placeholder="secure password"
            />
          </UI.Block>

          <UI.Spacer medium />

          <UI.Block>
            <UI.Text color={colors.primary}>
              Your Password must contain:
            </UI.Text>

            <UI.Spacer />

            <UI.Block row center>
              <UI.Block
                backgroundColor={
                  passwordRules.hasSixChar ? colors.grey : colors.lightGrey
                }
                middle
                style={styles.roundCheck}>
                <UI.Icon
                  color={passwordRules.hasSixChar ? colors.blue : colors.grey}
                  size={18}
                  name="check"
                  type="FontAwesome"
                />
              </UI.Block>
              <UI.Spacer />
              <UI.Text
                color={passwordRules.hasSixChar ? colors.primary : colors.grey}>
                Atleast 6 characters
              </UI.Text>
            </UI.Block>

            <UI.Spacer />

            <UI.Block row center>
              <UI.Block
                backgroundColor={
                  passwordRules.hasNumber ? colors.grey : colors.lightGrey
                }
                middle
                style={styles.roundCheck}>
                <UI.Icon
                  color={passwordRules.hasNumber ? colors.blue : colors.grey}
                  size={18}
                  name="check"
                  type="FontAwesome"
                />
              </UI.Block>
              <UI.Spacer />
              <UI.Text
                color={passwordRules.hasNumber ? colors.primary : colors.grey}>
                Contains a number
              </UI.Text>
            </UI.Block>
          </UI.Block>

          <UI.Spacer large />

          <UI.Block style={{zIndex: 1}}>
            <UI.Button onClick={() => navigation.navigate('Home')}>
              <UI.Text size={hd('1.8')} color={colors.white}>
                Register
              </UI.Text>
            </UI.Button>
          </UI.Block>

          <UI.Spacer large />
        </UI.Block>
      </UI.Layout>
      {/* <SVG size={hd('40%')} style={styles.logoBg} name="logo-bg" /> */}
    </>
  );
};

export default RegisterScreen;
