/**
 *
 */
import React from 'react';
import {View, Text} from 'react-native';
import {TabNavigator} from 'react-navigation';
import HomeScreen from '../pages/Home';
import SettingScreen from '../pages/Setting';
import TabBar from './TabBar';

const routeConfigs = {
  Home: {
    screen: HomeScreen,
    path: 'tabs/:name', // path属性适用于其他app或浏览器使用url打开本app并进入指定页面
    navigationOptions: ({navigation}) => ({
      // 设置tabBar title的三种方法 tabBarLabel优先生效，其次是title
      title: '列表', // title还有一个作用是设置StackNavigator里navigation的title
      // tabBarLabel: '列表',
      tabBarLabel: (options) => {
        return '列表';
      },
    }),
  },
  Setting: {
    screen: SettingScreen,
    path: 'tabs/:name',
    navigationOptions: ({navigation}) => ({
      title: '设置',
      tabBarLabel: '设置'
    }),
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
    },
    style: {
      // backgroundColor: 'blue',
    },
  }
};

export default TabNavigator(routeConfigs, tabNavigatorConfig);
