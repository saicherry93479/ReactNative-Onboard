import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CONSTANTS} from '../Utils/data';

const Indicator = ({color = 'gray', marginTop = 30}) => {
  return (
    <View style={[styles.bottomMiddle, {marginTop: marginTop}]}>
      <View style={[styles.middle, {backgroundColor: color}]}></View>
      <Text style={{color: color, fontSize: 18}}>or</Text>
      <View style={[styles.middle, {backgroundColor: color}]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  middle: {
    width: CONSTANTS.width * 0.3,
    height: 1,
    borderRadius: 1,
  },
  bottomMiddle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    // backgroundColor: 'red',
    width: CONSTANTS.width * 0.75,
  },
});
export default Indicator;
