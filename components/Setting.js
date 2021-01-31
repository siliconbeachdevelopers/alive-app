import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Firebase from '../firebase/config'
import { useNavigation } from "@react-navigation/native";

const Setting = () => {
    const navigation = useNavigation();

    const handleSignout = () => {
        Firebase.auth().signOut();
        navigation.navigate("Signin")
    }
    return (
        <View style={styles.container}>
            <Text>Setting page here</Text>
            <Text>TODO: Put sign out button here</Text>
            <Button onPress={handleSignout} title="Sign out"/>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
