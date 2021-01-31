import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { YoutubeAPIContext } from "../context/YoutubeAPI";

const Next = ({ nextPage }) => {
  const { handleNextPage } = useContext(YoutubeAPIContext);

  const handleClick = () => {
    handleNextPage(nextPage);
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <AntDesign name="caretright" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default Next;

const styles = StyleSheet.create({});
