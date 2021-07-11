import React from 'react';
import {  View, StyleSheet, Text ,ImageBackground} from 'react-native';
import {AutoScrollFlatList} from "react-native-autoscroll-flatlist";

import {
  Card,
  Title,
  Provider as PaperProvider,
} from 'react-native-paper';

const convertStoryToList = (storyitem)=>{

  let resultarray=storyitem.split(".");
  return resultarray;
}
const renderData = (item,index) =>{
  if(index%2 === 0){
    return(

      <Text style={styles.textStyle}>{console.log("item",item)}{item}</Text>
    )
  }else{
    return(

      <Text style={styles.textStyle2}>{console.log("item",item)}{item}</Text>
    )
  }
  
}



const StoryDetail=({ route, navigation })=> {
    const { story } = route.params;
    const data=convertStoryToList(story.data);
  
    const scroll=true;
    console.log(typeof data);
    

    
  return (
    <ImageBackground 
    source={require('./images/bg2.jpg')}
    style={{ flex: 1,
      width: null,
      height: null,

      }}
  >

      <View style={styles.viewStyle}>

       <Card mode='outlined' style={styles.container} >
       <Card.Content>
       <Title style={styles.titleStyle}>{story.title}</Title>     
            </Card.Content>
       
        <Card.Cover resizeMode='contain' style={styles.coverStyle} source={story.url} />
            
    
        </Card> 

        <AutoScrollFlatList 
          data={data}


          contentContainerStyle={styles.listItem}
          keyExtractor={(item, index) => 'key'+index} 
          renderItem={(item) =>renderData(item.item,item.index)}
/>

      </View>

        </ImageBackground>
    );
  }
  
  export default StoryDetail;

  const styles = StyleSheet.create({
    viewStyle:{
      paddingTop:20,
      paddingBottom:20,
      paddingLeft:20,
      paddingRight:20,
      borderRadius: 4,
      flexGrow:1,
      marginBottom:50,

    },

    container:{
          borderRadius: 10,
          height:"50%"


    },
    listItem: {
      backgroundColor: '#ffffff',
      paddingBottom: 10,
      borderRadius: 4,
      marginTop:20,
      paddingTop: 10,
      marginBottom: 10,
      paddingRight: 10,
      paddingLeft: 10,
      paddingBottom:50,
      fontSize:72,

      flexGrow:1,
      

  },
  textStyle:{
    fontSize:25,
    fontStyle:'italic',
    fontWeight:'bold',
    color:'#999999',
    margin:10,
  },
  textStyle2:{
    fontSize:25,
    fontStyle:'italic',
    fontWeight:'bold',
    color:'#555555',
    backgroundColor:'#cccccc',
    padding:10,
  },
  titleStyle:{
    fontSize:25,
    fontStyle:'italic',
    fontWeight:'bold',
    color:'black',
    backgroundColor:'#3eb5d3',
    textAlign:'center',
    borderRadius:10,
  },
  coverStyle:{
    height:'90%',
    borderColor:'black',
  
  }
})