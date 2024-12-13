import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FlaxLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Flex Layout example</Text>
      <Text>Main Axis (Row)</Text>
      <View style={styles.rowContainer}>
        <View style={[styles.box, {backgroundColor: '#fd0b90'}]} />
        <View style={[styles.box, {backgroundColor: '#14ee93'}]} />
        <View style={[styles.box, {backgroundColor: '#4734f7'}]} />
      </View>
      <Text>Main Axis (Coloumn)</Text>
      <View style={styles.colContainer}>
        <View style={[styles.box, {backgroundColor: '#fd0b90'}]} />
        <View style={[styles.box, {backgroundColor: '#14ee93'}]} />
        <View style={[styles.box, {backgroundColor: '#4734f7'}]} />
      </View>
    </View>
  );
};

export default FlaxLayout;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'SpaceMono',
    textDecorationLine: 'underline',
    marginVertical: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 10,
    marginVertical: 10,
  },
  colContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: 10,
    marginVertical: 10,
  },
  box: {
    width: 50,
    height: 50,
  },
});
