import React, { useState } from 'react'
import { StyleSheet, Text, View, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Firebase from '../firebase/config'
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
    const navigation = useNavigation();
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const handleSubmit = () => {
        console.log(state, "<-------the state here?")
        const { username, email, password } = state 
        console.log(email, "<---email")
        console.log(password, "<---password")
        Firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log("worked!!")
                navigation.navigate("Root")
            })
            .catch(() => {
                console.log("Error in sign up page")
            })
    }
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.textHeader}>Alive App.</Text>
        </View>
        <View style={{ backgroundColor: "black"}}>
            <Text style={{ fontSize: 18, textAlign: "center", color: "#fff"}}>Create Account</Text>
        </View>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container2}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.form}>
                    <TextInput 
                        style={styles.input} 
                        onChangeText={text => setState({...state, username: text})} 
                        placeholder={"Username"}
                        value={state.username}
                    />
                    <TextInput 
                        style={styles.input} 
                        onChangeText={text => setState({...state, email: text})} 
                        placeholder={"Email"}
                        value={state.email}
                    />
                    <TextInput 
                        style={styles.input} 
                        onChangeText={text => setState({...state, password: text})} 
                        placeholder={"Password"}
                        value={state.password}
                        secureTextEntry={true}
                    />
                    <TextInput 
                        style={styles.input} 
                        onChangeText={text => setState({...state, confirmPassword: text})} 
                        placeholder={"Confirm Password"}
                        value={state.confirmPassword}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {handleSubmit}>
                            <Text style = {styles.submitButtonText}> Submit</Text>
                    </TouchableOpacity>

                    <Text onPress={() => navigation.navigate("Signin")} style={{ color: "blue"}}>Already have an Account? Sign in</Text>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFD700"
    },
    container2: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",

    },
    textHeader: {
        fontSize: 58,
        color: "white",
        transform: [{ rotate: '-2deg'}]
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        width: "80%"
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
        width: "80%"
    },
    submitButtonText:{
        color: 'white',
        textAlign: "center"
    },
    form: {
        width: "100%",
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center"
    }
})
