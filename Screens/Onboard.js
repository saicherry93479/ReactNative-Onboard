import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  SliderBase,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, CONSTANTS, slides} from '../Utils/data';

const Onboard = ({navigation}) => {
  const ref = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const stateUpdater = e => {
    // console.log(e.nativeEvent.contentOffset.x);
    const current = Math.round(e.nativeEvent.contentOffset.x / CONSTANTS.width);
    setCurrentPage(current);
  };
  const navigateHome = () => {
    navigation.navigate('Home');
  };
  const renderItem = ({item}) => (
    <View style={[styles.page]}>
      <Image
        source={item.image}
        style={{
          width: CONSTANTS.width * 0.9,
          height: CONSTANTS.height * 0.55,
          resizeMode: 'contain',
          // backgroundColor: 'green',
        }}></Image>
      <Text style={[styles.headerOne]}>{item.headerOne}</Text>
      <Text style={[styles.headerTwo]}>{item.headerTwo}</Text>
    </View>
  );
  const nextHandler = () => {
    console.log('current page is ', currentPage);
    if (currentPage < slides.length - 1) {
      const nextPage = currentPage + 1;
      const offset = nextPage * CONSTANTS.width;
      ref?.current?.scrollToOffset({offset});
      setCurrentPage(nextPage);
    }
  };
  const skipHandler = () => {
    const offset = (slides.length - 1) * CONSTANTS.width;
    ref?.current?.scrollToOffset({offset});
    setCurrentPage(slides.length - 1);
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar backgroundColor={COLORS.primary}></StatusBar>
      <View style={[styles.slider]}>
        <FlatList
          onMomentumScrollEnd={stateUpdater}
          data={slides}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          ref={ref}
          // extraData={selectedId}
        />
      </View>
      <View style={[styles.footer]}>
        <View style={[styles.indicator]}>
          {slides.map((_, key) => (
            <View
              key={key}
              style={{
                height: 3,
                width: key === currentPage ? 50 : 10,
                backgroundColor: key === currentPage ? 'white' : 'gray',
                marginRight: 8,
                borderRadius: 1,
              }}></View>
          ))}
        </View>
        {currentPage === slides.length - 1 ? (
          <View style={[styles.bottom, {}]}>
            <TouchableOpacity
              style={[styles.btn, {width: '90%'}]}
              onPress={navigateHome}>
              <Text
                style={{
                  color: '#1e133b',
                  fontFamily: 'Mulish-Bold',
                  fontSize: 16,
                }}>
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.bottom}>
            <TouchableOpacity
              style={[
                styles.btn,
                {
                  backgroundColor: 'transparent',
                  borderColor: 'white',
                  borderWidth: 1,
                },
              ]}
              onPress={skipHandler}>
              <Text>Skip</Text>
            </TouchableOpacity>
            <View style={{width: 10}}></View>
            <TouchableOpacity style={[styles.btn]} onPress={nextHandler}>
              <Text style={{color: '#1e133b'}}>Next</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: '100%',
    width: '100%',
  },
  slider: {
    height: '70%',
    // backgroundColor: 'red',
  },
  footer: {
    // backgroundColor: 'red',
    height: '30%',
  },
  page: {
    width: CONSTANTS.width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerOne: {
    // marginTop: 20,
    fontFamily: 'Mulish-Light',
    fontSize: 20,
  },
  headerTwo: {
    marginTop: 20,
    fontFamily: 'Mulish-Light',
    fontSize: 14,
    width: '80%',
    textAlign: 'center',
    color: 'gray',
  },
  indicator: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btn: {
    backgroundColor: 'white',
    height: 50,
    width: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    // backgroundColor: 'green',
    marginLeft: '5%',
    justifyContent: 'space-around',
    marginTop: (CONSTANTS.height * 0.25) / 2,
  },
});
export default Onboard;
