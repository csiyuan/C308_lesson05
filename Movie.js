import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
const movie = {title: 'Doctor Sleep', year: '2019'};
export class Movie extends React.Component {
  render() {
    return (
      <Text>
        {movie.title} {'\n'} {movie.year}{' '}
      </Text>
    );
  }
}
const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];
export const MovieList = () => {
  return MOVIES_DATA.map((data) => (
    <View>
      <Text>
        {data.title} {'\n'} {data.year}
      </Text>
      <Image source={data.poster} />
    </View>
  ));
};
