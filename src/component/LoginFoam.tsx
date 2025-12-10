import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
//import { login } from '../redux/slice/authSlice';
const LoginFoam = () => {
  const dispatch = useDispatch();

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const { user } = useSelector((state: any) => state.auth);

  const handleLogin = () => {
    // Alert.alert('Email', email);
    // Alert.alert('Password', password);
    // setemail('');
    // setpassword('');
    const userData = {
      email: email,
      password: password,
    };
    dispatch(login(userData));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setemail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="password"
        style={styles.input}
        value={password}
        onChangeText={setpassword}
        placeholderTextColor="#999"
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.button}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#7eb7f7ff',
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    color: '#190eedff',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#360505ff',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#302b2bff',
  },
  button: {
    width: '100%',
    backgroundColor: '#3b3ef2ff',
    borderRadius: 10,
    textAlign: 'center',
    paddingVertical: 15,
    marginTop: 40,
    color: '#fff',
  },
});

export default LoginFoam;
