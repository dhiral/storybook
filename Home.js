import React from 'react';
import {Storydata} from './StoryList';

import {AdMobBanner,AdMobInterstitial} from 'react-native-admob';

import { SafeAreaView, View,  StyleSheet, ImageBackground } from 'react-native';
import {AutoScrollFlatList} from "react-native-autoscroll-flatlist";

import {
  Card,
  Title,
  Provider as PaperProvider,
} from 'react-native-paper';

const onFailToRecieveAd = (error) => console.log(error);


const HomeScreen=(props)=> {
  const data=Storydata;
  const scroll=true;

  const onCardPress = (story) =>{
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.setAdUnitID('ca-app-pub-3282013487258185/1863716906');
        AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
    
    props.navigation.navigate(
      'Story',
      {story:story}
    )
  }

  const renderData = (ssData) =>{

    return(
    <Card mode='elevated' elevation={15} style={styles.listItem} onPress={()=>onCardPress(ssData.item)}>
    <Card.Cover source={ssData.item.url} />
    <Card.Content>
      <Title>{ssData.item.title}</Title>
      
    </Card.Content>
    
    </Card>
    )
  }

  return (
    <ImageBackground 

    style={{ flex: 1,
      width: null,
      height: null,
      backgroundColor:"#d2efff"
      }}
  >

  
        <View style={styles.container}>
        <AutoScrollFlatList 
          data={data}
          numColumns={2}
          scrollEnabled={scroll}
          contentContainerStyle={{ paddingBottom: 50}}
          keyExtractor={(item, index) => item.id }
          renderItem={(item) => renderData(item)}
/>
</View>




        <SafeAreaView>
         
        <AdMobBanner
            adSize="largeBanner"
            adUnitID="ca-app-pub-3282013487258185/6819948273"
            testDeviceID="CF583E54-34C6-453C-80FC-493D2468A51E"
            didFailToReceiveAdWithError={onFailToRecieveAd}
          />
          </SafeAreaView>
      </ImageBackground>
    );
  }
  
  export default HomeScreen;

  const styles = StyleSheet.create({
    container:{
          flexDirection: 'row',
          flex:1,
          flexWrap: 'wrap',
          width:'100%',
          

    },
    contentContainer:{
      paddingVertical:20,
    },
    listItem: {
  
      flex:1,
      backgroundColor: '#ffffff',
      marginBottom: 10,
      borderRadius: 4,
      marginTop: 10,
      marginBottom: 20,
      marginRight: 10,
      marginLeft: 10,
  
  },
})