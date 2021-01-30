import React, { useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TextInput, Button, Dimensions } from 'react-native'
import { SearchBar } from 'react-native-elements';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const SearchPage = () => {
    const [search, setSearch] = useState()

    return (
        <>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
style={styles.container} >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
            {/* <Text style={styles.header}>Search Page</Text> */}

            <SearchBar
                placeholder="Search..."
                onChangeText={(text) => setSearch(text)}
                value={search}
                lightTheme={true}
            />
            <View style={styles.btnView}>
            <Button title="Submit" color="white" onPress={() => null} />
            </View>
            </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
</>
    )
}

export default SearchPage

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
      inner: {
        borderWidth: 1,
        borderColor: "red",
        // padding: 24,
        flex: 1,
        justifyContent: "space-around",
        width:'100%',

      },
      btnView: {
          marginHorizontal: 24,
          borderWidth: 1,
          borderStyle: "dashed",
          backgroundColor: "blue",
      }
})
