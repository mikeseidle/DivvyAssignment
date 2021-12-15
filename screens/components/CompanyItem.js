import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';


export default function CompanyItem({item, nav})  {
  return (
    <TouchableOpacity
      onPress={() => {
        nav.navigate('Business Profile',{item:item, name: item.name})
      }}
      style={{
        width: '90%',
        height: 60,
        backgroundColor: '#000000',
        opacity: 0.9,
        alignSelf: 'center',
        marginVertical: 3,
        borderRadius: 5,
        padding: 5,
      }}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <View style={{flex: 1, borderWidth: 0}}></View>
        <View style={{flex: 6, borderWidth: 0, justifyContent: 'center'}}>
          <Text style={{color: 'white', fontSize: 20}}>
            {item.name}, {item.location.city}
          </Text>
        </View>
        <View style={{flex: 1, borderWidth: 0}}>
        </View>
      </View>
    </TouchableOpacity>
  );
};