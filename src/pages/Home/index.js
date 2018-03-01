/**
 *
 */
import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
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

  render() {
    return <FlatList
      style={{paddingLeft: 15}}
      keyExtractor={this._keyExtractor}
      data={listData}
      renderItem={item => <ListItem item={item}/>}
      ItemSeparatorComponent={ItemSeparator}
    />
  }
}

export default HomeScreen;
