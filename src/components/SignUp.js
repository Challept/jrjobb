import React, { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Here you would normally handle the sign-up process.
    // After successful sign-up, navigate to sign-in.
    navigate('/signin');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Sign Up</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUp;