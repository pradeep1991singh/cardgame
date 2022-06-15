import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {AppProps} from './types';
import ScreenContainer from './src/components/screens/ScreenContainer';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#413e44',
  },
});

const App: FC<AppProps> = () => (
  <Provider store={store}>
    <SafeAreaView style={styles.safeContainer}>
      <ScreenContainer />
    </SafeAreaView>
  </Provider>
);

export default App;
