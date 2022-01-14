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
  secondary: '#f50057',
  emailBack: '#ffccde',
  emailText: '#ff669c',
  googleText: 'rgb(102, 153, 255)',
  googlBack: 'lightblue',
};
export const EMAILICON = require('../assets/images/email.png');
export const GITHUBICON = require('../assets/images/github.png');
export const LOGINIMAGE = require('../assets/images/Login.png');
export const GOOGLEICON = require('../assets/images/google.png');
export const CONSTANTS = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
