import { View, Text ,StyleSheet} from 'react-native';
import React from 'react';
import styles from '../style/style';

const styling = () => {
  return (
    <View>
      <Text style={style.text}> inline styling</Text>;
      <Text style={{fontSize:30}}> internal styling</Text>;
      <Text style={{fontSize:30}}> external styling</Text>;
    </View>
  );
};
const style=StyleSheet.create({
    text:{
        color:'white',
        fontSize:25,
        marginVertical:10,
        padding:6,
        backgroundColor:'green',
    }
})

export default styling;