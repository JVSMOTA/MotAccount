import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Button({ placeholder }) {
  return (
    <TouchableOpacity style={styles.Container}>
      <Text style={styles.Title}>{placeholder}</Text>
    </TouchableOpacity>
  );
}
