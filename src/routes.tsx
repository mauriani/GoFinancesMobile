import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

const Routes: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size, focused }) => {
        let iconName;

        if (route.name === 'Dashboard') {
          iconName = 'list';
          color = focused ? '#FF872C' : '#868b9f';
          return <Icon name={iconName} size={size} color={color} />;
        } else if (route.name === 'Register') {
          iconName = 'dollar-sign';
          color = focused ? '#FF872C' : '#868b9f';
          return <Icon name={iconName} size={size} color={color} />;
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: '#363F5F',
      inactiveTintColor: '#868b9f',
      style: {
        backgroundColor: '#FFFFFF',
        borderTopColor: '#FFFFFF',
      },
      labelStyle: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
      },
    }}
  >
    <Tab.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        title: 'Listagem',
      }}
    />
    <Tab.Screen
      name="Register"
      component={Register}
      options={{
        title: 'Cadastrar',
      }}
    />
  </Tab.Navigator>
);

export default Routes;
