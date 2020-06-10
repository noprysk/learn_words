import 'react-native-gesture-handler';
import React, {Component} from 'react';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import allReducers from './reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const store = createStore(allReducers);
const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
