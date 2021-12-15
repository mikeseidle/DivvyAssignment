/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Businesses from './screens/Businesses';
import BusinessDetail from './screens/BusinessDetail';
//redux
import {Provider, useDispatch} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import businessReducer from './screens/store/reducers/businesses';

const rootReducer = combineReducers({
  business: businessReducer,
});

const store = createStore(rootReducer);

const MainNavigator = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator.Navigator>
          <MainNavigator.Screen name="Companies" component={Businesses} />
          <MainNavigator.Screen
            name="Business Profile"
            component={BusinessDetail}
          />
        </MainNavigator.Navigator>
      </NavigationContainer>
      </Provider>

  );
};

export default App;
