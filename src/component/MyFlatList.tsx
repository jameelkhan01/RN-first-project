import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const data = [{ id: 1, image: 'url', name: 'burger', onPress: () => navi }];

const MyFlatList = () => {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.item} onPress={item.onPress}>
      <Image source={{ uri: item.image }} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.list}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 15,
  },
  list: {
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: 'crimson',
    borderWidth: 5,
    borderColor: 'yellow',
    margin: 20,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
});

export default MyFlatList;
