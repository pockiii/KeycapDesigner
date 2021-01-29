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
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                  <Key size={size} u={1} marginh={1} letter={'~'}/>
                  <Key size={size} u={1} marginh={1} letter={'1'}/>
                  <Key size={size} u={1} marginh={1} letter={'2'}/>
                  <Key size={size} u={1} marginh={1} letter={'3'}/>
                  <Key size={size} u={1} marginh={1} letter={'4'}/>
                  <Key size={size} u={1} marginh={1} letter={'5'}/>
                  <Key size={size} u={1} marginh={1} letter={'6'}/>
                  <Key size={size} u={1} marginh={1} letter={'7'}/>
                  <Key size={size} u={1} marginh={1} letter={'8'}/>
                  <Key size={size} u={1} marginh={1} letter={'9'}/>
                  <Key size={size} u={1} marginh={1} letter={'0'}/>
                  <Key size={size} u={1} marginh={1} letter={'-'}/>
                  <Key size={size} u={1} marginh={1} letter={'+'}/>
                  <Key size={size} u={2} marginh={1} letter={'Del'}/>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                  <Key size={size} u={1.5} marginh={1}/>
                  <Key size={size} u={1} marginh={1} letter={'Q'} sub={'タ ㅂ'} top_right={'ㅃ'}/>
                  <Key size={size} u={1} marginh={1} letter={'W'} sub={'テ ㅈ'} top_right={'ㅉ'}/>
                  <Key size={size} u={1} marginh={1} letter={'E'} sub={'イ ㄷ'} top_right={'ㄸ'}/>
                  <Key size={size} u={1} marginh={1} letter={'R'} sub={'ス ㄱ'} top_right={'ㄲ'}/>
                  <Key size={size} u={1} marginh={1} letter={'T'} sub={'カ ㅅ'} top_right={'ㅆ'}/>
                  <Key size={size} u={1} marginh={1} letter={'Y'} sub={'ン ㅛ'}/>
                  <Key size={size} u={1} marginh={1} letter={'U'} sub={'ナ ㅕ'}/>
                  <Key size={size} u={1} marginh={1} letter={'I'} sub={'ニ ㅑ'}/>
                  <Key size={size} u={1} marginh={1} letter={'O'} sub={'ラ ㅐ'} top_right={'ㅒ'}/>
                  <Key size={size} u={1} marginh={1} letter={'P'} sub={'セ ㅔ'} top_right={'ㅖ'}/>
                  <Key size={size} u={1} marginh={1} letter={'{'} sub={'[ ['} bot_right={''}/>
                  <Key size={size} u={1} marginh={1} letter={'}'} sub={'] ]'} bot_right={''}/>
                  <Key size={size} u={1.5} marginh={1}/>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                  <Key size={size} u={1.75} marginh={1.1}/>
                  <Key size={size} u={1} marginh={1.1} letter={'A'} sub={'チ ㅁ'}/>
                  <Key size={size} u={1} marginh={1.1} letter={'S'} sub={'ト ㄴ'}/>
                  <Key size={size} u={1} marginh={1.1} letter={'D'} sub={'シ ㅇ'}/>
                  <Key size={size} u={1} marginh={1.1} letter={'F'} sub={'ハ ㄹ'}/>
                  <Key size={size} u={1} marginh={1.1} letter={'G'} sub={'キ ㅎ'}/>
                  <Key size={size} u={1} marginh={1.1} letter={'H'} sub={'ク ㅗ'}/>
                  <Key size={size} u={1} marginh={1.1} letter={'J'} sub={'マ ㅓ'}/>
                  <Key size={size} u={1} marginh={1.1} letter={'K'} sub={'ノ ㅏ'}/>
                  <Key size={size} u={1} marginh={1.1} letter={'L'} sub={'リ ㅣ'}/>
                  <Key size={size} u={1} marginh={1.1} letter={':'} sub={';'} bot_right={'レ'}/>
                  <Key size={size} u={1} marginh={1.1} letter={'"'} sub={'\''} bot_right={'ケ'}/>
                  <Key size={size} u={2.25} marginh={1.1}/>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                  <Key size={size} u={2.25} marginh={1.2}/>
                  <Key size={size} u={1} marginh={1.2} letter={'Z'} sub={'ツ ㅋ'}/>
                  <Key size={size} u={1} marginh={1.2} letter={'X'} sub={'サ ㅌ'}/>
                  <Key size={size} u={1} marginh={1.2} letter={'C'} sub={'ン'}/>
                  <Key size={size} u={1} marginh={1.2} letter={'V'} sub={'ヒ'}/>
                  <Key size={size} u={1} marginh={1.2} letter={'B'} sub={'コ'}/>
                  <Key size={size} u={1} marginh={1.2} letter={'N'} sub={'ミ'}/>
                  <Key size={size} u={1} marginh={1.2} letter={'M'} sub={'モ'}/>
                  <Key size={size} u={1} marginh={1.2} letter={'<'} sub={'ネ'}/>
                  <Key size={size} u={1} marginh={1.2} letter={'>'} sub={'ル'}/>
                  <Key size={size} u={1} marginh={1.2} letter={'?'} sub={'メ'}/>
                  <Key size={size} u={2.75} marginh={1.2}/>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                  <Key size={size} u={1.25} marginh={1.75}/>
                  <Key size={size} u={1.25} marginh={1.75}/>
                  <Key size={size} u={1.25} marginh={1.75}/>
                  <Key size={size} u={6.25} marginh={1.75}/>
                  <Key size={size} u={1.25} marginh={1.75}/>
                  <Key size={size} u={1.25} marginh={1.75}/>
                  <Key size={size} u={1.25} marginh={1.75}/>
                  <Key size={size} u={1.25} marginh={1.75}/>
              </View>
          </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
});

export default Landing;
