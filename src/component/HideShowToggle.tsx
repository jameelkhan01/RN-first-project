import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import My from './My';

const HideShowToggle = () => {
    const [stats,setStats] =useState(true);
  return (
    <View>
      <Text style={{fontSize:20}}>HideShowToggle</Text>
      {
        stats ? <My/> :null
      }
      <Button title='Hide' onPress={()=> setStats(false)}/>
        <Button title='Show' onPress={()=> setStats(true)}/>
            <Button title='Toggle' onPress={()=> setStats(!stats)}/>
    </View>
  )
}

export default HideShowToggle