import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {MovieList} from './Movie.js';
import {BoatsList} from './Boats.js';
const App: () => React$Node = () => {
  return (
    <ScrollView>
      <Text>Lesson 05 Exercises</Text>
      <MovieList />
      <Text>Get A Boat - For Sale</Text>
      <BoatsList />
    </ScrollView>
  );
};
export default App;
