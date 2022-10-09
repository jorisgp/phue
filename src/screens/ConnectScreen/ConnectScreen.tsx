import React from 'react';
import {View} from 'react-native';
import ConnectComponent from '../../components/ConnectComponent/ConnectComponent';

const ConnectScreen = ({navigation}: any) => (
  <View>
    <ConnectComponent onConnect={() => navigation.navigate('Lights')} />
  </View>
);

export default ConnectScreen;
