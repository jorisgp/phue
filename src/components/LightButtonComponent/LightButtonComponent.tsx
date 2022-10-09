import React from 'react';
import {HueV1Light} from '../../constants/hueV1Types';
import {StyleSheet} from 'react-native';
import HueV1LightService from '../../services/HueV1LightService';
import {Button} from '@rneui/themed';
const LightButtonComponent: React.FC<LightButtonProps> = (
  props: LightButtonProps,
) => (
  <Button
    title={'light: ' + props.light.id}
    style={styles.button}
    onPress={() => HueV1LightService.toggleLightInterval(props.light)}
  />
);

export default LightButtonComponent;

interface LightButtonProps {
  light: HueV1Light;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#19199d',
  },
});
