 import React from 'react';
import {SafeAreaView, View,Text} from 'react-native';
import {AdMobBanner} from 'react-native-admob';
import { NavigationContainer} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import {
  Provider as PaperProvider,
} from 'react-native-paper';
import LandingPage from './LandingPage';
import Home from './Home';
import Story from './Story';
const Stack = createStackNavigator();





function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const App = () => {
  

  return (
    <PaperProvider>
    <>
      
      <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" options={{headerShown:false}} component={LandingPage}/>
        <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Story" options={{headerShown:false}} component={Story}  />
      </Stack.Navigator>
    </NavigationContainer>  
        
      
    </>
    </PaperProvider>
  );
};

export default App;