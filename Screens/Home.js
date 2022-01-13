import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1e133b"></StatusBar>
      <Text style={styles.info}>
        App is not Yet completed.Press below Button and go back
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('onBoard')}>
        <Text style={{color: '#1e133b'}}>Boarding </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e133b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    width: '70%',
    fontFamily: 'Mulish-Light',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 30,
  },
  btn: {
    backgroundColor: 'white',
    height: 50,
    width: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
  },
});
export default Home;
