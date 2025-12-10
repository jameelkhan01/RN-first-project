import { View, Text,Button, Alert } from 'react-native';
import React from 'react';

const Onpress = () => {
    let name = "jameel";
    const getName = () => {
        name= "fazeel";
    Alert.alert('NAME: ' ,name);
    };
  return (
    <View>
      <Text style={{fontSize:30}}>{name}</Text>
      <Button title="press" onPress={getName}/>
    </View>
  );
};

export default Onpress;