import { View, Text } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-elements';
import { addToFavorite } from '../redux/slice/movieSlice';

const Movie = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: any) => state.movies.list);
  const favorites = useSelector((state: any) => state.movies.favorites);

  const isFavorite = (movie: any) => {
    return favorites.some((fav: any) => fav.id === movie.id);
  };

  return (
    <View style={{ padding: 20 }}>
      {movies.map((movie: any) => (
        <View key={movie.id} style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 18, marginBottom: 5 }}>{movie.title}</Text>

          {isFavorite(movie) ? (
            <Button title="Favorited ❤️" disabled />
          ) : (
            <Button
              title="Add to Favorite"
              onPress={() => dispatch(addToFavorite(movie))}
            />
          )}
        </View>
      ))}
    </View>
  );
};

export default Movie;
