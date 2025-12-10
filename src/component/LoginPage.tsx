import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [send, setSend] = useState(false);
  const handleLogin = () => {
    Alert.alert('Credentails:', email + '\n' + password);
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    send && handleLogin();
    return () => {
      setEmail('');
      setPassword('');
    };
  }, [send]);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#999"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={() => setSend(true)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#1c22d8ff',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    backgroundColor: '#954efaff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LoginPage;
// import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
// import React, { useState } from 'react'
// import { StyleSheet } from 'react-native';
// const LoginFoam = () => {
//     const [email,setemail]=useState('');
//     const [password,setpassword]=useState('');
//     const handleLogin=()=>{
//         Alert.alert('Email',email)
//         Alert.alert('Password',password)
//         setemail('');
//         setpassword('');
//     }
//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Login</Text>
//       <TextInput
//       placeholder='Email'
//       style={styles.input}
//       value={email}
//       onChangeText={setemail}
//       keyboardType='email-address'
//       autoCapitalize='none'
//       placeholderTextColor="#999"
//       />
//       <TextInput
//       placeholder='password'
//       style={styles.input}
//       value={password}
//       onChangeText={setpassword}
//       placeholderTextColor="#999"
//       secureTextEntry
//       />
//       <TouchableOpacity  onPress={handleLogin}>
//         <Text style={styles.button}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }
// const styles=StyleSheet.create({
//     container:{
//        justifyContent:'center',
//        paddingHorizontal:20,
//        paddingTop:40,
//        backgroundColor:'#7eb7f7ff'
//     },
//     heading:{
//       fontSize:20,
//       textAlign:'center',
//       fontWeight:'bold',
//       marginTop:20,
//       marginBottom:20,
//       color:'#190eedff'
//     },
//     input:{
// width:'100%',
// height:40,
// borderColor:'#360505ff',
// borderRadius:10,
// borderWidth:1,
// backgroundColor:'#fff',
// marginBottom:20,
// paddingHorizontal:15,
// fontSize:16,
// color:'#302b2bff'
//     },
//     button:{
//       width:'100%',
//       backgroundColor:'#3b3ef2ff',
//       borderRadius:10,
//       textAlign:'center',
//       paddingVertical:15,
//       marginTop:40,
//       color:'#fff'
//     }
// })

// export default LoginFoam
