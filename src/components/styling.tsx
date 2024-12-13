import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
function StylingDemo() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          marginBottom: 15,
        }}>
        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
          Inline styling example
        </Text>
      </View>
      <View
        style={[
          styles.combainedStyle,
          {borderColor: 'purple', borderWidth: 2},
        ]}>
        <Text
          style={[
            styles.combinedText,
            {color: 'red', textDecorationLine: 'underline'},
          ]}>
          Combined styling example
        </Text>
        <Text style={[styles.combinedText, {color: 'black'}]}>
          Combined styling example
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 10,
  },
  combainedStyle: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 5,
  },
  combinedText: {
    fontFamily: 'SpaceMono',
    fontSize: 15,
  },
});

export default StylingDemo;
