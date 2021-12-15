import * as React from 'react';
import {FlatList, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import CompanyItem from './components/CompanyItem';

import businesses from '../data.json'

export default class Businesses extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: businesses,
      refreshing: true,
    };
  }


  render() {
    return (
      <View style={styles.pageContainer}>
        <View style={{flex: 1, borderWidth: 1}}>

        </View>
        <View style={{flex: 11, borderWidth: 1, borderColor: 'green'}}>
          <FlatList
            data={this.state.data}
            renderItem={(item) => (
              <CompanyItem item={item.item} nav={this.props.navigation} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer:{
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
});