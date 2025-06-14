/* eslint-disable */
import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import MealPlansScreen from '../screens/MealPlansScreen';
import CommunityScreen from '../screens/CommunityScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from '@react-native-vector-icons/Ionicons';

type TabParamList = {
  Discover: undefined;
  Community: undefined;
  MealPlans: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const DiscoverStack = createNativeStackNavigator();
const MealPlanStack = createNativeStackNavigator();
const CommunityStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const DiscoverStackScreen = () => (
  <DiscoverStack.Navigator screenOptions={{headerShown: false}}>
    <DiscoverStack.Screen name="Home" component={HomeScreen} />
  </DiscoverStack.Navigator>
);

const MealStackScreen = () => (
  <MealPlanStack.Navigator screenOptions={{headerShown: false}}>
    <MealPlanStack.Screen name="MealPlan" component={MealPlansScreen} />
  </MealPlanStack.Navigator>
);

const CommunityStackScreen = () => (
  <CommunityStack.Navigator screenOptions={{headerShown: false}}>
    <CommunityStack.Screen name="Community" component={CommunityScreen} />
  </CommunityStack.Navigator>
);

const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="Profile" component={ProfileScreen} />
  </AuthStack.Navigator>
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({
        route,
      }: {
        route: RouteProp<TabParamList, keyof TabParamList>;
      }) => {
        const getIconName = (routeName: String, focused: boolean) => {
          if (routeName == 'Discover') {
            return focused ? 'search' : 'search-outline';
          } else if (routeName == 'Community') {
            return focused ? 'people' : 'people-outline';
          } else if (routeName == 'MealPlans') {
            return focused ? 'calendar' : 'calendar-outline';
          } else if (routeName == 'Profile') {
            return focused ? 'person' : 'person-outline';
          }
          return '';
        };
        const options: BottomTabNavigationOptions = {
          tabBarIcon: ({
            focused,
            color,
            size,
          }: {
            focused: boolean;
            color: string;
            size: number;
          }) => {
            const iconName = getIconName(route.name, focused);
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#666',
          headerShown: false,
        };

        return options;
      }}>
      <Tab.Screen name="Discover" component={DiscoverStackScreen} />
      <Tab.Screen name="Community" component={CommunityStackScreen} />
      <Tab.Screen name="MealPlans" component={MealStackScreen} />
      <Tab.Screen name="Profile" component={AuthStackScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
