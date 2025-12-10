import { View, Text, NativeAppEventEmitter, Button } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Profilescreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>Profile screen</Text>
      <Button title="open drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};
const Settingscreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>Setting screen</Text>
      <Button title="open drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};
const Home = ({ navigation }: any) => {
  return (
    <View>
      <Text>home screen</Text>
      <Button title="open drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#e6e6e6',
            width: 200,
          },
          drawerLabelStyle: {
            fontSize: 18,
            color: '#277132ff',
          },
          drawerActiveBackgroundColor: '#00ff00',
          headerStyle: {
            backgroundColor: '#6200ee',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profilescreen} />
        <Drawer.Screen name="settings" component={Settingscreen} />
      </Drawer.Navigator> */}

      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Icon type="ionicon" name="home" size={size} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settingscreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Icon
                  type="ionicon"
                  name="settings"
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profilescreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Icon type="ionicon" name="person" size={size} color={color} />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
/*import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Icon } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
const Drawer = createDrawerNavigator();
const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button title="Go Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};
const profileScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>profile Screen</Text>
      <Button title="Go Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};
const settingScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>setting Screen</Text>
      <Button title="Go Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#25a5be',
            width: 240,
          },
          drawerLabelStyle: {
            fontSize: 18,
            color: '#ddd',
          },
          headerStyle: {
            backgroundColor: '#9450f3ff',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          drawerActiveBackgroundColor: '#2587be',
          drawerActiveTintColor: '#f27a7aff',
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={'#be4d25'} />
            ),
          }}
        />
        <Drawer.Screen
          name="profile"
          component={profileScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="person" size={size} color={'#be4d25'} />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          component={settingScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="settings" size={size} color={'#be4d25'} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});*/
//import {
//   View,
//   Text,
//   NativeAppEventEmitter,
//   Button,
//   StyleSheet,
// } from 'react-native';
// import React from 'react';
// //import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Icon } from 'react-native-elements';

// const Tab = createBottomTabNavigator();
// //const Drawer = createDrawerNavigator();
// const Profilescreen = ({ navigation }: any) => {
//   return (
//     <View>
//       <Text style={styles.text}>Profile screen</Text>
//     </View>
//   );
// };

// const Settingscreen = ({ navigation }: any) => {
//   return (
//     <View>
//       <Text style={styles.text}>Setting screen</Text>
//     </View>
//   );
// };
// const Home = ({ navigation }: any) => {
//   return (
//     <View>
//       <Text style={styles.text}>home screen</Text>
//     </View>
//   );
// };
// const FavoriteScreen = ({ navigation }: any) => {
//   return (
//     <View>
//       <Text style={styles.text}>Fovorite screen</Text>
//     </View>
//   );
// };
// const AddPostScreen = ({ navigation }: any) => {
//   return (
//     <View>
//       <Text style={styles.text}>AddPost screen</Text>
//     </View>
//   );
// };
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: '#457af4ff',
//           },
//           headerTitleStyle: {
//             color: '#ddd',
//           },
//           headerTitleAlign: 'center',
//           tabBarStyle: {
//             height: 50,
//           },
//         }}
//       >
//         <Tab.Screen
//           name="Home"
//           component={Home}
//           options={{
//             tabBarLabel: 'Home',
//             tabBarIcon: ({ color, size, focused }) => {
//               return (
//                 <Icon type="ionicon" name="home" size={size} color={color} />
//               );
//             },
//           }}
//         />
//         <Tab.Screen
//           name="Settings"
//           component={Settingscreen}
//           options={{
//             tabBarLabel: 'Settings',
//             tabBarIcon: ({ color, size, focused }) => {
//               return (
//                 <Icon
//                   type="ionicon"
//                   name="settings"
//                   size={size}
//                   color={color}
//                 />
//               );
//             },
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={Profilescreen}
//           options={{
//             tabBarLabel: 'Profile',
//             tabBarIcon: ({ color, size, focused }) => {
//               return (
//                 <Icon type="ionicon" name="person" size={size} color={color} />
//               );
//             },
//           }}
//         />
//         <Tab.Screen
//           name="Favorite"
//           component={FavoriteScreen}
//           options={{
//             tabBarLabel: 'Favorite',
//             tabBarIcon: ({ color, size }) => (
//               <Icon type="ionicon" name="heart" size={size} color={'red'} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="AddPost"
//           component={AddPostScreen}
//           options={{
//             tabBarLabel: 'AddPost',
//             tabBarIcon: ({ color, size }) => (
//               <Icon
//                 type="ionicon"
//                 name="add-circle"
//                 size={size}
//                 color={'green'}
//               />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
// const styles = StyleSheet.create({
//   text: {
//     fontSize: 20,
//     justifyContent: 'center',
//     textAlign: 'center',
//     paddingTop: 20,
//   },
// });
//import
//   View,
//   Text,
//   NativeAppEventEmitter,
//   Button,
//   StyleSheet,
// } from 'react-native';
// import React from 'react';
// //import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Icon } from 'react-native-elements';

