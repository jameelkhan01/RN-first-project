import { View, Text } from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Image } from 'react-native';
import Props from './Props';
const CustomDrawer = (props: any) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#ddd' }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          flex: 1,
          backgroundColor: '#ddd',
          paddingTop: 0,
        }}
      >
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Image
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
            }}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzFx9EIOFbwsz9E_568Z_lyKguSgc9TtNEbPItlDykoONosgYRZEP9q1NjRkiXhCzpVM&usqp=CAU',
            }}
          />
          <Text
            style={{
              marginTop: 10,
              fontSize: 12,
              fontWeight: '600',
              color: '#131212ff',
            }}
            onPress={() => props.navigation.navigate('Profile')}
          >
            View Profile
          </Text>
          <DrawerItem
            label="View Profile"
            labelStyle={{ color: '#131212ff' }}
            onPress={() => props.navigation.navigate('Profile')}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
