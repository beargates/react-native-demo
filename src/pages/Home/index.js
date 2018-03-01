/**
 *
 */
import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import {NavigationActions} from 'react-navigation';
import ItemSeparator from './ItemSeparator';
import ListItem from './ListItem';

const listData = [
  {
    title: 'title',
    userName: 'userName',
    createTime: 1519882814186,
  }, {
    title: 'title',
    userName: 'userName',
    createTime: 1519882814186,
  }, {
    title: 'title',
    userName: 'userName',
    createTime: 1519882814186,
  }, {
    title: 'title',
    userName: 'userName',
    createTime: 1519882814186,
  }, {
    title: 'title',
    userName: 'userName',
    createTime: 1519882814186,
  }, {
    title: 'title',
    userName: 'userName',
    createTime: 1519882814186,
  }, {
    title: 'title',
    userName: 'userName',
    createTime: 1519882814186,
  }, {
    title: 'title',
    userName: 'userName',
    createTime: 1519882814186,
  }, {
    title: 'title',
    userName: 'userName',
    createTime: 1519882814186,
  }, {
    title: 'title',
    userName: 'userName',
    createTime: 1519882814186,
  }
];

class HomeScreen extends Component {
  _keyExtractor = (item, idx) => `${idx}`;

  constructor(props) {
    super(props);

    this.onItemPress = this.onItemPress.bind(this);
  }

  onItemPress(){
    const navigateAction = NavigationActions.navigate({
      routeName: 'NewsDetails',
      params: {},
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    console.log(this.props)
    return <FlatList
      style={{paddingLeft: 15}}
      keyExtractor={this._keyExtractor}
      data={listData}
      renderItem={item => <ListItem item={item} onPress={this.onItemPress}/>}
      ItemSeparatorComponent={ItemSeparator}
    />
  }
}

export default HomeScreen;
