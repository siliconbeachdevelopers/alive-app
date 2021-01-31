import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Header from "./Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { YoutubeAPIContext } from "../context/YoutubeAPI";
import Next from "../components/Next";
import Prev from "../components/Prev";

function Item({ title, imageUrl, channel, videoId }) {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("videoplayer", { title: title, videoId: videoId })
        }
      >
        <View style={styles.item}>
          <Image source={{ uri: imageUrl }} style={{ height: 200 }} />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <View>
                <Text style={styles.title}>{title}</Text>
                <Text
                  style={{
                    paddingLeft: 6,
                    paddingTop: 4,
                    color: "gray",
                  }}
                >
                  {channel}
                </Text>
              </View>
            </View>
            <Icon
              name="dots-vertical"
              size={25}
              color="gray"
              style={{ paddingTop: 20 }}
            />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

const HomeScreen = () => {
  const {
    api,
    setApi,
    nextPage,
    setNextPage,
    prevPage,
    setPrevPage,
  } = useContext(YoutubeAPIContext);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header />
        <FlatList
          data={api}
          renderItem={({ item }) => (
            <>
              <Item
                videoId={item.id.videoId}
                title={item.snippet.title}
                imageUrl={item.snippet.thumbnails.high.url}
                channel={item.snippet.channelTitle}
              />
            </>
          )}
          keyExtractor={(item) => item.etag}
        />
        <View style={styles.btnView}>
          <View>
            <Prev
              prevPage={prevPage}
              setPrevPage={setPrevPage}
              setApi={setApi}
            />
          </View>
          <View>
            <Next
              nextPage={nextPage}
              setNextPage={setNextPage}
              setApi={setApi}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    height: 300,
    borderStyle: "solid",
    borderBottomColor: "gray",
    marginVertical: "1%",
  },
  title: {
    fontSize: 17,
    paddingLeft: 6,
    paddingTop: 10,
    shadowOpacity: 0,
  },
  btnView: {
    backgroundColor: "#fff",
    // borderColor: "black",
    // borderWidth: 1,
    // borderStyle: "dashed",
    // borderRadius: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  nextBtn: {
    borderWidth: 1,
    borderColor: "red",
  },
});
