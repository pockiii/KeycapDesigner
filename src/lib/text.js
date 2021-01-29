'use strict';
var React = require('react-native');
var { StyleSheet } = React;
import { PixelRatio } from 'react-native';

const Thin = '100';
const Light = '300';
const Regular = '400';
const Medium = '500';
const Semibold = '600';
const Bold = '700';

module.exports = StyleSheet.create({
    Thin: {
      fontWeight: Thin
    },
    Light: {
        fontWeight: Light,
        fontFamily: Platform.OS === 'ios' ? undefined : "SFNSDisplay-Light",
    },
    Regular: {
        fontWeight: Regular,
        fontFamily: Platform.OS === 'ios' ? undefined : "SFNSDisplay-Regular",
    },
    Medium: {
        fontWeight: Medium,
        fontFamily: Platform.OS === 'ios' ? undefined : "SFNSDisplay-Medium",
    },
    Semibold: {
        fontWeight: Semibold,
        fontFamily: Platform.OS === 'ios' ? undefined : "SFNSDisplay-Semibold",
    },
    Bold: {
        fontWeight: Bold,
        fontFamily: Platform.OS === 'ios' ? undefined : "SFNSDisplay-Bold",
    },
});
