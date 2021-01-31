import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

const VidePlayer = (props) => {
  return (
    <View className="container">
      {console.log(props.route.params.title, "<----------props")}
      <Text>{props.route.params.title}</Text>
      <Text>Helllo world</Text>

      <View className="vidScreen" style={{ width: "100%", height: 200 }}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{
            uri: `https://www.youtube.com/embed/${props.route.params.videoId}`,
          }}
        />
      </View>
    </View>
  );
};

export default VidePlayer;

const styles = StyleSheet.create({});
