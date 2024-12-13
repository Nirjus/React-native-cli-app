import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ScrollViewComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Scroll View Component</Text>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator
        nestedScrollEnabled
        bounces>
        {Array.from({length: 20}).map((_, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.boxText}>Item {index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ScrollViewComponent;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
  },
  headerText: {
    textDecorationLine: 'underline',
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 10,
  },
  scrollView: {
    height: 200,
    backgroundColor: '#f0f0f0',
  },
  scrollViewContent: {
    padding: 10,
  },
  box: {
    height: 40,
    marginBottom: 10,
    backgroundColor: '#50a2ee',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
