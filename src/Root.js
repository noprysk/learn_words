import 'react-native-gesture-handler';
import React from 'react';
import LoginScreen from './screens/LoginScreen';
import GroupsScreen from './screens/group/GroupsScreen';
import GroupNewScreen from './screens/group/GroupNewScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignUpScreen from './screens/SignUpScreen';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function Root(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!props.isSignedIn ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Groups" component={GroupsScreen} />
            <Stack.Screen name="GroupNew" component={GroupNewScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function mapStateToProps(state) {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
}

export default connect(
  mapStateToProps,
  null,
)(Root);
