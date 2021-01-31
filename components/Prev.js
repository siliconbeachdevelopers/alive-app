import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { YoutubeAPIContext } from "../context/YoutubeAPI";

const Prev = ({ prevPage }) => {
  const { handlePrevPage } = useContext(YoutubeAPIContext);

  const handleClick = () => {
    handlePrevPage(prevPage);
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <AntDesign name="caretleft" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default Prev;

const styles = StyleSheet.create({});
