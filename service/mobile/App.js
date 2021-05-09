import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { Provider } from 'react-redux';
import { _ } from 'lodash';

import configureStore from 'config/store';
import AppNavigation from 'navigation/AppNavigation';

const isAndroid = Platform.OS === 'android';

export default function App () { 
    return (
      <Provider store={configureStore(() => {})}>
        <SafeAreaView style={styles.container}>
          <AppNavigation />
        </SafeAreaView>
      </Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});
