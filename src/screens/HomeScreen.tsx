import * as React from 'react';
import {Animated, PanResponder, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import * as UI from '../components/common';
import {IRootState} from '../store/reducers';

export interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const colors = useSelector((state: IRootState) => state.colors);
  const panDrawer = React.useRef(
    new Animated.ValueXY({x: 0, y: hd('76%')}),
  ).current;

  const headerAnimate = React.useRef(new Animated.Value(-100)).current;
  const drawerResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onStartShouldSetPanResponderCapture: (e, g) => true,
      onMoveShouldSetPanResponder: (e, g) => false,
      onMoveShouldSetPanResponderCapture: (e, g) => true,
      onPanResponderGrant: (e, g) => {
        panDrawer.setOffset({x: panDrawer.x._value, y: panDrawer.y._value});
      },

      onPanResponderMove: Animated.event([null, {dy: panDrawer.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, g) => {
        if (g.vy < -1 || g.dy < -hd('100%') / 3) {
          console.log(hd('100%'), g.dy, g.vy);
          open();
        } else if (g.vy > 1.5 || g.dy > hd('100%') / 3) {
          close();
        } else {
          close();
        }
        // console.log(g);
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        panDrawer.flattenOffset();
      },
      onPanResponderTerminate: (e, g) => {
        close();
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
    }),
  ).current;

  const styles = StyleSheet.create({
    header: {
      position: 'absolute',
      padding: 20,
      elevation: 10,
      backgroundColor: colors.white,
      width: '100%',
      top: 0,
    },
    placeholder: {
      width: '100%',
      height: hd('6%'),
      borderRadius: 5,
    },
    drawer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      backgroundColor: colors.white,
      padding: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: hd('89%'),
    },
    dragger: {
      width: wd('20'),
      height: 5,
      borderRadius: 10,
      backgroundColor: colors.inactive,
    },
  });

  const drawerStyle = {
    transform: [
      {
        translateY: panDrawer.y,
      },
    ],
    ...styles.drawer,
  };

  const headerStyle = {
    height: headerAnimate,
    ...styles.header,
  };

  const open = () => {
    Animated.spring(panDrawer, {
      toValue: {
        x: 0,
        y: hd('0%'),
      },
      useNativeDriver: false,
    }).start();

    Animated.spring(headerAnimate, {
      toValue: hd('14%'),
      useNativeDriver: false,
    }).start();
  };

  const close = () => {
    Animated.spring(panDrawer, {
      toValue: {
        x: 0,
        y: hd('76%'),
      },
      useNativeDriver: false,
    }).start();

    Animated.spring(headerAnimate, {
      toValue: -100,
      useNativeDriver: false,
    }).start();
  };

  return (
    <>
      <Animated.View style={headerStyle}>
        <UI.Block row justify="space-between">
          <UI.Text>Placeholder</UI.Text>
          <UI.Clickable onClick={close}>
            <UI.Icon name="close" />
          </UI.Clickable>
        </UI.Block>

        <UI.Spacer />

        <UI.Block
          style={styles.placeholder}
          backgroundColor={colors.lightGrey}
        />
      </Animated.View>

      <Animated.View style={drawerStyle} {...drawerResponder.panHandlers}>
        <UI.Clickable>
          <UI.Block center style={styles.dragger} />
        </UI.Clickable>
        <UI.Spacer medium />

        <UI.Clickable>
          <UI.Block
            style={styles.placeholder}
            backgroundColor={colors.inactive}
          />
        </UI.Clickable>

        <UI.Spacer medium />

        <UI.Row>
          <UI.Column style={{paddingRight: 10}} size="6">
            <UI.Block
              style={styles.placeholder}
              backgroundColor={colors.inactive}
            />
          </UI.Column>
          <UI.Column style={{paddingLeft: 10}} size="6">
            <UI.Block
              style={styles.placeholder}
              backgroundColor={colors.inactive}
            />
          </UI.Column>
        </UI.Row>

        <UI.Spacer />

        <UI.Row>
          <UI.Column style={{paddingRight: 10}} size="6">
            <UI.Block
              style={styles.placeholder}
              backgroundColor={colors.inactive}
            />
          </UI.Column>
          <UI.Column style={{paddingLeft: 10}} size="6">
            <UI.Block
              style={styles.placeholder}
              backgroundColor={colors.inactive}
            />
          </UI.Column>
        </UI.Row>

        <UI.Spacer />

        <UI.Row>
          <UI.Column style={{paddingRight: 10}} size="6">
            <UI.Block
              style={styles.placeholder}
              backgroundColor={colors.inactive}
            />
          </UI.Column>
          <UI.Column style={{paddingLeft: 10}} size="6">
            <UI.Block
              style={styles.placeholder}
              backgroundColor={colors.inactive}
            />
          </UI.Column>
        </UI.Row>
      </Animated.View>
    </>
  );
};

export default HomeScreen;
