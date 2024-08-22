import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './src/components/SignUp'; 
import SignIn from './src/components/SignIn'; 
import HomePage from './src/components/HomePage'; 
import Dashboard from './src/components/Dashboard'; 
import VerifyEmail from './src/components/VerifyEmail'; 
import PrivateRoute from './src/components/PrivateRoute'; 

const App = () => {
  return (
    <Router>
      <View style={styles.container}>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </View>
    </Router>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;