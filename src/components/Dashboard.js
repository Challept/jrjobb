import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Dashboard</Text>
      <Text>This is where you can create or sign up for jobs.</Text>
      <Button title="Create a Job" onPress={() => { /* Navigate to create job page */ }} />
      <Button title="Sign Up for a Job" onPress={() => { /* Navigate to sign up for job page */ }} />
      <Button title="Change Language" onPress={() => { /* Language change functionality */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Dashboard;