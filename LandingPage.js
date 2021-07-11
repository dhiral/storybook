import Home from './Home';
import React,{Component} from 'react';
import { View, Image, StyleSheet,ImageBackground,TouchableOpacity,Text } from 'react-native';
import { AutoScrollFlatList } from 'react-native-autoscroll-flatlist';


export default class LandingPage extends Component {
    componentDidMount(){
         // Start counting when the page is loaded
         this.timeoutHandle = setTimeout(()=>{
              this.props.navigation.navigate('Home')
         }, 5000);
    }

    componentWillUnmount(){
         clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    }

    render() {

    return (
<View>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
        <Image
          source={require('./images/backg2.png')}
          resizeMode='cover'
          style={styles.image}
        />
        {/* <Text>Press Here</Text> */}
      </TouchableOpacity>
    </View>







//          <View>
//      <TouchableOpacity onPress={() => console.warn("Example")}>
//      <Image 
//      source={require('./images/background.jpg')}
//      style={{ flex: 1,
//        width: null,
//        height: null,
//        }}
       
//    >
//        </Image>
// </TouchableOpacity>
// </View>
    );
  }


}


const styles = StyleSheet.create({
     image: {
      height:"100%" ,
       width:"100%",
     },
   });