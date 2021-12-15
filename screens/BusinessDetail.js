import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';

import RevChart from './RevChartView';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useSelector, useDispatch} from 'react-redux';
import {updateBusiness} from './store/actions/businesses';

const DetailsHeader = ({title, item}) => {
  const business = useSelector((state) => state.business);
  const dispatch = useDispatch();
  const [color, setColor] = useState(business.liked_businesses.includes(item)? 'yellow': 'white');
  console.log('liked: ', business.liked_businesses);
  return (
    <View style={styles.detailsHeaderContainer}>
      <View style={{flex: 6, justifyContent: 'center', marginLeft: 10}}>
        <Text style={styles.detailsHeaderText}>{title}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}></View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            if (business.liked_businesses.includes(item)) {
              console.log('already liked', item.id);
              const filterdData = business.liked_businesses.filter(d => d !== item);
              console.log('Removed Item: ',filterdData)
              dispatch(updateBusiness(filterdData));
              setColor('white');
            } else {
              console.log('adding liked company...', item)
              dispatch(updateBusiness([...business.liked_businesses, item]));
              setColor('yellow')
            }
          }}>
          <FontAwesome name="star" size={25} color={color} />
        </TouchableOpacity>
      </View>
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
      <RevChart style={styles.revChart} data={getData} />
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
        <DetailsHeader title={this.state.item.name} item={this.state.item} />
        <DetailsBody location={this.state.item.location} />
        {Platform.OS === 'android' ? (
          <DetailsChart getData={this._getChartData()} />
        ) : null}
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
    flexDirection: 'row',
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
