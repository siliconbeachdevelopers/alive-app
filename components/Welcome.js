import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, PixelRatio, Dimensions, SafeAreaView, ScrollView, StatusBar, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
    const navigation = useNavigation();
    const [sliderState, setSliderState] = useState({ currentPage: 0 });
    const { width, height } = Dimensions.get('window');
  
    const setSliderPage = (event) => {
      const { currentPage } = sliderState;
      const { x } = event.nativeEvent.contentOffset;
      const indexOfNextScreen = Math.floor(x / width);
      if (indexOfNextScreen !== currentPage) {
        setSliderState({
          ...sliderState,
          currentPage: indexOfNextScreen,
        });
      }
    };
  
    const { currentPage: pageIndex } = sliderState;
  
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView
            style={{ flex: 1 }}
            horizontal={true}
            scrollEventThrottle={16}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={(event) => {
              setSliderPage(event);
            }}
          >
            <View style={{ width, height }}>
              <Image source={{ uri: "https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1651&q=80"}} style={styles.imageStyle} />
              <View style={styles.wrapper}>
                <Text style={styles.header}>Welcome to Alive</Text>
                <Text style={styles.paragraph}>....something like that</Text>
              </View>
            </View>
            <View style={{ width, height }}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'}}
                style={styles.imageStyle}
              />
              <View style={styles.wrapper}>
                <Text style={styles.header}>Live Events</Text>
                <Text style={styles.paragraph}>....Watch live church events</Text>
              </View>
            </View>
            
          </ScrollView>
          <View style={styles.paginationWrapper}>
            {Array.from(Array(2).keys()).map((key, index) => (
              <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
            ))}
          </View>
        </SafeAreaView>
        <Button title="Get Started" onPress={() => navigation.navigate("Signup")}/>
      </>
    );
  };

  export default Welcome
  
  const styles = StyleSheet.create({
    imageStyle: {
      height: PixelRatio.getPixelSizeForLayoutSize(135),
      width: '100%',
    },
    wrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 30,
    },
    header: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    paragraph: {
      fontSize: 17,
    },
    paginationWrapper: {
      position: 'absolute',
      bottom: 200,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    paginationDots: {
      height: 10,
      width: 10,
      borderRadius: 10 / 2,
      backgroundColor: '#0898A0',
      marginLeft: 10,
    },
  });