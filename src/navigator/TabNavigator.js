/**
 *
 */
import React from 'react';
import {TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../pages/home';
import NewsNewScreen from '../pages/news-new';
import SettingScreen from '../pages/setting';
// import TabBar from './TabBar';

const routeConfigs = {
  Home: {
    screen: HomeScreen,
    path: 'tabs/:name', // path属性适用于其他app或浏览器使用url打开本app并进入指定页面
    navigationOptions: () => ({
      // 设置tabBar title的三种方法 tabBarLabel优先生效，其次是title
      title: '阅读', // title还有一个作用是设置StackNavigator里navigation的title
      // tabBarLabel: '阅读',
      tabBarLabel: () => '阅读',
    }),
  },
  Add: {
    screen: NewsNewScreen,
    // path: '',
    navigationOptions: () => ({
      tabBarLabel: () => <Icon name="edit" size={40} color="#0c89cf" />
    })
  },
  Setting: {
    screen: SettingScreen,
    path: 'tabs/:name',
    navigationOptions: () => ({
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
      justifyContent: 'center',
    },
    style: {
      // backgroundColor: 'blue',
      // justifyContent: 'center',
    },
  }
};

export default TabNavigator(routeConfigs, tabNavigatorConfig);
