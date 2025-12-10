import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
const data = [
  { id: 1, title: 'item 1' },
  { id: 2, title: 'item 2' },
  { id: 3, title: 'item 3' },
  { id: 4, title: 'item 4' },
  { id: 5, title: 'item 5' },
  { id: 6, title: 'item 6' },
  { id: 7, title: 'item 7' },
  { id: 8, title: 'item 8' },
  { id: 9, title: 'item 9' },
  { id: 10, title: 'item 10' },
];

const Grid = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Grid</Text>
      <ScrollView contentContainerStyle={styles.container}>
        {data.map(item => (
          <View key={item.id} style={styles.griditem}>
            <Text style={styles.itemTex}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#000',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  griditem: {
    backgroundColor: '#ff6f61',
    padding: 20,
    marginBottom: 10,
    width: '48%',
    height: 100,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTex: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default Grid;
