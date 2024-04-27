import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/Draftbit.js';
import LinkingConfiguration from './LinkingConfiguration.js';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
import Breakpoints from './utils/Breakpoints';
import useWindowDimensions from './utils/useWindowDimensions';

import EditProfileScreen from './screens/EditProfileScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import HomeScreen from './screens/HomeScreen';
import HomeTourScreen from './screens/HomeTourScreen';
import LoginScreen from './screens/LoginScreen';
import MapResultScreen from './screens/MapResultScreen';
import NotificationSettingsScreen from './screens/NotificationSettingsScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import ProfileScreen from './screens/ProfileScreen';
import PropertyDetailScreen from './screens/PropertyDetailScreen';
import RegisterScreen from './screens/RegisterScreen';
import SearchScreen from './screens/SearchScreen';
import SettingsScreen from './screens/SettingsScreen';
import VirtualAppScreen from './screens/VirtualAppScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DefaultAndroidBackIcon({ tintColor }) {
  return (
    <View style={[styles.headerContainer, styles.headerContainerLeft]}>
      <Icon
        name="AntDesign/arrowleft"
        size={24}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </View>
  );
}

function FavoritesStack() {
  return (
    <Stack.Navigator
      initialRouteName="FavoritesScreen"
      screenOptions={({ navigation }) => ({
        cardStyle: { backgroundColor: theme.colors['hs_white'] },
        headerBackImage:
          Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
        headerMode: 'none',
        headerShown: false,
      })}
    >
      <Stack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={({ navigation }) => ({
          title: 'Favorites',
        })}
      />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ navigation }) => ({
        cardStyle: { backgroundColor: theme.colors['hs_white'] },
        headerBackImage:
          Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
        headerMode: 'none',
        headerShown: false,
      })}
    >
      <Stack.Screen
        name="PropertyDetailScreen"
        component={PropertyDetailScreen}
        options={({ navigation }) => ({
          headerShown: false,
          title: 'Property Detail',
        })}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Home',
        })}
      />
    </Stack.Navigator>
  );
}

function NotificationsStack() {
  return (
    <Stack.Navigator
      initialRouteName="NotificationsScreen"
      screenOptions={({ navigation }) => ({
        cardStyle: { backgroundColor: theme.colors['hs_white'] },
        headerBackImage:
          Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
        headerMode: 'none',
        headerShown: false,
      })}
    >
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={({ navigation }) => ({
          title: 'Notifications',
        })}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      presentation="card"
      screenOptions={({ navigation }) => ({
        cardStyle: { backgroundColor: theme.colors['hs_white'] },
        headerBackImage:
          Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
        headerMode: 'none',
        headerShown: false,
      })}
    >
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={({ navigation }) => ({
          title: 'Edit Profile',
        })}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: 'Profile',
        })}
      />
      <Stack.Screen
        name="NotificationSettingsScreen"
        component={NotificationSettingsScreen}
        options={({ navigation }) => ({
          title: 'Notification Settings',
        })}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={({ navigation }) => ({
          title: 'Settings',
        })}
      />
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator
      initialRouteName="SearchScreen"
      screenOptions={({ navigation }) => ({
        cardStyle: { backgroundColor: theme.colors['hs_white'] },
        headerBackImage:
          Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
        headerMode: 'none',
        headerShown: false,
      })}
    >
      <Stack.Screen
        name="MapResultScreen"
        component={MapResultScreen}
        options={({ navigation }) => ({
          title: 'Map Result',
        })}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={({ navigation }) => ({
          title: 'Search',
        })}
      />
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  const tabBarIcons = {
    HomeStack: 'Feather/home',
    SearchStack: 'Ionicons/ios-search',
    FavoritesStack: 'MaterialCommunityIcons/heart-outline',
    NotificationsStack: 'MaterialCommunityIcons/bell-outline',
    ProfileStack: 'Ionicons/person-outline',
  };

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ navigation }) => ({
        headerBackImage:
          Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
        headerShown: false,
        tabBarActiveTintColor: theme.colors['hs_blue_main'],
        tabBarInactiveTintColor: theme.colors['hs_grey_fourth'],
        tabBarLabelStyle: theme.typography.custom22,
        tabBarStyle: {
          backgroundColor: theme.colors['hs_white'],
          borderTopColor: theme.colors['hs_white'],
        },
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Feather/home"
              size={25}
              color={
                focused
                  ? theme.colors['hs_blue_main']
                  : theme.colors['hs_grey_fourth']
              }
            />
          ),
          tabBarLabel: 'Home',
          title: 'Home Stack',
        })}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/ios-search"
              size={25}
              color={
                focused
                  ? theme.colors['hs_blue_main']
                  : theme.colors['hs_grey_fourth']
              }
            />
          ),
          tabBarLabel: 'Search',
          title: 'Search Stack',
        })}
      />
      <Tab.Screen
        name="FavoritesStack"
        component={FavoritesStack}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/heart-outline"
              size={25}
              color={
                focused
                  ? theme.colors['hs_blue_main']
                  : theme.colors['hs_grey_fourth']
              }
            />
          ),
          tabBarLabel: 'Favorites',
          title: 'Favorites Stack',
        })}
      />
      <Tab.Screen
        name="NotificationsStack"
        component={NotificationsStack}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/bell-outline"
              size={25}
              color={
                focused
                  ? theme.colors['hs_blue_main']
                  : theme.colors['hs_grey_fourth']
              }
            />
          ),
          tabBarLabel: 'Notifications',
          title: 'Notifications Stack',
        })}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/person-outline"
              size={25}
              color={
                focused
                  ? theme.colors['hs_blue_main']
                  : theme.colors['hs_grey_fourth']
              }
            />
          ),
          tabBarLabel: 'Profile',
          title: 'Profile Stack',
        })}
      />
    </Tab.Navigator>
  );
}

function OnboardingNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="OnboardingScreen"
      screenOptions={({ navigation }) => ({
        cardStyle: { backgroundColor: theme.colors['hs_white'] },
        headerBackImage:
          Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
        headerMode: 'none',
        headerShown: false,
      })}
    >
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={({ navigation }) => ({
          title: 'Register',
        })}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={({ navigation }) => ({
          title: 'Login',
        })}
      />
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={({ navigation }) => ({
          title: 'Onboarding',
        })}
      />
    </Stack.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        initialRouteName="OnboardingNavigator"
        screenOptions={({ navigation }) => ({
          cardStyle: { backgroundColor: theme.colors['hs_white'] },
          headerBackImage:
            Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
          headerMode: 'none',
          headerShown: false,
        })}
      >
        <Stack.Screen
          name="VirtualAppScreen"
          component={VirtualAppScreen}
          options={({ navigation }) => ({
            title: 'Virtual App',
          })}
        />
        <Stack.Screen
          name="HomeTourScreen"
          component={HomeTourScreen}
          options={({ navigation }) => ({
            title: 'Home Tour',
          })}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <Stack.Screen
          name="OnboardingNavigator"
          component={OnboardingNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({ ios: { marginLeft: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
});
