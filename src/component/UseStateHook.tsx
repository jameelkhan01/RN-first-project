import { View, Text, Button } from 'react-native'
import React,{useState} from 'react';
const UseStateHook = () => {
    const updateName =() =>{
        setName('ali')
    }
    const [name,setName] =useState('jameel');
  return (
    <View>
      <Text style={{fontSize:30}}>UseStateHook</Text>
      <Text style={{fontSize:30}}>NAME:{name}</Text>
      <Button title='press' onPress={updateName}/>
    </View>
  )
}

export default UseStateHook