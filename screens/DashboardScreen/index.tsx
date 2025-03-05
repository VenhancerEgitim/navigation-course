import React from 'react';
import {View, Button, Text} from 'react-native';

const DashboardScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Dashboard Screen</Text>
      <Button
        title="Go back to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default DashboardScreen;
