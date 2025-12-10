import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Child from './Child'
//agr hamy ak component se dusry component me apna  data ya estate sent krna ho to us
 //k lye jo ham  concept use krty he usy props khety he

const Props = () => {
  const [count , setcount] = useState (0);
  return (
    <View>
      <Text style={{fontSize:35}}>props</Text>
      <Button title='counter' onPress={()=>setcount(count + 1)}/>
     <Child data={count} />
    </View>
  )
}

export default Props