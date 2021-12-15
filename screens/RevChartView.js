import React, {Component} from 'react'
import {requireNativeComponent} from 'react-native'

const RevChart = requireNativeComponent('CalendarModule');

export default class RevChartView extends Component {
    render(){
        return <RevChart {...this.props} />;
    }
}
