import { View, Text, Alert } from 'react-native'
import React from 'react'

const Child = (props:any) => {
  //Alert.alert(props.data);
  return (
    <View>
      <Text style={{fontSize:30,color:'orange'}}>child</Text>
      <Text style={{fontSize:30}}>{props.data}</Text>
    </View>
  )
}

export default Child