import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store';
import ContextBar from './src/components/context-bar/ContextBar';
import Grid from './src/components/grid/Grid';
import {AppProps} from './types';

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
      <ContextBar />
      <Grid size={4} />
    </SafeAreaView>
  </Provider>
);

export default App;
