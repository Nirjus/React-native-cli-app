/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import BasicComponents from './src/components/basic';
import TextInputComponent from './src/components/textInputfile';
import ScrollViewComponent from './src/components/ScrollViewCom';
import StylingDemo from './src/components/styling';
import FlaxLayout from './src/components/flexlayout';
import TouchableComponent from './src/components/touchable';

function App(): React.JSX.Element {
  return (
    <ScrollView contentContainerStyle={styles.container} nestedScrollEnabled>
      <BasicComponents />
      <TextInputComponent />
      <ScrollViewComponent />
      <StylingDemo />
      <FlaxLayout />
      <TouchableComponent />
    </ScrollView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 2,
  },
});
