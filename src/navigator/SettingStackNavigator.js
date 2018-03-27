/**
 * StackNavigator
 */
import {StackNavigator} from 'react-navigation';
import AboutScreen from '../pages/about';
import SettingScreen from '../pages/setting';

const routeConfig = {
  Setting: {
    screen: SettingScreen,
    navigationOptions: () => ({
      title: '设置',
      tabBarLabel: '设置'
    }),
  },
  About: {
    screen: AboutScreen,
  },
};
const navigationOptions = {};

export default StackNavigator(routeConfig, navigationOptions);
