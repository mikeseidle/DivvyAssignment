import * as React from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';


const CompanyItem = ({item, nav}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('from item',item)

        nav.navigate('Profile',{item:item, name: item.name})
      }}
      style={{
        width: '90%',
        height: 60,
        backgroundColor: 'gray',
        alignSelf: 'center',
        marginVertical: 3,
        borderRadius: 5,
        padding: 5,
      }}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <View style={{flex: 1, borderWidth: 1}}></View>
        <View style={{flex: 6, borderWidth: 1, justifyContent: 'center'}}>
          <Text style={{color: 'white', fontSize: 20}}>
            {item.name}, {item.location.city}
          </Text>
        </View>
        <View style={{flex: 1, borderWidth: 1}}>
          

        </View>
      </View>
    </TouchableOpacity>
  );
};

export default class Businesses extends React.Component {
  // renderCompany = ({Item}) => {};
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: 'Meedoo',
          location: {
            address: '20 Buena Vista Parkway',
            city: 'Austin',
            country: 'United States',
          },
          revenue: [
            {
              seq: 0,
              date: '2019-03-12 00:14:10',
              value: 77793740.07,
            },
            {
              seq: 1,
              date: '2019-02-12 00:14:10',
              value: 17659305.4,
            },
            {
              seq: 2,
              date: '2019-01-12 00:14:10',
              value: 79457805.93,
            },
            {
              seq: 3,
              date: '2018-12-12 00:14:10',
              value: 12291141.73,
            },
            {
              seq: 4,
              date: '2018-11-12 00:14:10',
              value: 15418844.3,
            },
            {
              seq: 5,
              date: '2018-10-12 00:14:10',
              value: 73533303.23,
            },
          ],
        },
        {
          id: 2,
          name: 'Linkbuzz',
          location: {
            address: '8 Burning Wood Center',
            city: 'Miami',
            country: 'United States',
          },
          revenue: [
            {
              seq: 0,
              date: '2019-03-12 00:14:10',
              value: 13676205.39,
            },
            {
              seq: 1,
              date: '2019-02-12 00:14:10',
              value: 51026136.95,
            },
            {
              seq: 2,
              date: '2019-01-12 00:14:10',
              value: 30522302.47,
            },
            {
              seq: 3,
              date: '2018-12-12 00:14:10',
              value: 58908776.81,
            },
            {
              seq: 4,
              date: '2018-11-12 00:14:10',
              value: 30023910.49,
            },
            {
              seq: 5,
              date: '2018-10-12 00:14:10',
              value: 34391012.83,
            },
          ],
        },
        {
          id: 3,
          name: 'Plajo',
          location: {
            address: '06 Ludington Trail',
            city: 'Danbury',
            country: 'United States',
          },
          revenue: [
            {
              seq: 0,
              date: '2019-03-12 00:14:10',
              value: 4491055.0,
            },
            {
              seq: 1,
              date: '2019-02-12 00:14:10',
              value: 72885494.72,
            },
            {
              seq: 2,
              date: '2019-01-12 00:14:10',
              value: 37467126.29,
            },
            {
              seq: 3,
              date: '2018-12-12 00:14:10',
              value: 44817850.33,
            },
            {
              seq: 4,
              date: '2018-11-12 00:14:10',
              value: 89470533.7,
            },
            {
              seq: 5,
              date: '2018-10-12 00:14:10',
              value: 9481381.0,
            },
          ],
        },
      ],
      refreshing: true,
    };
  }

  //renderCompany = (data) => <CompanyItem item={data.item} nav={data.handleClick} />;
  handleClick(item){
    console.log('test')
    console.log(item)
    this.props.navigation.navigate('Profile', {
      item: item
    })
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        
        <View style={{flex: 7, borderWidth: 1, borderColor: 'green'}}>
          <FlatList
            data={this.state.data}
            //renderItem={(item) => this.renderCompany(item, this.handleClick())}
            renderItem={(item) => <CompanyItem item={item.item} nav={this.props.navigation} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    );

    // return <FlatList />
  }
}
