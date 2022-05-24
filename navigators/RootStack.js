import React, { useContext } from "react";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { CredentialsContext } from "../contexts/CredentialsContext";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

import ParkingSpotList from "../screens/ParkingSpotList";
import ParkingSpotListing from "../screens/ParkingSpotListing";

import { colors } from "../components/colors/colors";
import PaymentScreen from "../screens/PaymentScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const { primary, darkGrey, secondary } = colors;

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const AppStack = () => {
  const { storedCredentials } = useContext(CredentialsContext);
  return (
    <BottomTab.Navigator
      initialRouteName="Parking Spots"
      screenOptions={{
        tabBarStyle: {
          height: 65,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "300",
          color: darkGrey,
          justifyContent: "center",
          alignItems: "center",
        },
      }}>
      <BottomTab.Screen
        name="Parking Spots"
        component={ParkingSpotList}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            let isFocused = useIsFocused();
            return (
              <Ionicons
                name="car-outline"
                color={isFocused ? secondary : primary}
                size={40}
              />
            );
          },
        }}
      />
      {storedCredentials === null ? (
        <BottomTab.Screen
          name="More Info"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              let isFocused = useIsFocused();
              return (
                <Ionicons
                  name="information-circle-outline"
                  color={isFocused ? secondary : primary}
                  size={40}
                />
              );
            },
          }}
        />
      ) : (
        <BottomTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              let isFocused = useIsFocused();
              return (
                <Ionicons
                  name="person-circle-outline"
                  color={isFocused ? secondary : primary}
                  size={40}
                />
              );
            },
          }}
        />
      )}
    </BottomTab.Navigator>
  );
};

const RootStack = () => {
  const { storedCredentials } = useContext(CredentialsContext);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {storedCredentials === null ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={SignupScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Spotsy"
              options={{ headerTitleAlign: "center" }}
              component={AppStack}
            />
            <Stack.Screen
              name="Parking Spot Listing"
              component={ParkingSpotListing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payment Methods"
              component={PaymentScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Spotsy"
              options={{ headerTitleAlign: "center" }}
              component={AppStack}
            />
            <Stack.Screen
              name="Parking Spot Listing"
              component={ParkingSpotListing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payment Methods"
              component={PaymentScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
