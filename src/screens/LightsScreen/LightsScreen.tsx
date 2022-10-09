import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import LightButtonComponent from '../../components/LightButtonComponent/LightButtonComponent';
import {DataKey} from '../../constants/constants';
import {HueV1Light} from '../../constants/hueV1Types';
import DataService from '../../services/DataService';

interface LightScreenProps {}

interface LightScreenState {
  lights?: HueV1Light[];
}

export default class LightScreen extends React.Component<
  LightScreenProps,
  LightScreenState
> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount(): void {
    this.readLights();
  }

  readLights = async () => {
    const lights: any = await DataService.getDataObject(DataKey.HUE_V1_LIGHTS);
    this.setState({lights});
  };

  render() {
    const {lights} = this.state;

    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentWrapper}>
          {lights &&
            lights.map(light => (
              <View key={light.id} style={styles.lightButton}>
                <LightButtonComponent light={light} />
              </View>
            ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentWrapper: {
    width: '100%',
    height: 1000,
    backgroundColor: '#123456',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  scrollView: {
    width: '100%',
  },
  lightButton: {
    width: '31%',
    margin: '1%',
  },
});
