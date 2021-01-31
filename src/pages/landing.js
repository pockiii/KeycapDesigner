import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Pressable,
  FlatList,
  Animated,
  Easing,
  SafeAreaView,
  Dimensions
} from 'react-native';

import Key from './key';
import Canvas from './canvas';
var text = require('../lib/text');
//install bootsplash

class Landing extends React.Component {

  constructor(props) {
        super(props)
        this.state = {
        }
    }

  render() {
    var size = 48;
    var primary = 'white';
    var secondary = 'white';
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{height: 48, width: Dimensions.get('window').width, backgroundColor: '#263238'}}>

          </View>

          <Canvas/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default Landing;
