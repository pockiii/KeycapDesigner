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
var text = require('../lib/text');
//install bootsplash

class Landing extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        size: 24,
        u: 1,
        marginh: 0,
        letter: '',
        sub: '',
        top_right: '',
      }
  }

  componentDidMount() {
    console.log(this.props)
    this.setState({
      size: this.props.size,
      u: this.props.u,
      marginh: this.props.marginh,
      letter: this.props.letter,
      sub: this.props.sub ? this.props.sub.split(' ')[1] : '',
      top_right: this.props.top_right,
      bot_right: this.props.bot_right
    })
  }

  render() {
    var fsize = this.state.size / 2.4;
    return (
      <View style={{flexDirection: 'column', height: this.state.size, width: this.state.size * this.state.u, backgroundColor: 'red', marginVertical: 1, marginHorizontal: this.state.marginh, borderRadius: 4}}>
          <View style={{flexDirection: 'row'}}>
              <Text style={[text.Medium, {
                margin: 1,
                marginLeft: 5,
                fontSize: fsize,
              }]}>{this.state.letter}</Text>
              {this.state.top_right !== ''?<Text style={[text.Medium, { marginLeft: 4, marginTop: 3, fontSize: fsize*0.8}]}>{this.state.top_right}</Text>:null}
          </View>
          <View style={{flexDirection: 'row',}}>

              <Text style={[text.Medium, {marginLeft: 5, marginTop: 0, fontSize: fsize*0.8}]}>{this.state.sub}</Text>
              <Text style={[text.Medium, {marginLeft: 12, fontSize: fsize*0.8}]}>{this.state.bot_right}</Text>
          </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
});

export default Landing;
