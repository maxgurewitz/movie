/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
} = React;

var MOCKED_MOVIES_DATA = [{
  title: 'Title',
  year: '2015',
  posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}
}];

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
});

var MovieApp = React.createClass({
  render: function() {
    var movie = MOCKED_MOVIES_DATA[0];

    return (
      <View style={styles.container}>
        <Image
          style={styles.thumbnail}
          source={{uri: movie.posters.thumbnail}}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
});

AppRegistry.registerComponent('movie', () => MovieApp);

module.exports = MovieApp;
