import React, {Component} from 'react'
import {
   View, TimePickerAndroid, Button
} from 'react-native'

export default class TimePicker extends Component {

    async _showTimePicker(){
           
           try {
              
                const {action, hour, minute} = await TimePickerAndroid.open({
                    hour : 14,
                    minute : 0,
                    is24Hour : false
                })
              
                 if (action !== TimePickerAndroid.dismissedAction) {
                     console.log('TIme  ',hour,'  ', minute)
                 }  

            } catch ({code, message}) {
                console.warn('Code ',code, 'Message  ',message);
            }
           

     }

    render(){

         return(
             <View style = {{width : '100%', height : 50}}>
                  <Button  onPress = {this._showTimePicker.bind(this)} title = {'Click Me'}/>
             </View>
         );

    }


}