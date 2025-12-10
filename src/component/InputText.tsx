import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const InputText = () => {
    const [username,setusername]= useState('');
  return (
    <View>
      <Text style={{fontSize:30}}>InputText</Text>
      <Text style={{fontSize:30}}>Username:{username}</Text>
      <TextInput style={{fontSize:20,borderWidth:2,borderRadius:8,height:50,paddingHorizontal:10,
        borderColor:'green',margin:10}} value={username} placeholder='enter your username'
        onChangeText={(text)=>setusername(text)}/>
        <Button title='clear' onPress={()=>setusername('')}/>
    </View>
  );
};


export default InputText