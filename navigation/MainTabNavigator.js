import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import ProfilesScreen from '../screens/ProfilesScreen';
import SessionsScreen from '../screens/SessionsScreen';
import BehaviorsScreen from '../screens/BehaviorsScreen';
import ShareScreen from '../screens/ShareScreen';

export default TabNavigator(
{
    Home: {
      screen: HomeScreen,
    },
    Profiles: {
      screen: ProfilesScreen,
    },
    Behaviors: {
      screen: BehaviorsScreen,
    },
    Sessions: {
      screen: SessionsScreen,
    },
    Share: {
      screen: ShareScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-home';
            break;
          case 'Profiles':
            iconName = Platform.OS === 'ios'
              ? `ios-contacts${focused ? '' : '-outline'}`
              : 'md-contacts';
            break;
          case 'Behaviors':
            iconName = Platform.OS === 'ios'
                ? `ios-cog${focused ? '' : ''}`
                : 'md-cog';
            break;
          case 'Sessions':
            iconName = Platform.OS === 'ios'
              ? `ios-clipboard${focused ? '' : '-outline'}`
              : 'md-clipboard';
            break;
          case 'Share':
            iconName = Platform.OS === 'ios'
              ? `ios-cloud-upload${focused ? '' : '-outline'}`
              : 'md-cloud-upload';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
  }
);
