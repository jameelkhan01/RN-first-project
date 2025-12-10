import { View, Text } from 'react-native';
import React from 'react';

const ProfileScreen = () => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
// import { View, Text } from 'react-native';
// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import Props from './src/component/Props';
// import CustomDrawer from './src/component/CustomDrawer';
// import HomeScreen from './src/sacreen/HomeScreen';
// import ProfileScreen from './src/sacreen/ProfileScreen';
// const Drawer = createDrawerNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator drawerContent={props => <CustomDrawer {...Props} />}>
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Profile" component={ProfileScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
