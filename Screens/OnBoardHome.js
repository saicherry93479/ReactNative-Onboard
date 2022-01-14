import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {COLORS, CONSTANTS} from '../Utils/data';
import {LOGINIMAGE, GOOGLEICON, EMAILICON, GITHUBICON} from '../Utils/data';
import Indicator from './Indicator';

const OnBoardHome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainConatiner}>
      <StatusBar backgroundColor={COLORS.primary}></StatusBar>
      <View style={styles.top}>
        <Image
          source={LOGINIMAGE}
          style={{
            height: CONSTANTS.height * 0.6,
            width: CONSTANTS.width * 0.9,
            resizeMode: 'contain',
            marginTop: -CONSTANTS.height * 0.08,
            // backgroundColor: 'green',
          }}></Image>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={[styles.btn, {backgroundColor: 'white'}]}>
          <Text
            style={{
              fontFamily: 'Mulish-Medium',

              fontSize: 18,
              color: 'black',
            }}>
            GitHub Login
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
            Google Login
          </Text>
          <Image source={GOOGLEICON} style={{width: 30, height: 30}}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, {backgroundColor: '#ffccde'}]}
          onPress={() => navigation.navigate('emailLogin')}>
          <Text
            style={{
              fontFamily: 'Mulish-Medium',

              fontSize: 18,
              color: '#ff669c',
            }}>
            E-mail Login
          </Text>
          <Image source={EMAILICON} style={{width: 35, height: 35}}></Image>
        </TouchableOpacity>

        <Indicator />
        <TouchableOpacity
          style={[styles.btn, {marginTop: 30, backgroundColor: '#f50057'}]}
          onPress={() => navigation.navigate('signup')}>
          <Text
            style={{
              fontFamily: 'Mulish-Medium',

              fontSize: 18,
              color: 'white',
            }}>
            Create New Account
          </Text>
          {/* <Image source={GOOGLEICON} style={{width: 30, height: 30}}></Image> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: COLORS.primary,
    // backgroundColor: 'red',
  },
  top: {
    // height: CONSTANTS.height * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    // backgroundColor: 'red',
    height: CONSTANTS.height * 0.6,
    position: 'absolute',
    top: CONSTANTS.height * 0.4,
    left: 0,
    width: CONSTANTS.width,
    alignItems: 'center',
    justifyContent: 'center',
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
});

export default OnBoardHome;
