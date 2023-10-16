import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Button() {
  return (
    <TouchableOpacity style={styles.Container}>
      <Text style={styles.Title}>Entrar</Text>
    </TouchableOpacity>
  );
}
