/**
 * Food Market ReactNative
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import store from './redux/store';
import {Provider, useSelector} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import {Loading} from './components/molecules';

const MainApp = () => {
  const {isLoading} = useSelector(state => state.globalReducer);
  // const isLoading = useSelector((state) => state.globalReducer.isLoading)

  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};
const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
