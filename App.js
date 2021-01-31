import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import YoutubeAPIContext from "./context/YoutubeAPI";
import SearchAPIContext from "./context/SearchAPI";
import HomeScreen from "./components/HomeScreen";
import VideoPlayer from "./components/VidePlayer";
import SearchPage from "./components/SearchPage";
import SignupScreen from "./components/SignupScreen";
import SigninScreen from './components/SigninScreen'
import Setting from './components/Setting'
import Welcome from "./components/Welcome";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          }
          if(route.name === "Setting"){
            iconName = "settings"
          }

          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <YoutubeAPIContext>
      <SearchAPIContext>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Root" component={Root} />
            <Stack.Screen name="Signup" component={SignupScreen} options={{gestureEnabled: false}}/>
            <Stack.Screen name="Signin" component={SigninScreen} options={{gestureEnabled: false}}/>
            <Stack.Screen name="videoplayer" component={VideoPlayer} />
            <Stack.Screen name="SearchPage" component={SearchPage} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Setting" component={Setting} options={{gestureEnabled: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SearchAPIContext>
    </YoutubeAPIContext>
  );
}
