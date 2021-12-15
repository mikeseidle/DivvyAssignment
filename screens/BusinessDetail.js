import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import RevChart from './RevChartView';

const DetailsHeader = ({title}) => {
  return (
    <View
      style={{
        height: 60,
        width: '100%',
        borderBottomWidth: 1,
        justifyContent: 'center',
        backgroundColor: '#000000',
        opacity:0.9,
        paddingLeft: 20
      }}>

        <Text style={{fontSize: 32, fontWeight: '600', color:'white'}}>{title}</Text>
      
    </View>
  );
};

const DetailsBody = ({location}) => {
  return (
    <View
      style={{
        height: 100,
        width: '95%',
        borderWidth: 0,
        justifyContent: 'space-around',
        padding: 10,
        elevation: 3,
        alignSelf:'center'
      }}>
      <Text style={{opacity: 0.7, fontSize: 14}}>Location</Text>
      <Text style={{fontSize: 16}}>{location.address}</Text>
      <Text style={{fontSize: 16}}>
        {location.city}, {location.country}
      </Text>
    </View>
  );
};

const DetailsChart = ({getData}) => {
  return (
    <View
      style={{
        height: 500,
        width: '95%',
        borderWidth: 0,
        padding: 15,
        alignItems: 'center',
        elevation: 3,
        alignSelf:'center'
      }}>
      <Text style={{opacity: 0.7, fontSize: 14}}>Renvenue (6 Months)</Text>
      <RevChart
        style={{width: '90%', height: 400, borderWidth: 1}}
        data={getData}
      />
    </View>
  );
};

export default class BusinessDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.route.params.item,
    };
  }

  _getChartData() {
    const {revenue} = this.props.route.params.item;
    return revenue
      .map((i) => {
        const date = i.date.split(' ')[0];
        return {date, value: i.value};
      })
      .reverse();
  }

  render() {
    return (
      <ScrollView>
        <DetailsHeader title={this.state.item.name} />
        <DetailsBody location={this.state.item.location} />
        <DetailsChart getData={this._getChartData()} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  pageHeader: {
    height: 150,
    width: '100%',
    borderBottomWidth: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'gray',
  },
});
