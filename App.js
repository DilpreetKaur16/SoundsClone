import * as React from 'react';
import { Text, View, Button,Alert,StyleSheet,TouchableOpacity, SafeAreaView, Platform, StatusBar}from'react-native';
import {Audio} from 'expo-av'
import { RFValue } from "react-native-responsive-fontsize";
 
export default class App extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'http://soundbible.com/grab.php?id=284& type=mp3'
      },
      { shouldPlay: true }
    );
  }
  playSound1 = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'http://soundbible.com/grab.php?id=1355&type=mp3'
      },
      { shouldPlay: true }
    );
  }
  playSound2 = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'http://soundbible.com/grab.php?id=2056&type=mp3'
      },
      { shouldPlay: true }
    );
  }
  playSound3 = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'http://soundbible.com/grab.php?id=1807&type=mp3'
      },
      { shouldPlay: true }
    );
  }
  
  render (){
    return (
    <View style={styles.container} >
    <SafeAreaView style={styles.droidArea}/>
      <Button title="Sound1" color="orange" onPress={()=>

      {this.playSound()}}/><Text></Text>

    <TouchableOpacity style={styles.anything} onPress={()=>{this.playSound1()}}><Text style={styles.fortext}>Sound2</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.anything} onPress={()=>{this.playSound2()}}><Text style={styles.fortext} >Sound3</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.anything} onPress={()=>{this.playSound3()}}><Text style={styles.fortext} >Sound4</Text>
    </TouchableOpacity><Text></Text>
      <Button title="Stop Sound" color="red" onPress=
      {() => {
        Audio.setIsEnabledAsync(false);
      }}/>
      
     
      
      </View>
      
    )
  }
}
  
const styles=StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center"

  },
  droidArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  anything:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white",
    color:'red',
    
    borderWidth:5,
    borderEndColor:'blue',
    borderLeftColor:'green',
    borderBottomColor:'yellow',
    borderTopColor:'chocolate',
    borderBottomLeftRadius:20,
    borderTopRightRadius:20,
    textDecorationColor:'blue',
    textShadowRadius:10,
    textShadowColor:'black',
    width:RFValue(130),
    height:RFValue(30),
    margin:30
  },
 fortext:{
   fontSize:RFValue(12)
 }
})
    
   
  



