import React from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  LOGINIMAGE,
  GOOGLEICON,
  EMAILICON,
  GITHUBICON,
  CONSTANTS,
  COLORS,
} from '../Utils/data';

import Indicator from './Indicator';

const Signup = ({navigation}) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <SafeAreaView style={[styles.mainConatiner]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={'#ff669c'}></StatusBar>
        {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}> */}
        <View style={[styles.top]}>
          <TouchableOpacity style={[styles.btn, {backgroundColor: 'white'}]}>
            <Text
              style={{
                fontFamily: 'Mulish-Medium',

                fontSize: 18,
                color: 'black',
              }}>
              GitHub Signup
            </Text>
            <Image source={GITHUBICON} style={{width: 35, height: 35}}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn]}>
            <Text
              style={{
                fontFamily: 'Mulish-Medium',

                fontSize: 18,
                color: 'rgb(102, 153, 255)',
              }}>
              Google Signup
            </Text>
            <Image source={GOOGLEICON} style={{width: 30, height: 30}}></Image>
          </TouchableOpacity>
          <Indicator color={'white'} marginTop={20} />
        </View>
        <View style={[styles.middle]}>
          <Text
            //   assets\fonts\MontserratAlternates-Black.ttf
            style={{
              fontSize: 24,
              marginBottom: 10,
              fontFamily: 'MontserratAlternates-Medium',
              color: 'white',
            }}>
            Sign Up With Email
          </Text>
          <TextInput
            style={[styles.input, {marginTop: 40}]}
            //   onChangeText={onChangeNumber}
            //   value={number}
            placeholder="Enter Email"
            //   keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeNumber}
            //   value={number}
            placeholder="Enter Password"
            //   keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeNumber}
            //   value={number}
            placeholder="Enter Password Again"
            //   keyboardType="numeric"
          />
          <TouchableOpacity
            style={[
              styles.btn,
              {
                backgroundColor: COLORS.emailBack,
                marginTop: 30,
                width: CONSTANTS.width / 2,
              },
            ]}
            onPress={() => navigation.navigate('emailLogin')}>
            <Text
              style={{
                fontFamily: 'Mulish-Medium',

                fontSize: 18,
                color: COLORS.emailText,
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.bottom]}>
          <Indicator color={'white'} marginTop={10} />
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: COLORS.primary}]}>
            <Text
              style={{
                fontFamily: 'Mulish-Light',

                fontSize: 18,
                color: 'white',
              }}
              onPress={() => navigation.navigate('emailLogin')}>
              Already have Account ?
            </Text>
          </TouchableOpacity>
        </View>
        {/* </TouchableWithoutFeedback> */}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainConatiner: {
    // flex: 1,
    width: CONSTANTS.width,
    height: CONSTANTS.height,
    // backgroundColor: COLORS.secondary,
    backgroundColor: '#ff669c',
  },
  top: {
    height: CONSTANTS.height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  middle: {
    height: CONSTANTS.height * 0.55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    height: CONSTANTS.height * 0.2,
    // backgroundColor: 'yellow',
    // justifyContent: 'center',
    alignItems: 'center',
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

export default Signup;