// const Tab = createBottomTabNavigator();
// //const Drawer = createDrawerNavigator();
// const Profilescreen = ({ navigation }: any) => {
//   return (
//     <View>
//       <Text style={styles.text}>Profile screen</Text>
//     </View>
//   );
// };

// const Settingscreen = ({ navigation }: any) => {
//   return (
//     <View>
//       <Text style={styles.text}>Setting screen</Text>
//     </View>
//   );
// };
// const Home = ({ navigation }: any) => {
//   return (
//     <View>
//       <Text style={styles.text}>home screen</Text>
//     </View>
//   );
// };
// const FavoriteScreen = ({ navigation }: any) => {
//   return (
//     <View>
//       <Text style={styles.text}>Fovorite screen</Text>
//     </View>
//   );
// };
// const AddPostScreen = ({ navigation }: any) => {
//   return (
//     <View>
//       <Text style={styles.text}>AddPost screen</Text>
//     </View>
//   );
// };
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: '#ddd',
//           },
//           tabBarActiveTintColor: '#457af4ff',
//           headerTitleStyle: {
//             color: '#0c0b0bff',
//           },
//           headerTitleAlign: 'center',
//           tabBarStyle: {
//             height: 50,
//           },
//         }}
//       >
//         <Tab.Screen
//           name="Home"
//           component={Home}
//           options={{
//             tabBarLabel: 'Home',
//             tabBarIcon: ({ color, size, focused }) => {
//               return (
//                 <View>
//                   {focused && (
//                     <View
//                       style={{
//                         width: 20,
//                         height: 2,
//                         backgroundColor: 'blue',
//                         borderRadius: 5,
//                         marginBottom: 10,
//                       }}
//                     />
//                   )}
//                   <Icon type="ionicon" name="home" size={15} color={color} />
//                 </View>
//               );
//             },
//           }}
//         />
//         <Tab.Screen
//           name="Settings"
//           component={Settingscreen}
//           options={{
//             tabBarLabel: 'Settings',
//             tabBarIcon: ({ color, size, focused }) => {
//               return (
//                 <View>
//                   {focused && (
//                     <View
//                       style={{
//                         width: 20,
//                         height: 2,
//                         backgroundColor: 'blue',
//                         borderRadius: 5,
//                         marginBottom: 10,
//                       }}
//                     />
//                   )}
//                   <Icon
//                     type="ionicon"
//                     name="settings"
//                     size={15}
//                     color={color}
//                   />
//                 </View>
//               );
//             },
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={Profilescreen}
//           options={{
//             tabBarLabel: 'Profile',
//             tabBarIcon: ({ color, size, focused }) => {
//               return (
//                 <Icon type="ionicon" name="person" size={15} color={color} />
//               );
//             },
//           }}
//         />
//         <Tab.Screen
//           name="Favorite"
//           component={FavoriteScreen}
//           options={{
//             tabBarLabel: 'Favorite',
//             tabBarIcon: ({ color, size }) => (
//               <Icon type="ionicon" name="heart" size={15} color={'red'} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="AddPost"
//           component={AddPostScreen}
//           options={{
//             tabBarLabel: 'AddPost',
//             tabBarIcon: ({ color, size }) => (
//               <Icon
//                 type="ionicon"
//                 name="add-circle"
//                 size={15}
//                 color={'green'}
//               />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
// const styles = StyleSheet.create({
//   text: {
//     fontSize: 20,
//     justifyContent: 'center',
//     textAlign: 'center',
//     paddingTop: 20,
//   },
// });
