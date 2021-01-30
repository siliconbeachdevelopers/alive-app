import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from "@expo/vector-icons"
import YoutubeAPIContext from './context/YoutubeAPI'
import HomeScreen from "./components/HomeScreen";
import VideoPlayer from "./components/VidePlayer";
import SearchPage from "./components/SearchPage";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()


function Root() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName 
          if(route.name === "Home"){
            iconName = 'home'
          }

          return <MaterialIcons name={iconName} size={32} color={color} />
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default function App(){
  return(
    <YoutubeAPIContext>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Root" component={Root}/>
          <Stack.Screen name="videoplayer" component={VideoPlayer}/>
          <Stack.Screen name="SearchPage" component={SearchPage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </YoutubeAPIContext>
  )
}