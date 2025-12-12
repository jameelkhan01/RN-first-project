import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
import { updateUser } from '../redux/slice/authSlice';

const LoginFoam = () => {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth);
  return (
    <View>
      <TextInput placeholder="name" onChangeText={setname} />
      <TextInput passwordRules="Email" onChangeText={setEmail} />
      <Button
        title="save"
        onPress={() => dispatch(updateUser({ name, email }))}
      />
      <Text>Saved Email:{user.email}</Text>
      <Text>Saved Name:{user.name}</Text>
    </View>
  );
};

export default LoginFoam;
