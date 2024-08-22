import React from 'react';
import MapView, { UrlTile, Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const JobMap = ({ jobLocation, userLocation }) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: jobLocation.latitude,
          longitude: jobLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <UrlTile
          urlTemplate="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={19}
        />
        <Marker coordinate={jobLocation} title="Job Location" />
        <Marker coordinate={userLocation} title="Your Location" pinColor="blue" />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default JobMap;