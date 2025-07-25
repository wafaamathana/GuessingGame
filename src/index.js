globalThis.__DEV__ = process.env.NODE_ENV !== "production";
process.env.EXPO_OS = "web";
import { AppRegistry } from "react-native";
import App from "./App";

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root"),
});
