import React from 'react';
import {Text, View, Button} from 'react-native';
import PhueController from '../../controllers/PhueController';

const ConnectComponent: React.FC<ConnectComponentProps> = (
  props: ConnectComponentProps,
) => {
  const connectToHue = async () => {
    await PhueController.saveLights();
  };

  const navigateToLights = async () => {
    props.onConnect();
  };

  return (
    <View>
      <Text onPress={() => connectToHue()}>Connect to Hue</Text>
      <Button title={'Lights'} onPress={() => navigateToLights()}></Button>
    </View>
  );
};

export default ConnectComponent;

interface ConnectComponentProps {
  onConnect: () => void;
}
