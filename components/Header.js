import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native'


function Header() {
  const navigation = useNavigation()

    return (
      <View style={styles.header}>
        <View style={{ justifyContent: "center", paddingLeft: 20 }}>
          <Text style={styles.title}>Alive</Text>
        </View>
        <View style={styles.rightIcons}>
          {/* <TouchableOpacity>
            <Icon
              style={styles.headerIcons}
              name="videocam"
              size={35}
              color="black"
            />
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => navigation.navigate("SearchPage")}>
            <Icon
              style={styles.headerIcons}
              name="search"
              size={35}
              color="black"
            />
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Icon
              style={styles.headerIcons}
              name="account-circle"
              size={35}
              color="black"
            />
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }

export default Header

const styles = StyleSheet.create({
    header: {
      height: 60,
      backgroundColor: "#fff",
      justifyContent: "space-between",
      flexDirection: "row",
      shadowOffset: {
          width: 0,
          height: 2
      }, 
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 4
    },
    title: {
      color: "#D4AF37",
      fontSize: 32,
      fontWeight: "bold",
      shadowOffset: {
        width: 0,
        height: 2
    }, 
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4
    },
    rightIcons: {
      flexDirection: "row",
      alignItems: "center"
    },
    headerIcons: {
      marginHorizontal: 10
    }
  });