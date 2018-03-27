/**
 * StackNavigator
 */
import {StackNavigator} from 'react-navigation';
import Tab from './TabNavigator';
import NewsDetails from '../pages/news-details';
import AboutScreen from '../pages/about';

const routeConfig = {
  Tab: {
    screen: Tab
  },
  NewsDetails: {
    screen: NewsDetails
  },
  About: {
    screen: AboutScreen
  },
};
const navigationOptions = {};

export default StackNavigator(routeConfig, navigationOptions);
