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
    var primary = 'white';
    var secondary = 'white';
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
          <ScrollView horizontal>
              <ScrollView>
              <View style={{flexDirection: 'column', margin: 32, marginHorizontal: 80}}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 8}}>
                      <Key size={size} u={1} marginh={1} letter={'~'} primary={primary} secondary={secondary}/>
                      <View style={{width: size}}/>
                      <Key size={size} u={1} marginh={1} letter={'2'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'3'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'4'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'5'} primary={primary} secondary={secondary}/>
                      <View style={{width: size/2}}/>
                      <Key size={size} u={1} marginh={1} letter={'7'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'8'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'9'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'0'} primary={primary} secondary={secondary}/>
                      <View style={{width: size/2}}/>
                      <Key size={size} u={1} marginh={1} letter={'7'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'8'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'9'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'0'} primary={primary} secondary={secondary}/>
                      <View style={{width: size}}/>
                      <Key size={size} u={1} marginh={1.2} letter={'>'} sub={'ル'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.2} letter={'>'} sub={'ル'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.2} letter={'>'} sub={'ル'} primary={primary} secondary={secondary}/>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                      <Key size={size} u={1} marginh={1} letter={'~'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'1 ヌ ぬ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'2 フ ふ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'3 ア あ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'4 ウ う'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'5 エ え'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'6 オ お'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'7 ヤ や'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'8 ユ ゆ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'9 ヨ よ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'0 ワ わ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'- ホ ほ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'+ ヘ ヘ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={2} marginh={1} letter={'Del'} primary={primary} secondary={secondary}/>
                      <View style={{width: size}}/>
                      <Key size={size} u={1} marginh={1.2} letter={'>'} sub={'ル'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.2} letter={'>'} sub={'ル'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.2} letter={'>'} sub={'ル'} primary={primary} secondary={secondary}/>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                      <Key size={size} u={1.5} marginh={1}/>
                      <Key size={size} u={1} marginh={1} letter={'Q タ ㅂ'} top_right={'ㅃ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'W テ ㅈ'} top_right={'ㅉ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'E イ ㄷ'} top_right={'ㄸ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'R ス ㄱ'} top_right={'ㄲ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'T カ ㅅ'} top_right={'ㅆ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'Y ン ㅛ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'U ナ ㅕ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'I ニ ㅑ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'O ラ ㅐ'} top_right={'ㅒ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'P セ ㅔ'} top_right={'ㅖ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'{ { {'} bot_left={'['} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1} letter={'} } }'} bot_left={']'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1.5} marginh={1}/>
                      <View style={{width: size}}/>
                      <Key size={size} u={1} marginh={1.2} letter={'>'} sub={'ル'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.2} letter={'>'} sub={'ル'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.2} letter={'>'} sub={'ル'} primary={primary} secondary={secondary}/>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                      <Key size={size} u={1.75} marginh={1.1} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.1} letter={'A チ ち ㅁ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.1} letter={'S ト と ㄴ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.1} letter={'D シ し ㅇ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.1} letter={'F ハ は ㄹ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.1} letter={'G キ き ㅎ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.1} letter={'H ク く ㅗ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.1} letter={'J マ ま ㅓ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.1} letter={'K ノ の ㅏ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.1} letter={'L リ り ㅣ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.1} letter={': レ れ'} bot_left={';'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.1} letter={'" ケ け'} bot_left={'\''} primary={primary} secondary={secondary}/>
                      <Key size={size} u={2.25} marginh={1.1}/>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                      <Key size={size} u={2.25} marginh={1.2} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.2} letter={'Z ツ つ ㅋ'} sub={'ツ ㅋ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.2} letter={'X サ さ ㅌ'} sub={'サ ㅌ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.2} letter={'C ン ろ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.2} letter={'V ヒ ひ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.2} letter={'B コ こ'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.2} letter={'N ミ み'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.2} letter={'M モ も'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.2} letter={'< ネ ね'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.2} letter={'> ル る'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.2} letter={'? メ め'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={2.75} marginh={1.2} primary={primary} secondary={secondary}/>
                      <View style={{width: size*2}}/>
                      <Key size={size} u={1} marginh={1.2} letter={'>'} sub={'ル'} primary={primary} secondary={secondary}/>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                      <Key size={size} u={1.25} marginh={1.75} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1.25} marginh={1.75} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1.25} marginh={1.75} primary={primary} secondary={secondary}/>
                      <Key size={size} u={6.25} marginh={1.75} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1.25} marginh={1.75} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1.25} marginh={1.75} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1.25} marginh={1.75} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1.25} marginh={1.75} primary={primary} secondary={secondary}/>
                      <View style={{width: size}}/>
                      <Key size={size} u={1} marginh={1.2} letter={'>'} sub={'ル'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.2} letter={'>'} sub={'ル'} primary={primary} secondary={secondary}/>
                      <Key size={size} u={1} marginh={1.2} letter={'>'} sub={'ル'} primary={primary} secondary={secondary}/>
                  </View>
              </View>
              </ScrollView>
          </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default Landing;
