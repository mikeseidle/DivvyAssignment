import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default function CompanyItem({item, nav}) {
  return (
    <TouchableOpacity
      onPress={() => {
        nav.navigate('Business Profile', {item: item, name: item.name});
      }}
      style={styles.buttonContainer}>
      <View style={styles.iconLeftContainer}></View>
      <View style={styles.textMiddleContainer}>
        <Text style={styles.buttonTitle}>
          {item.name}, {item.location.city}
        </Text>
      </View>
      <View style={styles.iconRightContainer}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '90%',
    height: 60,
    backgroundColor: 'white',
    opacity: 0.9,
    alignSelf: 'center',
    marginVertical: 3,
    borderRadius: 5,
    padding: 5,
    elevation: 10,
    flexDirection: 'row',
  },
  iconLeftContainer: {
    flex: 1,
    borderWidth: 0,
  },
  textMiddleContainer: {
    flex: 6,
    borderWidth: 0,
    justifyContent: 'center',
  },
  iconRightContainer: {
    flex: 1,
    borderWidth: 0,
  },
  buttonTitle: {
    color: 'black',
    fontSize: 20,
  },
});
