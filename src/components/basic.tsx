import {Button, Image, StyleSheet, Text, View} from 'react-native';

import React from 'react';

const BasicComponents = () => {
  const [count, setCount] = React.useState(0);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headerText}>View component</Text>
        <View style={styles.boxContainer}>
          <View style={styles.redBox} />
          <View style={styles.blueBox} />
          <View style={styles.greenBox} />
        </View>
        {/* View component  */}
        <Text style={styles.headerText}>Text component</Text>
        <Text style={styles.myFirstText}>My first react native coursework</Text>
        <Text style={styles.nestestext}>
          Text components can be nested{' '}
          <Text style={styles.boldtext}>nexted</Text>
        </Text>
        {/* Text components */}
        <Text style={styles.headerText}>Image component</Text>
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.ituonline.com/wp-content/uploads/2023/08/Adobe-Illustrator-System-Requirements.jpg',
          }}
        />
        <Image
          style={styles.image}
          source={require('../../assets/pngegg.png')}
        />
        {/* Button components */}
        <Button
          color={'#6d31fa'}
          title="Press me"
          onPress={() => setCount(count + 1)}
        />
        <Text>Count is {count}</Text>
      </View>
    </View>
  );
};

export default BasicComponents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  redBox: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  greenBox: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  blueBox: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  headerText: {
    textDecorationLine: 'underline',
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 10,
  },
  myFirstText: {
    fontSize: 30,
  },
  nestestext: {
    fontSize: 20,
  },
  boldtext: {
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
