import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const art = require('./assets/art.png');
const mile = require('./assets/mile.png');
const pier = require('./assets/pier.png');
const water = require('./assets/water.png');
const willis = require('./assets/willis.png');

function ArtInstituteOfChicago() {
  return (
    <View style={styles.container}>
      <Image source={art} style={styles.photos} />
    </View>
  );
}

function MagnificentMile() {
  return (
    <View style={styles.container}>
      <Image source={mile} style={styles.photos} />
    </View>
  );
}

function NavyPier() {
  return (
    <View style={styles.container}>
      <Image source={pier} style={styles.photos} />
    </View>
  );
}

function WaterTower() {
  return (
    <View style={styles.container}>
      <Image source={water} style={styles.photos} />
    </View>
  );
}

function WillisTower() {
  return (
    <View style={styles.container}>
      <Image source={willis} style={styles.photos} />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Art Institute of Chicago"
          component={ArtInstituteOfChicago}
        />
        <Drawer.Screen
          name="Magnificent Mile"
          component={MagnificentMile}
        />
        <Drawer.Screen
          name="Navy Pier"
          component={NavyPier}
        />
        <Drawer.Screen
          name="Water Tower"
          component={WaterTower}
        />
        <Drawer.Screen
          name="Willis Tower"
          component={WillisTower}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photos: {
    width: 320,
    height: 480
  },
});
