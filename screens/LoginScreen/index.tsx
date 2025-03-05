import React from 'react';
import {View, Button, Text} from 'react-native';

const LoginScreen = ({navigation}: any) => {
  const handleLogin = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login Screen</Text>
      <Button title="Go to Dashboard" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
