import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';

export default function Button({ placeholder, onPress }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate(onPress)}
      style={styles.Container}>
      <Text style={styles.Title}>{placeholder}</Text>
    </TouchableOpacity>
  );
}
