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
      primary: this.props.primary,
      secondary: this.props.secondary,
      colour: '#156ca3',
      size: this.props.size,
      u: this.props.u,
      marginh: this.props.marginh,
      letter: this.props.letter ? this.props.letter.split(' ')[0] : ' ',
      sub: this.props.letter ? this.props.letter.split(' ')[2] : '',
      top_right: this.props.top_right,
      bot_left: this.props.bot_left ? this.props.bot_left : ' ',
    })
  }

  render() {
    var fsize = this.state.size / 2.4;
    return (
      <View style={{flexDirection: 'column', height: this.state.size, width: this.state.size * this.state.u, backgroundColor: this.state.colour, marginVertical: 1, marginHorizontal: this.state.marginh, borderRadius: 4}}>
          <View style={{flexDirection: 'row'}}>
              <Text style={[text.Medium, {
                margin: 1,
                color: this.state.primary,
                marginLeft: 5,
                fontSize: fsize,
              }]}>{this.state.letter}</Text>
              {this.state.top_right !== ''?<Text style={[text.Medium, { marginLeft: 4, color: this.state.primary, marginTop: 3, fontSize: fsize*0.8}]}>{this.state.top_right}</Text>:null}
          </View>
          <View style={{flexDirection: 'row',}}>

              <Text style={[text.Medium, {marginLeft: 5, marginTop: 0, fontSize: fsize*0.8, color: this.state.primary}]}>{this.state.bot_left}</Text>
              <Text style={[text.Medium, {marginLeft: 12, fontSize: fsize*0.8, color: this.state.primary}]}>{this.state.sub}</Text>
          </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
});

export default Landing;
