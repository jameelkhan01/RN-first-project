
import { NewAppScreen } from '@react-native/new-app-screen';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
const First = () => {
  let name = 'jameel'
  return (
    <View>
    <Text style={{fontSize:30}}>jameeel haider app developer lahore</Text>
     <Text style={{fontSize:30}}>{name}</Text>
    </View>
  );
};

export default First;
