import { Image } from 'react-native';
import styles from './styles';

import * as Animatable from 'react-native-animatable';

export default function Logo() {
  return (
    <Animatable.Image
      style={styles.Logo}
      animation='flipInY'
      source={require('../../assets/logo.png')}
    />
  );
}
