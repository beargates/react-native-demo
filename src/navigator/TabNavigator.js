/**
 *
 */
import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeStackNavigator from './HomeStackNavigator';
import NewsNewScreen from '../pages/news-new';
import SettingStackNavigator from './SettingStackNavigator';
// import TabBar from './TabBar';

const addStackNavigator = StackNavigator({
  Add: {
    screen: NewsNewScreen,
    navigationOptions: () => ({
      title: '新建',
    }),
  }
}, {
  mode: 'modal',
});

const routeConfigs = {
  Home: {
    screen: HomeStackNavigator,
    path: 'tabs/:name', // path属性适用于其他app或浏览器使用url打开本app并进入指定页面
  },
  Add: {
    screen: addStackNavigator,
    navigationOptions: () => ({
      tabBarLabel: () => <Icon name="edit" size={40} color="#0c89cf" />
    })
  },
  Setting: {
    screen: SettingStackNavigator,
  },
};
const tabNavigatorConfig = {
  // 自定义tabBar
  // tabBarComponent: TabBar,
  tabBarOptions: {
    // activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 18,
      lineHeight: 48,
      justifyContent: 'center',
    },
    style: {
      // backgroundColor: 'blue',
      // justifyContent: 'center',
    },
  }
};

export default TabNavigator(routeConfigs, tabNavigatorConfig);
