import { Image } from 'react-native';
import styles from './styles';

export default function Logo() {
  return (
    <Image style={styles.Logo}
        source={require('../../assets/logo.png')}
    />
  );
}
