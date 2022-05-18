import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";
import RootStack from "./navigators/RootStack";

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <RootStack />
    </>
  );
}
