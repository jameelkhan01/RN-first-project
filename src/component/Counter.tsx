import { View, Text } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-elements';
import { increment, decrement, reset } from '../redux/slice/counterSlice';

const Counter = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Counter :{count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="Reset" onPress={() => dispatch(reset())} />
    </View>
  );
};

export default Counter;
