import React, {Component} from 'react'
import {NativeModules} from 'react-native'

const RevChart = requireNativeComponent('RevChart');

export default class RevChartView extends Component {
    render(){
        return <RevChart {...this.props} />;
    }
}
