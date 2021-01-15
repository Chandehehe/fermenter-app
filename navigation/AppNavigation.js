import React from 'react';
import { getFocusedRouteNameFromRoute, NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationService } from 'services';

import ConnectScreen from 'screens/home/connect/ConnectScreen';
import UpdateScreen from 'screens/home/update/UpdateScreen';
import TemperatureScreen from 'screens/home/temp/TemperatureScreen';
import DateScreen from 'screens/home/date/DateScreen';

const AuthStack = createStackNavigator();

function HomeScreen() {
    return (
      <AuthStack.Navigator initialRouteName="Connect">
        <AuthStack.Screen name="Connect" component={ConnectScreen} options={{ headerShown: false }} />
        <AuthStack.Screen name="Update" component={UpdateScreen} options={{ headerShown: false }} />
        <AuthStack.Screen name="Temperature" component={TemperatureScreen} options={{ headerShown: false }} />
        <AuthStack.Screen name="Date" component={DateScreen} options={{ headerShown: false }} />
      </AuthStack.Navigator>
    );
}

export default function AppNavigation() {
    return (
        <NavigationContainer
            ref={ref => {
                NavigationService.setTopLevelNavigator(ref);
            }}
        >
            <HomeScreen />
        </NavigationContainer>
    );
  }