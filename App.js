/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TextInput, Keyboard,
  TouchableHighlight, Easing, Animated,
  WebView,
  Dimensions
} from 'react-native';

import TimePicker from './timePicker'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const Button = ({onPress, easing})=>(
      
  <TouchableHighlight onPress = {onPress}  style = {{width : '100%', height : 50, backgroundColor : 'red', margin : 10}}  >
       <Text style = {{color : 'white', textAlign : 'center'}}>{easing}</Text>
   </TouchableHighlight> 

);

const WebViewExample = () =>(
  <View style = {{height : 350, width : '100%'}}>
       <WebView
         source = {{uri : 'https://www.google.com'}}
         injectJavaScript = {console.log('Injected')}
         scalesPageToFit = {true}
         style = {{backgroundColor : 'gray', marginTop : 20}}
         renderError = {(err)=> console.log(err)}
         startInLoadingState = {true}
         javaScriptEnabled = {true}
         domStorageEnabled = {true}
      /> 
   </View> 
)


export default class App extends Component{


  constructor(props) {
   
       super(props)
       this.animatedValue = new Animated.Value(0)
    

  }

    animated(easing){
        this.animatedValue.setValue(0);
         Animated.timing(this.animatedValue, {
              
               toValue : 1,
               duration : 3000,
               easing
           
         }).start();

    }


  //  componentDidMount(){
       
  //        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
  //        this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);

  //  }
   
  //  componentWillUnmount(){

  //       this.keyboardDidShow.removeListener();
  //       this.keyboardDidHide.removeListener();
  //  }

  //  _keyboardDidShow(){

  //      console.log('Keyboard Shown');
  //  }

  //  _keyboardDidHide(){
  //    console.log('KeyBoard Hidden');
  //  }


  

  render() {

    const marginLeft = this.animatedValue.interpolate({
        inputRange : [0,1],
        outputRange : [0,Dimensions.get('window').width/2]
    });
      


    console.log(PixelRatio.getPixelSizeForLayoutSize(300));

    return (
     <View style={styles.container}>
 
          {/* <WebViewExample/> */}
 
           {/* <View style = {{width : 50, height : 50 , backgroundColor : 'blue'}}></View>    */}
           <TimePicker/>  
          <Animated.View style = {[{marginTop : 20, width : 50, height : 50 , backgroundColor : 'blue'},{marginLeft}]}/>  
         
          <Button easing = {'easeInElastic'} onPress = {this.animated.bind(this,Easing.elastic(3))}/>

          <Button easing = {'Back'} onPress = {this.animated.bind(this,Easing.back(2))}/>  

       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
