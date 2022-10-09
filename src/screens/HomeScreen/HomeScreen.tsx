import React from 'react';
import {View, Button} from 'react-native';

const HomeScreen = ({navigation}) => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
    }}>
    <Button title={'Connect'} onPress={() => navigation.navigate('Connect')} />
  </View>
);

export default HomeScreen;
