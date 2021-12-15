import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';

import RevChart from './RevChartView';

const DetailsHeader = ({title}) => {
  return (
    <View style={styles.detailsHeaderContainer}>
      <Text style={styles.detailsHeaderText}>{title}</Text>
    </View>
  );
};

const DetailsBody = ({location}) => {
  return (
    <View style={styles.detailsBodyContainer}>
      <Text style={styles.detailsBodyTitle}>Location</Text>
      <Text style={styles.detailsBodyText}>{location.address}</Text>
      <Text style={styles.detailsBodyText}>
        {location.city}, {location.country}
      </Text>
    </View>
  );
};

const DetailsChart = ({getData}) => {
  return (
    <View style={styles.detailsChartContainer}>
      <Text style={styles.detailsChartText}>Renvenue (6 Months)</Text>
      <RevChart
        style={styles.revChart}
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
        const value = i.value;
        return {date, value};
      })
      .reverse();
  }
  

  render() {
    return (
      <ScrollView>
        <DetailsHeader title={this.state.item.name} />
        <DetailsBody location={this.state.item.location} />
        {/* {Platform.OS === 'android'? <DetailsChart getData={this._getChartData()} /> : null } */}
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
  detailsHeaderContainer: {
    height: 60,
    width: '100%',
    borderBottomWidth: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
    opacity: 0.9,
    paddingLeft: 20,
  },
  detailsHeaderText: {
    fontSize: 32,
    fontWeight: '600',
    color: 'white',
  },
  detailsBodyContainer: {
    height: 100,
    width: '95%',
    borderWidth: 0,
    justifyContent: 'space-around',
    padding: 10,
    elevation: 3,
    alignSelf: 'center',
  },
  detailsBodyTitle: {
    opacity: 0.7,
    fontSize: 14,
  },
  detailsBodyText: {
    fontSize: 16,
  },
  detailsChartContainer: {
    height: 500,
    width: '95%',
    borderWidth: 0,
    padding: 15,
    alignItems: 'center',
    elevation: 3,
    alignSelf: 'center',
  },
  detailsChartText: {
    opacity: 0.7,
    fontSize: 14,
  },
  revChart: {
    width: '90%',
    height: 400,
    borderWidth: 1,
  },
});
