import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const TextInputComponent = () => {
  const [value, setvalue] = useState('');
  console.log(value);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>TextInputComponent</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
        placeholderTextColor={'gray'}
        value={value}
        onChangeText={text => setvalue(text)}
      />
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  textInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: 'black',
  },
});
