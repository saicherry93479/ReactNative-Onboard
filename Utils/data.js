import {Dimensions} from 'react-native';
export const slides = [
  {
    id: 0,
    image: require('../assets/images/chatThree.png'),
    headerOne: 'This is the Header One',
    headerTwo:
      'This is the Header Two of Header Two It must be larger than HeaderOne',
  },
  {
    id: 1,
    image: require('../assets/images/chatTwo.png'),
    headerOne: 'This is the Header One',
    headerTwo:
      'This is the Header Two of Header Two It must be larger than HeaderOne',
  },
  {
    id: 2,
    image: require('../assets/images/ChatOne.png'),
    headerOne: 'This is the Header One',
    headerTwo:
      'This is the Header Two of Header Two It must be larger than HeaderOne',
  },
];

export const COLORS = {
  primary: '#1e133b',
  white: '#fff',
};

export const CONSTANTS = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
