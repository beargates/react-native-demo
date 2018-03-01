/**
 *
 */
import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import {List} from 'antd-mobile';

const Item = List.Item;

class HomeScreen extends Component{
  render(){
    return <ScrollView style={{paddingTop: 50}}>
      <List>
        <Item>隐私</Item>
        <Item>关于</Item>
      </List>
    </ScrollView>
  }
}

export default HomeScreen;
