import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App'; // Ensure this path is correct

AppRegistry.registerComponent('JobFinderApp', () => App);

if (typeof document !== 'undefined') {
  AppRegistry.runApplication('JobFinderApp', {
    initialProps: {},
    rootTag: document.getElementById('app-root'),
  });
}