import * as React from 'react';
import {View, Text, NativeModules} from 'react-native';

const {BarChart} = NativeModules;

console.log("Native",NativeModules)

export default class BusinessDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      item: this.props.route.params.item
    }
  }
  render() {
    //console.log('Our Company', this.props.route.params.item)
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 2, borderWidth: 1, justifyContent:'flex-end', backgroundColor:'gray'}}>
           <View style= {{padding: 5, borderWidth: 1}}>

           <Text style={{fontSize: 24, }}>{this.state.item.name}</Text>
           </View>
        </View>
        <View style={{flex: 6, borderWidth: 1,  }}>
        <View style= {{padding: 5}}>
          <Text style= {{opacity: 0.7}}>
          Location
          </Text>
          <Text style= {{fontSize: 16}}>
            {this.state.item.location.address} {this.state.item.location.city}, {this.state.item.location.country}
          </Text>
          <Text style= {{fontSize: 16}}>
            {this.state.item.location.city}, {this.state.item.location.country}
          </Text>
        </View>
        </View>
       
      </View>
    );
  }
}
