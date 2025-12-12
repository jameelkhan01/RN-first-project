import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const favorites = useSelector((state: any) => state.movies.favorites);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>
        Favorite Movies
      </Text>

      {favorites.length === 0 ? (
        <Text>No favorites yet.</Text>
      ) : (
        favorites.map((fav: any) => (
          <Text key={fav.id} style={{ marginBottom: 10, fontSize: 18 }}>
            {fav.title}
          </Text>
        ))
      )}
    </View>
  );
};

export default Favorites;
