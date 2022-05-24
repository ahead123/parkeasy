import React, { useState, useEffect } from "react";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";

import RootStack from "./navigators/RootStack";
import { CredentialsContext } from "./contexts/CredentialsContext";

LogBox.ignoreAllLogs();

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState(null);

  const checkLoginCredentials = () => {
    AsyncStorage.getItem("spotsyCredentials")
      .then((result) => {
        if (result !== null) {
          setStoredCredentials(JSON.parse(result));
        } else {
          setStoredCredentials(null);
        }
      })
      .catch((error) => console.log(error));
  };

  if (!appReady) {
    return (
      <AppLoading
        startAsync={checkLoginCredentials}
        onFinish={() => setAppReady(true)}
        onError={() => console.log("Error loading app")}
      />
    );
  }

  return (
    <CredentialsContext.Provider
      value={{ storedCredentials, setStoredCredentials }}>
      <StatusBar style="auto" />
      <RootStack />
    </CredentialsContext.Provider>
  );
}
