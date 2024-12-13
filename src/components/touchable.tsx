import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const TouchableComponent = () => {
  const [count, setCount] = React.useState(0);
  const [highLightCount, setHighLightCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Touchable Component</Text>
      <TouchableOpacity
        style={styles.btnComp}
        onPress={() => setCount(count + 0.05)}>
        <Text style={styles.btnText}> Click me </Text>
      </TouchableOpacity>
      <TouchableHighlight
        underlayColor={'#ec3838'}
        onPress={() => setHighLightCount(highLightCount + 1)}
        style={styles.btnComp}>
        <Text style={styles.btnText}> Click me </Text>
      </TouchableHighlight>
    </View>
  );
};

export default TouchableComponent;

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
  btnComp: {
    padding: 10,
    backgroundColor: '#5ceb7b',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
