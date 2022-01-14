import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {COLORS, CONSTANTS} from '../Utils/data';
import Indicator from './Indicator';

const EmailLogin = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.mainContainer]}>
      <StatusBar backgroundColor={COLORS.secondary}></StatusBar>
      <View style={[styles.top, {}]}>
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            textAlign: 'center',
            fontFamily: 'Mulish-Light',
            width: '60%',
            lineHeight: 35,
          }}>
          Don't Have Account ? Why are you waiting ?
        </Text>
        <TouchableOpacity
          style={[
            styles.btn,
            {marginTop: 30, backgroundColor: COLORS.emailBack},
          ]}
          onPress={() => navigation.navigate('signup')}>
          <Text
            style={{
              fontFamily: 'Mulish-Medium',

              fontSize: 18,
              color: COLORS.secondary,
            }}>
            Create New Account
          </Text>
          {/* <Image source={GOOGLEICON} style={{width: 30, height: 30}}></Image> */}
        </TouchableOpacity>
        <Indicator color={'lightgray'} marginTop={50} />
      </View>

      <View style={[styles.bottom, {}]}>
        <Text
          style={{
            fontFamily: 'MontserratAlternates-Medium',
            marginBottom: 40,

            fontSize: 26,
            color: 'white',
          }}>
          Log In With E-Mail
        </Text>
        <TextInput
          style={styles.input}
          //   onChangeText={onChangeNumber}
          //   value={number}
          placeholder="Enter Password"
          //   keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, {marginBottom: 20}]}
          //   onChangeText={onChangeNumber}
          //   value={number}
          placeholder="Enter Password Again"
          //   keyboardType="numeric"
        />
        <View style={styles.check}>
          <CheckBox
            // value={isSelected}
            // onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={{color: 'lightgray', marginLeft: 10}}>remember me</Text>
        </View>

        <TouchableOpacity
          style={[
            styles.btn,
            {marginTop: 30, backgroundColor: COLORS.googlBack},
          ]}
          onPress={() => navigation.navigate('Home')}>
          <Text
            style={{
              fontFamily: 'Mulish-Medium',

              fontSize: 18,
              color: COLORS.googleText,
            }}>
            Login
          </Text>
          {/* <Image source={GOOGLEICON} style={{width: 30, height: 30}}></Image> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  top: {
    // width: CONSTANTS.width * 0.8,
    height: CONSTANTS.height * 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  bottom: {
    height: CONSTANTS.height * 0.55,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  check: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: CONSTANTS.width * 0.8,
  },
  btn: {
    width: CONSTANTS.width * 0.8,
    backgroundColor: 'lightblue',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    borderColor: 'white',
    borderWidth: 1,
    width: CONSTANTS.width * 0.8,
    marginTop: 25,
    borderRadius: 10,
    paddingLeft: 20,
  },
});

export default EmailLogin;

// background-color: #7f53ac;
// background-image: linear-gradient(315deg, #7f53ac 0%, #647dee 74%);
