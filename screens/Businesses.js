import * as React from 'react';
import {FlatList, Text, View} from 'react-native';

const DATA = [];

const CompanyItem = ({title}) => {
  return (
    <View style={{width: '90%', height: 60, backgroundColor: 'gray'}}>
      <Text>Test: {title}</Text>
    </View>
  );
};

export default class Businesses extends React.Component {
  // renderCompany = ({Item}) => {};
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: '1', title: 'num 1'},
        {id: '2', title: 'num 2'},
      ],
      refreshing: true,
    };
  }

  renderCompany = (item) => 
    <CompanyItem title={item.title} />;
  
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <Text>Foo bar shiby</Text>
        <CompanyItem title={'number one'} />
        <FlatList
          data={this.state.data}
          renderItem={item => this.renderCompany(item)}
          keyExtractor={item => item.id}
        />
      </View>
    );

    // return <FlatList />
  }
}
