import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Button({ placeholder, onPress }) {

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={styles.Container}>
      <Text style={styles.Title}>{placeholder}</Text>
    </TouchableOpacity>
  );
}
