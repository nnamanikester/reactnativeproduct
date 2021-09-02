import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Thunk from 'redux-thunk';
import {listenOrientationChange as lor} from 'react-native-responsive-screen';
import reducers from './store/reducers';
import NavigationFlow from './navigation';
import {StatusBar, View} from 'react-native';

export interface AppProps {}

export interface AppState {
  loaded: boolean;
}

class App extends React.Component<AppProps, AppState> {
  store = createStore(reducers, {}, applyMiddleware(Thunk));

  constructor(props: AppProps) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount(): void {
    lor(this);
    this.setState({loaded: true});
  }

  render() {
    const {loaded} = this.state;

    if (!loaded) {
      return <View />;
    }

    return (
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        <Provider store={this.store}>
          <NavigationFlow />
        </Provider>
      </SafeAreaProvider>
    );
  }
}

export default App;
