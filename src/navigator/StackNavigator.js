/**
 *
 */
import React from 'react';
import {StackNavigator} from 'react-navigation';
import Tab from './TabNavigator';
import NewsDetails from '../pages/news-details';

const routeConfig = {
  Tab: {
    screen: Tab
  },
  NewsDetails: {
    screen: NewsDetails
  },
};
const navigationOptions = {};

export default StackNavigator(routeConfig, navigationOptions);