import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  ActivityIndicator,
  FlatList,
} from "react-native";
import Constant from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import MiniCard from "./MiniCard";
import { SearchAPIContext } from "../context/SearchAPI";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const SearchPage = ({ navigation }) => {
  const { value, setValue, data, fetchSearch } = useContext(SearchAPIContext);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <View
        style={{
          flex: 1,
          marginTop: Constant.statusBarHeight,
        }}
      >
        <View
          style={{
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-around",
            elevation: 5,
          }}
        >
          <Ionicons
            name="md-arrow-back"
            size={32}
            onPress={() => navigation.goBack()}
          />
          <TextInput
            style={{
              width: "70%",
              backgroundColor: "#e6e6e6",
            }}
            value={value}
            onChangeText={(text) => setValue(text)}
          />
          <Ionicons name="md-send" size={32} onPress={() => fetchSearch()} />
        </View>
        {loading ? (
          <ActivityIndicator
            style={{ marginTop: 10 }}
            size="large"
            color="red"
          />
        ) : null}
        <FlatList
          data={data.items}
          renderItem={({ item }) => {
            return (
              <>
                <MiniCard
                  videoId={item.id.videoId}
                  title={item.snippet.title}
                  channel={item.snippet.channelTitle}
                />
              </>
            );
          }}
          keyExtractor={(item) => item.id.videoId}
        />
      </View>
    </>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    borderWidth: 1,
    borderColor: "red",
    // padding: 24,
    flex: 1,
    justifyContent: "space-around",
    width: "100%",
  },
  btnView: {
    marginHorizontal: 24,
    borderWidth: 1,
    borderStyle: "dashed",
    backgroundColor: "blue",
  },
});
