import { Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Button() {
  return (
    <TouchableOpacity style={styles.Container}>
      <Text style={styles.Title}>Apurados</Text>
      <Image style={styles.Icon} source={require('../../assets/apurados.png')}></Image>
    </TouchableOpacity>
  );
}
