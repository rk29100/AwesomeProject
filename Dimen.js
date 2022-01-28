import React from 'react';
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export { deviceHeight };
export { deviceWidth };